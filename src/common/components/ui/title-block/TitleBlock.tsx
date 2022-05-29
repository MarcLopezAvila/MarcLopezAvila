import { FC, ReactNode } from 'react';
import { Wrapper } from './TitleBlock.styled';

type ComponentProps = {
  children: ReactNode;
};

const TitleBlock: FC<ComponentProps> = ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
);

export default TitleBlock;
