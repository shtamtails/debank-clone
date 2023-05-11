import { ReactNode, useEffect, useRef, useState } from "react";
import { ActionIcon } from "../ActionIcon/ActionIcon";
import { AiOutlineClose } from "react-icons/ai";
import "./Modal.styles.scss";
import { useClickOutside } from "../../hooks/useClickOutside";
import { DefaultProps } from "../models";

export interface ModalProps extends DefaultProps {
  isOpened: boolean;
  setIsOpened: (arg0: boolean) => void;
  variant?: "light" | "dark";
  title: string;
  children: ReactNode;
  width?: string | number;
}

export const Modal: React.FC<ModalProps> = (props) => {
  const {
    children,
    title,
    isOpened,
    setIsOpened,
    variant,
    width,
    testId,
    className,
    style,
  } = props;

  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setOpacity(1);
  }, []);

  const handleOutsideClick = () => {
    setOpacity(0);
  };

  const modalRef = useRef(null);

  useClickOutside(modalRef, modalRef, handleOutsideClick);

  const getModalContainerClassName = () => {
    const defaultClassName = ["modal__inner__container"];
    variant && defaultClassName.push(`modal__inner__container--${variant}`);
    className && defaultClassName.push(className);
    return defaultClassName.join(" ").trim();
  };

  return (
    <div className="modal">
      <div
        className="modal__overlay"
        data-testid="modal-overlay"
        style={{ opacity }}
        onTransitionEnd={() => {
          opacity === 0 && isOpened && setIsOpened(false);
        }}
      />
      <div className="modal__inner">
        <div
          className={getModalContainerClassName()}
          data-testid={testId}
          style={{ width, opacity, ...style }}
          ref={modalRef}
        >
          <div className="modal__inner__container__header">
            {title}
            <ActionIcon
              onClick={() => handleOutsideClick()}
              variant="subtle"
              testId="modal-close-button"
            >
              <AiOutlineClose />
            </ActionIcon>
          </div>
          <div className="modal__inner__container__body">{children}</div>
        </div>
      </div>
    </div>
  );
};
