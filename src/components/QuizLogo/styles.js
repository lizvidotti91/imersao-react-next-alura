import styled from 'styled-components';

const QuizLogo = styled.figure`
    background-image: url(${({ backgroundLogo }) => backgroundLogo});
`;

export default QuizLogo;