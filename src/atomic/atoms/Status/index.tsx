import * as React from "react";
import { styled } from "config/theme";

export interface IStatusProps {
  className?: string;
  text: string;
  bgColor?: string;
  color?: string;
}

const StatusComponent: React.FunctionComponent<IStatusProps> = ({
  className,
  text,
}) => {
  return <div className={className}>{text}</div>;
};

export const Status = styled(StatusComponent)`
  margin: 8px auto 0;
  display: inline-block;
  background: ${(props) => props.bgColor || props.theme.colors.silverChalice};
  color: ${(props) => props.color || props.theme.colors.white};
  border-radius: 3px;
  font-weight: bold;
  font-size: 12px;
  line-height: 10px;
  text-transform: uppercase;
  padding: 4px 8px;
`;
