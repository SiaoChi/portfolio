import styled from 'styled-components';


const Wrapper = styled.div`
  margin-top: 40px;
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

const Title = styled.h4`
  font-size: 1.25rem;
  line-height: 1.4;
  text-decoration: underline;
  text-underline-offset: 0.1rem;
  min-width: 100px;
`;

const WorkDescSec = styled.div`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.4;
  width: 90%;
`;

const Point = styled.li`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
`;

const WorkItem = styled.div`
  margin-bottom: 1rem;
  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    color: #666;
  }
`;

const WorkDate = styled.p`
  color: #666;
  font-size: 0.9rem;
`;

const JobTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 500;
`;

function Certification() {
  return (
    <Wrapper>
      <Container>
        <Title>Certification</Title>

        <WorkItem>
          <WorkDate>Aug/2024</WorkDate>
          <JobTitle>AWS Certified Cloud Practitioner</JobTitle>
        </WorkItem>

      </Container>
    </Wrapper>
  );
}

export default Certification;