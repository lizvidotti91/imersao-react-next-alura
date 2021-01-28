import BackgroundQuiz from '../src/components/BackgroundQuiz/styles';
import QuizContainer from '../src/components/QuizContainer/styles';
import QuizLogo from '../src/components/QuizLogo/styles';
import Container from '../src/components/Container/styles';
import Footer from '../src/components/Footer/styles';
import GitHubCorner from '../src/components/GitHubCorner/styles';
import data from '../data.json';


export default function Home() {
  return (
    <BackgroundQuiz backgroundImage={data.bg}>
      <QuizContainer>
        <QuizLogo>Logo</QuizLogo>
        <Container>
          <Container.Header>
            <h1>{data.title}</h1>
          </Container.Header>
          <Container.Content>
            <p>{data.description}</p>
          </Container.Content>
        </Container>

        <Container>
          <Container.Content>
            <h1>Quizes da Galera</h1>

            <p>lorem ipsum dolor sit amet...</p>
          </Container.Content>
        </Container>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/lizvidotti91" />
    </BackgroundQuiz>
  );
}
