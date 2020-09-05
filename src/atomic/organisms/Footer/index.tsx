import * as React from "react";
import { styled } from "config/theme";

export interface IFooterProps {
  className?: string;
}

const FooterComponent: React.FunctionComponent<IFooterProps> = ({
  className,
}) => <div className={className}>
      AGB • Datenschutz • Impressum
    </div>

export const Footer = styled(FooterComponent)`
  padding: 24px 0;
  color: ${(props) => props.theme.colors.baseText};
  position: absolute;
  text-align: center;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 70px;
  font-size: 14px;
  line-height: 22px;
`;
