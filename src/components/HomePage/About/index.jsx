import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 3rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;  

const Container = styled.div`
  max-width: 1280px;
  width: 100vw;
  height: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
  gap: 5rem;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    padding: 0 2rem;
    }
`;

const Headline = styled.h2`
  font-size: 3rem;
  font-weight: 600;
  line-height: 1.1;
  min-width: 450px;
  @media (max-width: 768px) {
    font-size: 2rem;
    min-width: 300px;
  }
`;

const Subtitle = styled.h3`
  font-size: 1.2rem;
  width: 90%;
  min-width: 400px;
  font-weight: 300;
  line-height: 1.1;
  color: #606060;
  margin-top: 1rem;
  @media (max-width: 768px) {
    font-size: 1.1rem;
    min-width: 300px;
  }
`;

const LeftSection = styled.div`
  flex: 6;
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1rem;
`;

const RightSection = styled.div`
  flex: 4;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const ProfileImg = styled.img`
  min-width: 200px;
  width: 300px;
  object-fit: cover;
`;


function About() {
  return (
    <Wrapper id='about'>
      <Container>
        <LeftSection>
          <Headline data-aos="fade-up" data-aos-duration="800">Hi I'm Kelly Guo<br/>a software engineer.</Headline>
          <Subtitle data-aos="fade-up" data-aos-duration="1000">
            Backend engineer with expertise in building scalable systems using Python, and AWS. Skilled in cloud architecture, IoT data processing, and real-time systems.
            <br/>
            <br/>
            I also bring strong communication and project management skills from my experience as an advertising director. 
          </Subtitle>
        </LeftSection>
        <RightSection>
          <ProfileImg src='./img/profile.jpg' alt='profile'></ProfileImg>
        </RightSection>
      </Container>
    </Wrapper>
  )
}

export default About;