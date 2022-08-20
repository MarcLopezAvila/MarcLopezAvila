import { FC } from 'react';
import { Wrapper, TitleWrapper, TitleBlock, Content } from './AboutMe.styled';

const AboutMe: FC<{}> = () => (
  <Wrapper>
    <TitleWrapper>
      <TitleBlock>About Me</TitleBlock>
    </TitleWrapper>
    <Content>
      <p>
        Experienced and highly motivated frontend developer, currently focused on furthering my backend skills.
      </p>
      <p>
        I show iniciative, desire to overcome challenges and ability to work quickly with strong attention to detail.
        I am a team player commited to deliver high quality work, always using the latest cutting-edge technologies.
      </p>
    </Content>
  </Wrapper>
);

export default AboutMe;
