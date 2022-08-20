import { FC, ReactNode } from 'react';
import { Wrapper } from './TitleBlock.styled';

type ComponentProps = {
  children: ReactNode;
  className?: string;
};

const TitleBlock: FC<ComponentProps> = ({ children, className }) => (
  <Wrapper className={className}>
    {children}
  </Wrapper>
);

export default TitleBlock;
