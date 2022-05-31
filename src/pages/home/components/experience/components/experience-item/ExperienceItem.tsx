import { FC } from 'react';
import { Wrapper, Title, Place, Task, Tasks } from './ExperienceItem.styled';

type ComponentProps = {
  title: string;
  company: string;
  date: string;
  tasks: string[];
};

const ExperienceItem: FC<ComponentProps> = ({ title, company, date, tasks = [] }) => (
  <Wrapper>
    <Title>{title}</Title>
    <Place><span>{company}</span> | <span>{date}</span></Place>
    <Tasks>
      {tasks.map(task => <Task>{task}</Task>)}
    </Tasks>
  </Wrapper>
);

export default ExperienceItem;
