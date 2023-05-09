import { useState, useRef, ChangeEvent } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import { getInputClassNames } from "../../utils/getClassName/getClassName";
import { DropdownMenuProps, InputProps } from "./Input.model";
import { IoMdArrowDropdown } from "react-icons/io";
import "./Input.style.scss";

export const DropdownMenu: React.FC<DropdownMenuProps> = (props) => {
  const {
    value,
    data,
    variant,
    menuRef,
    size,
    setMenuOpened,
    setValue,
    setInputValue,
  } = props;

  const filteredData = value
    ? data?.filter((el) =>
        el.label.toLowerCase().includes(value?.toLowerCase())
      )
    : data;
  return (
    <div
      data-testid="autocomplete-dropdown-menu"
      className={`dropdown-menu dropdown-menu--${variant}`}
      ref={menuRef}
    >
      {filteredData?.map((element, index) => (
        <div
          key={index}
          data-testid="autocomplete-dropdown-menu-element"
          className={`dropdown-menu__element 
              dropdown-menu__element--${size} 
              dropdown-menu__element--${variant}
               ${
                 value === element.value
                   ? `dropdown-menu__element--selected--${variant}`
                   : ""
               } 
              
              `}
          onClick={() => {
            setMenuOpened(false);
            setInputValue(element.label);
            setValue && setValue(element.value);
          }}
        >
          {element.label}
        </div>
      ))}
    </div>
  );
};

export const Input: React.FC<InputProps> = (props) => {
  const [menuOpened, setMenuOpened] = useState(false);

  const [inputValue, setInputValue] = useState(
    props.data
      ? props.data.find((item) => item.value === props.value)?.label
      : props.value
  );

  // Close menu when clicked outside of it
  const menuRef = useRef(null);
  const inputRef = useRef(null);
  useClickOutside(menuRef, inputRef, () => {
    setMenuOpened(false);
  });

  const {
    inputClassName,
    descriptionClassName,
    labelClassName,
    containerClassName,
  } = getInputClassNames(props);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (props.type === "autocomplete" || props.type === "select") {
      setInputValue(e.target.value);
    } else {
      props.setValue && props.setValue(e.target.value);
    }
  };

  const handleClick = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <div
      data-testid="input-container"
      className={containerClassName}
      style={{ width: props.width }}
    >
      {props.label && (
        <label className={labelClassName}>
          {props.label}
          {props.required && <div className="input__label--required">*</div>}
        </label>
      )}
      {props.description && (
        <div className={descriptionClassName}>{props.description}</div>
      )}
      <div className="input-wrapper">
        {props.icon && <div className="input__icon">{props.icon}</div>}
        {props.type === "select" && (
          <div className="input__dropdown-icon">
            <IoMdArrowDropdown />
          </div>
        )}
        <input
          readOnly={props.type === "select"}
          ref={inputRef}
          type={props.type}
          data-testid={props.testId}
          disabled={props.disabled}
          placeholder={props.placeholder}
          className={inputClassName}
          style={{ width: props.width, height: props.height }}
          value={
            props.type === "autocomplete" || props.type === "select"
              ? inputValue
              : props.value
          }
          onChange={handleChange}
          onClick={handleClick}
        />
      </div>
      {props.error && <div className="input__error">{props.error}</div>}
      {(props.type === "autocomplete" || props.type === "select") &&
        menuOpened && (
          <DropdownMenu
            value={inputValue || ""}
            data={props.data || []}
            variant={props.variant || "light"}
            menuRef={menuRef}
            size={props.size || "sm"}
            setMenuOpened={setMenuOpened}
            setValue={props.setValue}
            setInputValue={setInputValue}
          />
        )}
    </div>
  );
};
