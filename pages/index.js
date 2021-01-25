import styled from 'styled-components';
import data from '../data.json';

const BackGroundQuiz = styled.section`
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: cover;
`;

export default function Home() {
  return (
    <BackGroundQuiz backgroundImage={data.bg}>Oi</BackGroundQuiz>
  );
}
