import React, { FC, ReactElement, useMemo } from 'react';
import styled from 'styled-components';

interface FormControlProps {
  control: ReactElement;
  children?: ReactElement;
}

const FormControlContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin: 8px;
  min-width: 120px;
`;

const UnstyledFormControl: FC<FormControlProps> = ({
  control,
  children,
  ...props
}) => {
  const disabled = useMemo(
    () => !!control.props.disabled,
    [control.props.disabled],
  );

  return (
    <FormControlContainer {...props}>
      {control}
      {children && React.cloneElement(children, { disabled })}
    </FormControlContainer>
  );
};

const FormControl = styled(UnstyledFormControl)``;

export default FormControl;
