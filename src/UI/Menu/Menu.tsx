import { ReactNode, RefObject, useEffect, useRef, useState } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import { MenuLabel } from "./MenuLabel/MenuLabel";
import { MenuItem } from "./MenuItem/MenuItem";
import { MenuDivider } from "./MenuDivider/MenuDivider";
import "./Menu.style.scss";
import { DefaultProps } from "../models";

export type CordsType = {
  x: number;
  y: number;
  height: number;
  width: number;
};

export interface MenuProps extends DefaultProps {
  children: ReactNode;
  target: RefObject<HTMLButtonElement>;
  visible: boolean;
  setVisible: (arg0: boolean) => void;
  width?: number | string;
}

export const Menu = (props: MenuProps) => {
  const {
    width,
    children,
    target,
    visible,
    setVisible,
    testId,
    className,
    variant,
    style,
  } = props;
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

  const getClassName = () => {
    const defaultClassName = ["menu"];
    defaultClassName.push(`menu--${variant}`);
    className && defaultClassName.push(className);
    return defaultClassName.join(" ").trim();
  };

  return (
    <div
      data-testid={testId}
      onTransitionEnd={() => {
        opacity === 0 && visible && setVisible(false);
      }}
      ref={menuRef}
      className={getClassName()}
      style={{
        top: targetCords.y + targetCords.height,
        left: targetCords.x,
        opacity,
        width,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

Menu.Label = MenuLabel;
Menu.Item = MenuItem;
Menu.Divider = MenuDivider;
