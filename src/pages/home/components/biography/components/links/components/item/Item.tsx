import { FC } from 'react';
import Image from 'next/image';
import { Wrapper, Link } from './Item.styled';

type ComponentProps = {
  link: string;
  icon: string;
};

const Item: FC<ComponentProps> = ({ link, icon }) => (
  <Wrapper>
    <Image src={icon} width={20} height={20} />
    <Link href={link} target="_blank">{link}</Link>
  </Wrapper>
);

export default Item;
