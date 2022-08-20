import { FC } from 'react';
import { educationList } from 'application/data/education';
import Item from './components/item';
import { Wrapper, TitleWrapper, TitleBlock, Items } from './Education.styled';

const Education: FC<{}> = () => (
  <Wrapper>
    <TitleWrapper>
      <TitleBlock>Education</TitleBlock>
    </TitleWrapper>
    <Items>
      {educationList.map((data, index) => <Item key={index} {...data} />)}
    </Items>
  </Wrapper>
);

export default Education;
