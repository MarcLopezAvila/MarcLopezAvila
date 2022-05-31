import { experienceList, moreExperienceList } from 'application/data/experience';
import TitleBlock from 'common/components/ui/title-block';
import ExperienceItem from './components/experience-item';
import MoreExperienceItem from './components/more-experience-item';
import { Wrapper } from './Experience.styled';

const Experience = () => (
  <Wrapper>
    <section>
      <TitleBlock>Work Experience</TitleBlock>
      {experienceList.map((data) => (
        <ExperienceItem
          title={data.title}
          company={data.company}
          date={data.date}
          tasks={data.tasks}
        />
      ))}
    </section>
    <section>
      <TitleBlock>More</TitleBlock>
      {moreExperienceList.map((data) => (
        <MoreExperienceItem
          title={data.title}
          date={data.date}
        />
      ))}
    </section>
  </Wrapper>
);

export default Experience;
