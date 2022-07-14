import React, { forwardRef, InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { IconCheck } from '../..';

const CheckboxInput = styled.input`
  cursor: inherit;
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  z-index: 1;
`;

const CheckIconWrapper = styled.div`
  width: 18px;
  height: 18px;
  background: #fbfbfd;
  border: 1px solid #e9eaee;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 2px;

  > svg {
    display: none;
    color: #ffffff;
  }
`;

const CheckboxContainer = styled.div`
  display: inline-block;
  position: relative;
  cursor: pointer;
  padding: 8px;

  input:checked + ${CheckIconWrapper} {
    background: ${({ theme }) => theme.palette.semantic.primary.main};
    border-color: ${({ theme }) => theme.palette.semantic.primary.main};

    > svg {
      display: block;
    }
  }
`;

type CheckBoxProps = InputHTMLAttributes<HTMLInputElement>;

const Checkbox = styled(
  forwardRef<HTMLInputElement, CheckBoxProps>(
    ({ className, ...props }, ref) => {
      return (
        <CheckboxContainer className={className}>
          <CheckboxInput ref={ref} {...props} />
          <CheckIconWrapper>
            <IconCheck />
          </CheckIconWrapper>
        </CheckboxContainer>
      );
    },
  ),
)``;

Checkbox.defaultProps = {
  type: `checkbox`,
};

export default Checkbox;
