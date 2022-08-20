import { FC } from 'react';
import { Wrapper, Title, Data, Languages } from './Contact.styled';

const Contact: FC<{}> = () => (
  <Wrapper>
    <Title>Contact Information</Title>
    <Data>
      <li>675329212</li>
      <li>lopez.avila.marc@gmail.com</li>
      <li>Barcelona</li>
    </Data>
    <Languages>
      <li>Spanish</li>
      <li>Catalan</li>
      <li>English</li>
    </Languages>
  </Wrapper>
);

export default Contact;
