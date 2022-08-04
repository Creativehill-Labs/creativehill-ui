import React, {
  FC,
  MouseEvent,
  MouseEventHandler,
  PropsWithChildren,
  useCallback,
} from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

export interface ModalProps {
  open?: boolean;
  onClose?: (e: MouseEvent, reason: 'escapeKeyDown' | 'backdropClick') => void;
}

const Backdrop = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  inset: 0px;
  background-color: transparent;
  z-index: -1;
`;

const ModalRoot = styled.div<{ open?: boolean }>`
  visibility: ${({ open }) => !open && `hidden`};
`;

const Modal: FC<PropsWithChildren<ModalProps>> = ({
  onClose,
  children,
  ...props
}) => {
  const handleBackdropClick = useCallback<MouseEventHandler<HTMLElement>>(
    (event) => {
      if (event.target !== event.currentTarget) {
        return;
      }

      if (onClose) {
        onClose(event, `backdropClick`);
      }
    },
    [onClose],
  );

  return createPortal(
    <ModalRoot {...props}>
      <Backdrop onClick={handleBackdropClick} />
      {children}
    </ModalRoot>,
    document.body,
  );
};

export default Modal;
