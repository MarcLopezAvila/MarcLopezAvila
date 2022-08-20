import styled from 'styled-components';
import CommonTitleBlock from 'common/components/ui/title-block/TitleBlock';

export const Wrapper = styled.section`
  padding-right: 80px;
  width: 450px;
  margin-bottom: 50px;
  flex: 1;
`;

export const TitleWrapper = styled.div`
  background: #697B89;
  width: 450px;
  margin-bottom: 35px;
`;

export const TitleBlock = styled(CommonTitleBlock)`
  color: white;
  width: 450px;
  margin-bottom: 0;
  background: none;
`;

export const Items = styled.ul`
  font-size: 16px;
  line-height: 20px;
  margin: 0;
  padding: 0;
`;
