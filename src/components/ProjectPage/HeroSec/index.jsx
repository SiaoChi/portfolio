import styled from 'styled-components';


const Wrapper = styled.div`
  padding: 0 0 3rem 0;
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  @media (max-width: 1024px) {
    padding: 2rem 0rem;
    justify-content: start;
  }
`;  

const Container = styled.div`
  max-width: 1280px;
  height: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
  flex-wrap: wrap;
  @media (max-width: 1024px) {
    padding: 0;
    flex-direction: column;
    align-items: start;
    height: 180px;
    }
`;


const LeftSection = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;

`;

const RightSection = styled.div`
  flex: 6;
  display: flex;
  justify-content: start;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  line-height: 1.1;
  min-width: 400px;
  @media (max-width: 1024px) {
    font-size: 1.5rem;
    margin-top: 2rem;
    min-width: 300px;
  }
`;

const Desc = styled.h3`
  font-size: 1.4rem;
  font-weight: 300;
  line-height: 1.1;
  color: #606060;
  margin-top: 4rem;
  width: 90%;
  padding-left: 4rem;
  @media (max-width: 1024px) {
    padding-left: 0;
    margin-top: 1rem;
    font-size: 1.1rem;
    max-width: 500px;
  }
`;


function HeroSec() {
  return (
    <Wrapper id='about'>
      <Container>
        <LeftSection>
          <Title>Welcome!<br/>Kelly's Side Projects.</Title>
        </LeftSection>
        <RightSection>
            <Desc>The following works are my side projects, covering the full-stack domain, including backend architecture development.</Desc>  
        </RightSection>
      </Container>
    </Wrapper>
  )
}

export default HeroSec;