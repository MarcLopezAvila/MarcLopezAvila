import { FC } from 'react';
import { Wrapper, Place } from './ExperienceItem.styled';

type ComponentProps = {
  title: string;
  date: string;
};

const MoreExperienceItem: FC<ComponentProps> = ({ title, date }) => (
  <Wrapper>
    <Place><span>{title}</span> | <span>{date}</span></Place>
  </Wrapper>
);

export default MoreExperienceItem;
