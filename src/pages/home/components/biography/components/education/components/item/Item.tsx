import { FC } from 'react';
import { Wrapper, Title, Place, Separator } from './Item.styled';

type ComponentProps = {
  title: string;
  place: string;
  date: string;
};

const Item: FC<ComponentProps> = ({ title, place, date }) => (
  <Wrapper>
    <Title>{title}</Title>
    <Place>
      <span>{place}</span>
      <Separator>-</Separator>
      <span>{date}</span>
    </Place>
  </Wrapper>
);

export default Item;
