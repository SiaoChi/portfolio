import styled from 'styled-components';
import About from '../../components/HomePage/About';
import Skill from '../../components/HomePage/Skill';
import Work from '../../components/HomePage/Work';


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


const Home = () => {
  return (
    <>
    <Wrapper>
      <Container>
      <About />
      <Skill />
      <Work />
      {/* <Project /> */}
      {/* <Contact /> */}
      </Container>
    </Wrapper>
    </>
  );
};

export default Home;
