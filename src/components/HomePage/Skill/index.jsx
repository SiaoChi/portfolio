import styled from 'styled-components';
import { data } from './config';

const Wrapper = styled.div`
  padding: 3rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;  

const Container = styled.div`
  max-width: 1280px;
  width: 100vw;
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  gap: 2rem;
  padding: 0 3rem;
  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`;

const SkillWrapper = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  gap: 3rem;
`;

const SkillTitle = styled.h4`
  font-size: 1rem;
  line-height: 1.4;
  text-decoration: underline;
  text-underline-offset: 0.1rem;
  min-width: 100px;
`;

const SkillDesc = styled.p`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.4;
  width: 50%;
  color: #606060;
`;

const HorizontalLine = styled.hr`
  width: 100%;
  height: 1px;
  background-color: #606060;
  border: none;
  margin: 1rem 0;
`;


function Skill() {
  return (
    <Wrapper>
      <Container data-aos="fade-up" data-aos-duration="1000">

        {data.map((item, index) => (
          <SkillWrapper key={index}>
            <SkillTitle>{item.title}</SkillTitle>
            <SkillDesc>{item.desc}</SkillDesc>
          </SkillWrapper>
        ))}

        <HorizontalLine />
      </Container>
    </Wrapper>
  )
}

export default Skill;