import React, { FC, PropsWithChildren, useMemo } from 'react';
import styled from 'styled-components';
import Modal from '../Modal/Modal';
import Paper from '../Paper/Paper';

export interface PopoverProps {
  open?: boolean;
  anchorEl?: HTMLElement | null;
}

const PopoverRoot = styled(Modal)``;

const PopoverPaper = styled(Paper)<{ top: number; left: number }>`
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
`;

const Popover: FC<PropsWithChildren<PopoverProps>> = ({
  anchorEl,
  open,
  ...props
}) => {
  const anchorOffset = useMemo(() => {
    if (anchorEl) {
      const anchorRect = anchorEl.getBoundingClientRect();
      return {
        top: anchorRect.top + anchorRect.height,
        left: anchorRect.left,
      };
    }
    return {
      top: 0,
      left: 0,
    };
  }, [anchorEl]);

  return (
    <PopoverRoot open={open}>
      <PopoverPaper {...anchorOffset} {...props} />
    </PopoverRoot>
  );
};

export default Popover;
