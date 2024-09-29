import styled from 'styled-components';
import {data} from './config';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  width: 100%;
  @media (max-width: 1024px) {
    padding: 2rem 0rem;
  }
`;    

const Container = styled.div`
  max-width: 1280px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 3rem;
  gap: 5rem;
  @media (max-width: 1024px) {
    padding: 0 2rem;
    min-width: 330px;
    padding: 0;
    flex-direction: column;
    gap: 1rem;
    align-items: start;
    }
`;

const ProjectTextWrapper = styled.div`
  display: flex;
  flex:4;
  margin-right: 6rem;
  flex-direction: column;
  gap: 1rem;
  min-width: 300px;
  max-width: 630px;
  @media (max-width: 1024px) {
    margin-right: 0;
    flex: 1;
`;

const ProjectTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
`;

const ProjectDesc = styled.p`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.4;
`;

const ProjectSubDesc = styled.p`
  margin-top: 1rem;
  font-size: 1rem;
  font-weight: 400;
  color: #666;
  @media (max-width: 1024px) {
    margin-top: 0.5rem;
  }
`;

const ProjectLink = styled.a`
  margin-top: 5rem;
  font-size: 1rem;
  font-weight: 400;
  color: #000;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  transition: all 0.3s ease;
  
  &:hover {
    span {
      transform: translateX(8px);
    }
  }
    @media (max-width: 1024px) {
      margin-top: 0;
    }
`;

const ProjectLinkArrow = styled.span`
  font-size: 1rem; 
  font-weight: 300;
  color: #000;
  margin-left: 8px;
  transition: transform 0.3s ease;
`;

const ProjectImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 640px;
  max-height: 365px;
  @media (max-width: 1024px) {
    width: 100%;
    height: 100%;
  }
`;

const ProjectImg = styled.img`
  width: 100%;
  height: 100%; 
  object-fit: cover;
`;

function ProjectDetail() {
  return (
    <Wrapper>
        {data.map((project, index) => (
        <Container key={index}>
            <ProjectTextWrapper key={index}>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDesc>{project.desc}</ProjectDesc>
                <ProjectSubDesc>{project.subDesc}</ProjectSubDesc>
                <ProjectLink href={project.link}>GitHub<ProjectLinkArrow>→</ProjectLinkArrow></ProjectLink>
            </ProjectTextWrapper>
            <ProjectImgWrapper>
                <ProjectImg src={project.img} alt={project.title} />
            </ProjectImgWrapper>
        </Container>
        ))} 
    </Wrapper>
  )
}

export default ProjectDetail;