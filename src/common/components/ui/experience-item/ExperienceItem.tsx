import { FC } from 'react';
import { Wrapper, Title, Place, Task, Tasks } from './ExperienceItem.styled';

type ComponentProps = {
  title: string;
  company: string;
  dateRange: [Date, Date];
  tasks: string[];
};

const ExperienceItem: FC<ComponentProps> = ({ title, company, dateRange, tasks }) => (
  <Wrapper>
    <Title>{title}</Title>
    <Place><span>{company}</span> | <span>{dateRange[0].toDateString()}</span></Place>
    <Tasks>
      {tasks.map(task => <Task>{task}</Task>)}
    </Tasks>
  </Wrapper>
);

export default ExperienceItem;
