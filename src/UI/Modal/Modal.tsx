import { useEffect, useRef, useState } from "react";
import { ActionIcon } from "../ActionIcon/ActionIcon";
import { AiOutlineClose } from "react-icons/ai";
import "./Modal.styles.scss";
import { ModalProps } from "./Modal.types";
import { useClickOutside } from "../../hooks/useClickOutside";

export const Modal: React.FC<ModalProps> = (props) => {
  const { children, title, isOpened, setIsOpened, variant, width, testId } =
    props;

  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setOpacity(1);
  }, []);

  const handleOutsideClick = () => {
    setOpacity(0);
  };

  const modalRef = useRef(null);

  useClickOutside(modalRef, modalRef, handleOutsideClick);

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
          className={`modal__inner__container modal__inner__container--${variant}`}
          data-testid={testId}
          style={{ width, opacity }}
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
