import React, { forwardRef, SelectHTMLAttributes } from 'react';
import styled from 'styled-components';
import IconChevronDown from '../../icons/IconChevronDown';
import { selectColors } from './types';

const SelectContainer = styled.div`
  display: inline-flex;
  position: relative;
`;

const SelectElement = styled.select`
  appearance: none;
  cursor: pointer;
  box-sizing: content-box;
  padding: 16px 12px;
  padding-right: 68px;
  border-radius: 8px;
  width: 100%;
  color: ${({ theme }) => theme.palette.dark2.main};
  border: 1px solid ${({ theme }) => theme.palette.dark1.main};
  :focus {
    border: 1px solid ${({ theme }) => theme.palette.primary.main};
  }
  :disabled {
    color: ${({ theme }) => theme.palette.light3.main};
    border: 1px solid ${({ theme }) => theme.palette.light3.main};
    background-color: ${({ theme }) => theme.palette.light1.main};
  }
`;

const SelectIcon = styled(IconChevronDown)`
  position: absolute;
  top: calc(50% - 0.5em);
  right: 12px;
  pointer-events: none;
  ${SelectElement}:focus + & {
    color: ${({ theme }) => theme.palette.primary.main};
  }
  ${SelectElement}:disabled + & {
    color: ${({ theme }) => theme.palette.light3.main};
  }
`;

const Select = styled(
  forwardRef<
    HTMLSelectElement,
    Omit<SelectHTMLAttributes<HTMLSelectElement>, 'type'>
  >(({ className, color, ...props }, ref) => {
    return (
      <SelectContainer className={className} color={color}>
        <SelectElement ref={ref} {...props} />
        <SelectIcon />
      </SelectContainer>
    );
  }),
)``;

Select.defaultProps = {
  color: selectColors.PRIMARY,
};

export default Select;
