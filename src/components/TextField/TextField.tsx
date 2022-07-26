import React, { forwardRef, InputHTMLAttributes } from 'react';
import styled from 'styled-components';

type TextFieldProps = InputHTMLAttributes<HTMLInputElement>;

const UnstyledTextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ className, ...props }, ref) => (
    <div className={className}>
      <input ref={ref} {...props} />
    </div>
  ),
);

const TextField = styled(UnstyledTextField)`
  > input,
  textarea {
    border-radius: 6px;
    border: 1px solid #d3d3d4;
    background: none;
    width: 100%;
    padding: 16px;
    font-size: 16px;

    ::placeholder {
      color: ${({ theme }) => theme.palette.dark1.main};
    }

    :focus {
      border: 1px solid ${({ theme }) => theme.palette.primary.main};
    }
  }
`;

export default TextField;
