import "./MenuDivider.styles.scss";

interface MenuDividerProps {
  variant?: "light" | "dark";
}

export const MenuDivider: React.FC<MenuDividerProps> = (props) => {
  return <div className={`menu__divider menu__divider--${props.variant}`} />;
};
