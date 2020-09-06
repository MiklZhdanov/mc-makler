import React, { ReactNode } from "react";
import { styled } from "config/theme";
import { media } from "config/mixins";

export const inputStyles = `
display: block;
border: 1px solid #E6E6E6;
border-radius: 4px;
outline: none;
height: 45px;
width: 100%;
font-weight: normal;
font-size: 16px;
line-height: 19px;
color: #4A4A4A;
&::placeholder {
  color: #9D9D9D;
}
`;

export const InputStyled = styled.input`
  ${inputStyles}
`;
export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  componentRef?: any;
  icon?: ReactNode;
}

const InputComponent = ({
  onSubmit,
  onFocus,
  onBlur,
  value,
  placeholder,
  type,
  name,
  disabled,
  required,
  onChange,
  className,
  autoComplete,
  componentRef,
  defaultValue,
  icon = null,
}: InputProps) => {
  const commonProps = {
    value,
    defaultValue,
    onSubmit,
    onFocus,
    onBlur,
    placeholder,
    type,
    name,
    disabled,
    required,
    onChange,
    className,
    autoComplete,
  };
  return (
    <div className={className}>
      {icon && <div className="input-icon">{icon}</div>}
      <InputStyled ref={componentRef} {...commonProps} />
    </div>
  );
};

export const Input = styled(InputComponent)`
  position: relative;
  width: 100%;

  ${media.tablet`
    min-width: 305px;
    width: auto;
  `}

  input {
    padding: 13px 42px;
  }

  .input-icon {
    z-index: 1;
    position: absolute;
    left: 10px;
    top: 11px;
  }
`;
