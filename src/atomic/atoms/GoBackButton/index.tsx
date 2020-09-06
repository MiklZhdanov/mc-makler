import * as React from "react";
import { Link } from "react-router-dom";

import { styled } from "config/theme";
import { ReactComponent as BackIcon } from "icons/back.svg";

export interface IGoBackButtonProps {
  className?: string;
  text: string;
  link?: string;
}

const GoBackButtonComponent: React.FunctionComponent<IGoBackButtonProps> = ({
  className,
  text,
  link = "/",
}) => {
  return (
    <Link to={link} className={className}>
      <BackIcon />
      <span>{text}</span>
    </Link>
  );
};

export const GoBackButton = styled(GoBackButtonComponent)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${(props) => props.theme.colors.baseText};
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  span {
    margin-left: 16px;
  }
`;
