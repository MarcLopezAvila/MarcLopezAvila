import { FC } from 'react';
import { Wrapper, Title, Position } from './Name.styled';

const Name: FC<{}> = () => (
  <Wrapper>
    <Title><span>Marc</span> López Ávila</Title>
    <Position>Senior Frontend Developer</Position>
  </Wrapper>
);

export default Name;
