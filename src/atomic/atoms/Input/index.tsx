import React, { ReactNode } from "react";
import { styled } from "config/theme";
import { media } from "config/mixins";

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
      <input ref={componentRef} {...commonProps} />
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
    padding: ${(props) => (props.icon ? "13px 42px" : "13px")};
    display: block;
    border: 1px solid ${(props) => props.theme.colors.mercury};
    border-radius: 4px;
    outline: none;
    height: 45px;
    width: 100%;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: ${(props) => props.theme.colors.baseText};
    box-shadow: none;

    &::placeholder {
      color: ${(props) => props.theme.colors.silverChalice};
    }
  }

  .input-icon {
    z-index: 1;
    position: absolute;
    left: 10px;
    top: 11px;
  }
`;
