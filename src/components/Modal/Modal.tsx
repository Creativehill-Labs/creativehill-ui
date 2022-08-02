import React, { FC, PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

export interface ModalProps {
  open?: boolean;
}

const ModalRoot = styled.div<{ open?: boolean }>`
  visibility: ${({ open }) => !open && `hidden`};
`;

const Modal: FC<PropsWithChildren<ModalProps>> = ({ ...props }) => {
  return createPortal(<ModalRoot {...props} />, document.body);
};

export default Modal;
