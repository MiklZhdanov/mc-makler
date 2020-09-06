import * as React from "react";
import { styled } from "config/theme";
import { Link } from "react-router-dom";
import { media } from "config/mixins";
import { ReactComponent as BurgerIcon } from "icons/burger.svg";
import { ReactComponent as MessageIcon } from "icons/message.svg";
import { ReactComponent as UserIcon } from "icons/user.svg";
import { ReactComponent as PowerIcon } from "icons/power.svg";
import { ReactComponent as SupportIcon } from "icons/support.svg";
import { ReactComponent as LogoIcon } from "icons/logo.svg";

export interface IHeaderProps {
  className?: string;
}

const HeaderComponent: React.FunctionComponent<IHeaderProps> = ({
  className,
}) => {
  return (
    <header className={className}>
      <div className="header-burger">
        <BurgerIcon />
      </div>
      <Link to={"/"} className="header-logo">
        <LogoIcon />
      </Link>
      <a href="tel:000-000-0000" className="header-item">
        <SupportIcon />
        <label>Contact Support</label>
      </a>
      <div className="header-item header-message">
        <MessageIcon />
      </div>
      <div className="header-item">
        <UserIcon />
      </div>
      <div className="header-item">
        <PowerIcon />
      </div>
    </header>
  );
};

export const Header = styled(HeaderComponent)`
  width: 100%;
  /* position: sticky;
  top: 0px; 
  z-index: 100;*/
  color: ${(props) => props.theme.colors.baseText};

  display: flex;
  align-items: center;

  height: 55px;
  padding: 16px 24px;

  ${media.tablet`
    height: 80px;
    padding: 28px 14px 28px 0px;
  `}

  .header {
    &-item {
      margin-left: 0px;
      display: none;
      cursor: pointer;
      color: ${(props) => props.theme.colors.baseText};

      ${media.tablet`
        margin-left: 32px;
        display: flex;
        align-items: center;
      `}

      label {
        font-weight: bold;
        font-size: 16px;
        line-height: 24px;
        margin-left: 10px;
        cursor: pointer;
      }
    }

    &-logo {
      flex-grow: 1;
      text-align: center;
      height: 26px;
      padding-left: 10px;
      svg {
        height: 16px;
        width: auto;
      }

      ${media.tablet`
        padding-left: 0px;
        text-align: left;
        height: auto;
        svg{
          height: auto;
          width: auto;
        }
      `}
    }
    &-burger {
      cursor: pointer;
      svg {
        height: 24px;
        width: 24px;
      }
      ${media.tablet`
        margin-right: 36px;
        svg{
          height: auto;
          width: auto;
        }`}
    }

    &-message {
      display: flex;
      svg {
        width: 32px;
        height: auto;
      }
    }
  }
`;
