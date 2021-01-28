import styled from 'styled-components';
import data from '../../../data.json';

const QuizLogoWrapper = styled.figure`
    
`;

function QuizLogo() {
    return (
        <QuizLogoWrapper>
            <img src={data.imgLogo} />
        </QuizLogoWrapper>
    );
}

export default QuizLogo;