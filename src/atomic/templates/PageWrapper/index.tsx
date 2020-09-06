import * as React from "react";
import { styled } from "config/theme";
import { media } from "config/mixins";

interface IPageWrapperProps {
  className?: string;
  children?: React.ReactNode;
}

const PageWrapperComponent: React.FunctionComponent<IPageWrapperProps> = ({
  className,
  children,
}) => {
  return <div className={className}>{children}</div>;
};

export const PageWrapper = styled(PageWrapperComponent)`
  background-color: ${(props) => props.theme.colors.white};
  padding: 20px 16px 16px;

  ${media.tablet`
    padding: 29px 24px 28px;
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.05);
    border-radius: 3px;
  `}

  ${media.desktop`
  `}
`;
