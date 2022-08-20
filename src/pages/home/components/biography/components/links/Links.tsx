import { FC } from 'react';
import { linksList } from 'application/data/links';
import Item from './components/item';
import { Wrapper, Items } from './Links.styled';

const Links: FC<{}> = () => (
  <Wrapper>
    <Items>
      {linksList.map((data, index) => <Item key={index} {...data} />)}
    </Items>
  </Wrapper>
);

export default Links;
