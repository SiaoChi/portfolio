import styled from 'styled-components';
import ProjectDetail from '../../components/ProjectPage/Project';
import HeroSec from '../../components/ProjectPage/HeroSec';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 120px;
  @media (max-width: 768px) {
    margin-top: 80px;
  }
`;  

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 1024px) {
    padding: 0 5vw;
  }
  @media (max-width: 768px) {
    min-width: 350px;
    width: 100vw;
  }
`;

const ProjectPage = () => {
  return (
    <>
    <Wrapper>
      <Container>
        <HeroSec />
        <ProjectDetail />
      </Container>
    </Wrapper>
    </>
  );
};

export default ProjectPage;