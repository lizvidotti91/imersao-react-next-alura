import styled from 'styled-components';
import data from '../../../data.json';

const QuizLogoWrapper = styled.figure`
    display: flex;
    justify-content: center;
    img{
        height: 20vh;
    }
`;

function QuizLogo() {
    return (
        <QuizLogoWrapper>
            <img src={data.imgLogo} />
        </QuizLogoWrapper>
    );
}

export default QuizLogo;