import React, { FC, ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';
import { Text } from '../..';

interface FormControlLabelProps extends SpaceProps {
  control: ReactElement;
  label: ReactNode;
}

const UnstyledFormControlLabel: FC<FormControlLabelProps> = ({
  control,
  label,
  ...props
}) => {
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label {...props}>
      {control}
      <Text>{label}</Text>
    </label>
  );
};

const FormControlLabel = styled(UnstyledFormControlLabel)`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  ${space}
`;

export default FormControlLabel;
