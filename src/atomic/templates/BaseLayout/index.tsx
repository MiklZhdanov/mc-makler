import * as React from 'react';
import { styled } from 'config/theme';
import { Header } from 'atomic/organisms/Header';
import { Footer } from 'atomic/organisms/Footer';
import { ContentWrapper } from 'atomic/templates/ContentWrapper';
import { PageWrapper } from 'atomic/templates/PageWrapper';


interface IBaseLayoutProps {
  className?: string;
  children?: React.ReactNode;
}

const BaseLayoutComponent: React.FunctionComponent<IBaseLayoutProps> = ({className, children}) => {
  return <div className={className}>
   
    <ContentWrapper>
      <Header/>
        <PageWrapper>
          {children}
        </PageWrapper>
      <Footer/>
    </ContentWrapper>
   
  </div>
};

export const BaseLayout = styled(BaseLayoutComponent)`
min-height: 100vh;
background: ${(props) => props.theme.colors.alabaster};
.page-wrapper{
  &-body{
    padding: 30px 0px;
  }
}
`