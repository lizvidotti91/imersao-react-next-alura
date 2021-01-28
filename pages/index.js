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
        <QuizLogo />
        <Container>
          <Container.Header>
            <h1>{data.title}</h1>
          </Container.Header>
          <Container.Content>
            <p>{data.description}</p>
            <p>
              <input type="text" placeholder={data.txtInput} />
            </p>
            <Container.Button>Jogar</Container.Button>
          </Container.Content>
        </Container>

        <Container>
          <Container.Content>
            <h1>Quizes da Galera</h1>
            <p>Dá uma olhada nesses quizes incríveis que o pessoal da Imersão React + Next.js fez:</p>
            <ul>
              <li>Link 1</li>
              <li>Link 2</li>
              <li>Link 3</li>
            </ul>
          </Container.Content>
        </Container>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/lizvidotti91" />
    </BackgroundQuiz>
  );
}
