import { Wrapper, Separator } from './Biography.styled';
import Name from './components/name';
import Contact from './components/contact';
import AboutMe from './components/about-me';
import Education from './components/education';
import Links from './components/links';

const Biography = () => (
  <Wrapper>
    <Name />
    <Separator />
    <Contact />
    <AboutMe />
    <Education />
    <Links />
  </Wrapper>
);

export default Biography;
