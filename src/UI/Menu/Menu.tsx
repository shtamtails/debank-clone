import { useEffect, useRef, useState } from "react";
import { CordsType, MenuProps } from "./Menu.types";
import { useClickOutside } from "../../hooks/useClickOutside";
import { MenuLabel } from "./MenuLabel/MenuLabel";
import { MenuItem } from "./MenuItem/MenuItem";
import { MenuDivider } from "./MenuDivider/MenuDivider";
import "./Menu.style.scss";

export const Menu = (props: MenuProps) => {
  const { width, children, target, visible, setVisible, testId } = props;
  const [opacity, setOpacity] = useState(0);
  const [targetCords, setTargetCords] = useState<CordsType>({
    x: 0,
    y: 0,
    height: 0,
    width: 0,
  });

  useEffect(() => {
    const cords = target.current?.getBoundingClientRect();
    cords &&
      setTargetCords({
        x: cords.x,
        y: cords.y,
        height: cords.height,
        width: cords.width,
      });
  }, []);

  const menuRef = useRef(null);

  useEffect(() => {
    setOpacity(1);
  }, []);

  const handleOutsideClick = () => {
    setOpacity(0);
  };

  useClickOutside(menuRef, target, handleOutsideClick);
  return (
    <div
      data-testid={testId}
      onTransitionEnd={() => {
        opacity === 0 && visible && setVisible(false);
      }}
      ref={menuRef}
      className="menu"
      style={{
        top: targetCords.y + targetCords.height,
        left: targetCords.x,
        opacity,
        width,
      }}
    >
      {children}
    </div>
  );
};

Menu.Label = MenuLabel;
Menu.Item = MenuItem;
Menu.Divider = MenuDivider;
