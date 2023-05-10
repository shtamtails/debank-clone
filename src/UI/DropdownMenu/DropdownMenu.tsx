import { forwardRef } from "react";
import { DropdownMenuProps, DropdownMenuData } from "./DropdownMenu.model";
import "./DropdownMenu.styles.scss";

export const DropdownMenu = forwardRef<HTMLDivElement, DropdownMenuProps>(
  (props, ref) => {
    const { data, variant, size, setMenuOpened, setLabel, value, setValue } =
      props;

    const getElementClassName = (element: DropdownMenuData) => {
      const dropdownElementClassName = ["dropdown-menu__element"];
      size && dropdownElementClassName.push(`dropdown-menu__element--${size}`);
      variant &&
        dropdownElementClassName.push(`dropdown-menu__element--${variant}`);
      value === element.value &&
        dropdownElementClassName.push(
          `dropdown-menu__element--selected--${variant}`
        );
      return dropdownElementClassName.join(" ").trim();
    };

    const handleClick = (label: string, value: string) => {
      setMenuOpened(false);
      setValue && setValue(value);
      setLabel(label);
    };

    return (
      <div
        className={`dropdown-menu dropdown-menu--${variant}`}
        ref={ref}
        data-testid="dropdown-menu"
      >
        {data.map((element, index) => (
          <div
            data-testid="dropdown-menu-element"
            key={index}
            className={getElementClassName(element)}
            onClick={() => handleClick(element.label, element.value)}
          >
            {element.label}
          </div>
        ))}
      </div>
    );
  }
);
