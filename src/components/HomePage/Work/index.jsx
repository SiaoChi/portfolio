import styled from 'styled-components';

const Wrapper = styled.div`
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

const WorkTitle = styled.h4`
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
  width: 100%;
`;

const Point = styled.li`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
`;

const WorkDate = styled.p`
  color: #666;
  font-size: 0.9rem;
`;

const JobTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 500;
`;

function Work() {
  return (
    <Wrapper id='work'>
      <Container>
        <WorkTitle>Work Experience</WorkTitle>
        
        <WorkItem>
          <WorkDate>Nov/2023 - Nov/2024</WorkDate>
          <JobTitle>Brocere Electronics - Software Engineer - Backend</JobTitle>
          <WorkDescSec>
            <Point>Designed and implemented a MQTT subscription system with message queue, optimizing data processing workflows and database access patterns.
</Point>
            <Point>Developed a multi-threaded application using Python to handle concurrent MQTT subscriptions, improving system efficiency and preventing bottlenecks.
</Point>
            <Point>Integrated Celery for managing high-volume I/O operations, ensuring main application responsiveness.</Point>
            <Point>Collaborated with firmware and AI engineers to develop an IoT-based fire detection system, processing large volumes of image data.</Point>
          </WorkDescSec>
        </WorkItem>

        <WorkItem>
          <WorkDate>Mar/2023 - Sep/2024</WorkDate>
          <JobTitle>AppWorks School - Backend Engineer</JobTitle>
          <WorkDescSec>
            <Point>Led a team to first place in an internal e-commerce promotion project competition.</Point>
            <Point>Independently developed a Real-Time Matching System project.</Point>
          </WorkDescSec>
        </WorkItem>

        <WorkItem>
          <WorkDate>Dec/2020 - Dec/2022</WorkDate>
          <JobTitle>30 Table - Account Director / Corporate partner</JobTitle>
        <WorkDescSec>
            <Point>Developed and executed marketing strategies for clients, including market research, campaign planning and execution, and results analysis.</Point>
            <Point>Managed all aspects of client relationships, including communication, presentations, and contract negotiation.</Point>
          </WorkDescSec>
        </WorkItem>

        <WorkItem>
          <WorkDate>Mar/2017 - Sep/2020</WorkDate>
          <JobTitle>Ogilvy - Associate Account Director</JobTitle>
        <WorkDescSec>
            <Point>Managed a team of advertising professionals, including account managers, creative directors, and media specialists.</Point>
            <Point>Negotiated contracts and managed budgets for multiple campaigns simultaneously.</Point>
          </WorkDescSec>
        </WorkItem>
      </Container>
    </Wrapper>
  )
}

const WorkItem = styled.div`
  margin-bottom: 1rem;
  
  h3 {
    margin-bottom: 0.5rem;
  }

  p {
    color: #666;
  }
`;

export default Work;