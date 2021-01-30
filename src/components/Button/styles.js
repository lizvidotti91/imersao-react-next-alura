import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 1vh;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  color: ${({ theme }) => theme.colors.contrastText};
  margin-top: 2vh;
  padding: 0.8vw;
  text-transform: uppercase;
  width: 100%;
  &:hover{
    background-color: #ab5600;
  }
  &:disabled{
    background-color: #5f6b72;
  }
`;

export default Button;