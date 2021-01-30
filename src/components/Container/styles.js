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
  .right{
    background-color: ${({ theme }) => theme.colors.success};
    border: none;
    border-radius: 50%;
    font-size: 4vh;
    line-height: 7vh;
    margin: 4vh auto 0;
    text-align: center;
    width: 7vh;
  }
  .wrong{
    color: ${({ theme }) => theme.colors.wrong};
    font-size: 7vh;
    margin: 4vh auto 0;
    text-align: center;
    width: 7vh;
  }
`;

Container.FormQuestion = styled.a`
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: 1vh;
    cursor: pointer;
    display: block;
    margin: 2vh 0;
    padding: 0.8vw;
    width: 100%;
    &:hover{
      background-color: #5f6b72;
    }
    &[data-selected="true"] {
      background-color: ${({ theme }) => theme.colors.primary};
      
      &[data-status="SUCCESS"] {
        background-color: ${({ theme }) => theme.colors.success};
      }
      &[data-status="ERROR"] {
        background-color: ${({ theme }) => theme.colors.wrong};
      }
    }
    input{
      display: none;
    }
`;

export default Container; 