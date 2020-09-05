import * as React from 'react';
import { styled } from 'config/theme';
import { media } from 'config/mixins';

interface IContentWrapperProps {
  className?: string;
  children?: React.ReactNode;
}

const ContentWrapperComponent: React.FunctionComponent<IContentWrapperProps> = ({className,children}) => {
  return <div className={className}>
      {children}
  </div>
};

export const ContentWrapper = styled(ContentWrapperComponent)`
margin: 0 auto;

${media.tablet`
  margin: 0 50px;
`}

${media.desktop`
  width: 1340px;
  margin: 0 auto;
`}
`