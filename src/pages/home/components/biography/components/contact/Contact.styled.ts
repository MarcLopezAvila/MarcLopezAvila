import styled from 'styled-components';

export const Wrapper = styled.section`
  padding-right: 80px;
  width: 450px;
  margin-bottom: 50px;
`;

export const Title = styled.div`
  font-weight: 800;
  font-size: 22px;
  text-transform: uppercase;
`;

export const Data = styled.ul`
  padding-top: 24px;
  list-style-type: none;
  margin: 0;
  font-size: 17px;
  font-weight: 300;
  padding-left: 0;
  margin-bottom: 28px;
  li {
    margin-bottom: 5px;
  }
`;

export const Languages = styled.ul`
  margin: 0;
  list-style-position: inside;
  list-style-type: disc;
  padding: 0;
  display: flex;
  text-transform: none;
  font-weight: 800;
  font-size: 16px;
  li {
    margin-right: 15px;
    &:first-child {
      list-style-type: none;
    }
  }
`;
