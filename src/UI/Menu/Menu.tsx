import { useEffect, useRef, useState } from "react";
import { MenuProps } from "./Menu.model";
import "./Menu.style.scss";
import { useClickOutside } from "../../hooks/useClickOutside";
import { MenuLabel } from "./MenuLabel/MenuLabel";
import { MenuItem } from "./MenuItem/MenuItem";
import { MenuDivider } from "./MenuDivider/MenuDivider";

export const Menu = (props: MenuProps) => {
  const { width, children, target, visible, setVisible } = props;
  const [opacity, setOpacity] = useState(0);
  const [targetCords, setTargetCords] = useState<{
    x: number;
    y: number;
    height: number;
    width: number;
  }>({
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
