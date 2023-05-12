import { forwardRef } from "react";
import "./DropdownMenu.styles.scss";
import { DefaultProps, Sizes } from "../models";

export type DropdownMenuData = { value: string; label: string };

export interface DropdownMenuProps extends DefaultProps {
  data: DropdownMenuData[];
  size: Sizes;
  setMenuOpened: (arg0: boolean) => void;
  setLabel: (arg0: string) => void;
  value?: string;
  setValue?: (arg0: string) => void;
}

export const DropdownMenu = forwardRef<HTMLDivElement, DropdownMenuProps>(
  (props, ref) => {
    const {
      size = "sm",
      colorScheme = "light",
      data,
      setMenuOpened,
      setLabel,
      value,
      setValue,
      className,
      testId,
      style,
    } = props;

    const getElementClassName = (element: DropdownMenuData) => {
      const dropdownElementClassName = ["dropdown-menu__element"];
      size && dropdownElementClassName.push(`dropdown-menu__element--${size}`);
      colorScheme &&
        dropdownElementClassName.push(`dropdown-menu__element--${colorScheme}`);
      value === element.value &&
        dropdownElementClassName.push(
          `dropdown-menu__element--selected--${colorScheme}`
        );
      return dropdownElementClassName.join(" ").trim();
    };

    const getDropdownClassName = () => {
      const dropdownClassName = ["dropdown-menu"];
      className && dropdownClassName.push(className);
      colorScheme && dropdownClassName.push(`dropdown-menu--${colorScheme}`);
      return dropdownClassName.join(" ").trim();
    };

    const handleClick = (label: string, value: string) => {
      setMenuOpened(false);
      setValue && setValue(value);
      setLabel(label);
    };

    return (
      <div
        style={style}
        data-testid={testId}
        className={getDropdownClassName()}
        ref={ref}
      >
        {data.map((element, index) => (
          <div
            data-testid={testId && `${testId}-element`}
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
