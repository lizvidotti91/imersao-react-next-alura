import styled from 'styled-components'

const Container = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => {
    return theme.colors.mainBg;
  }};
  border-radius: 4px;
  overflow: hidden;
  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
  ul{
    list-style-type: none;
    margin: 0;
    padding: 0;
    li{
      background-color: ${({ theme }) => theme.colors.secondary};
      border-radius: 1vh;
      margin: 1vh 0;
      padding: 0.8vw;
    }
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`;

Container.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};
  
  * {
    margin: 0;
  }
`;

Container.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  form{
    input{
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: 1vh;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.contrastText};
    margin-bottom: 2vh;
    padding: 0.8vw;
    width: 100%;
    }
  }
`;

Container.ContentQuiz = styled.div`
  width: 100%;
  img{
    width: 100%
  }
`;

Container.Button = styled.button`
  background-color: #979797;
  border: none;
  border-radius: 1vh;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  color: ${({ theme }) => theme.colors.contrastText};
  text-transform: uppercase;
  padding: 0.8vw;
  width: 100%;
  &:hover{
    background-color: #ababab;
  }
`;

export default Container; 