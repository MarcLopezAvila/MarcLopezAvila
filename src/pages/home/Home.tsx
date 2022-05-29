import Biography from './components/biography';
import Experience from './components/experience';
import { Wrapper } from './Home.styled';

function Home() {
  return (
    <Wrapper>
      <Biography />
      <Experience />
    </Wrapper>
  );
}

export default Home;
