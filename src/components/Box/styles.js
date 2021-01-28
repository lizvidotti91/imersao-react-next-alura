import styled from 'styled-components';

const Box = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 2vh;
  height: 40vh;
  margin-bottom: 4vh;
  @media screen and (max-width: 768px){
    height: 30vh
  }

  h2{
    color: ${({ theme }) => theme.colors.contrastText};
    font-size: 2.2vh;
    font-weight: 300;
    line-height: 1.5;
    margin: 2vh auto;
    text-align: justify;
    width: 80%;
  }

  p{
    color: ${({ theme }) => theme.colors.contrastText};
    font-size: 2vh;
    font-weight: 100;
    line-height: 1.5;
    margin: 0 auto;
    text-align: justify;
    width: 80%;
  }
`;

Box.Title = styled.h1`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.contrastText};
  display: flex;
  font-size: 3vh;
  font-weight: 500;
  justify-content: center;
  padding: 2vh;
  *{
    margin: 0;
  }
`;

export default Box;