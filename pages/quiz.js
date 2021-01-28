import BackgroundQuiz from '../src/components/BackgroundQuiz/styles';
import QuizContainer from '../src/components/QuizContainer/styles';
import QuizLogo from '../src/components/QuizLogo/styles';
import Container from '../src/components/Container/styles';
import Footer from '../src/components/Footer/styles';
import GitHubCorner from '../src/components/GitHubCorner/styles';
import data from '../data.json';

export function ListAlternatives() {
    for (var i = 0; i < data.questions[0].alternatives.length; i++) {
        return (
            <li>{data.questions[0].alternatives[i]}</li>
        );
    }
}

export default function PageQuiz() {
    return (
        <BackgroundQuiz backgroundImage={data.bg}>
            <QuizContainer>
                <QuizLogo />
                <Container>
                    <Container.Header>
                        <h1>Pergunta 1 de 5</h1>
                    </Container.Header>
                    <Container.Content>
                        <Container.ContentQuiz>
                            <img src={data.questions[0].image} />
                            <h2>{data.questions[0].title}</h2>
                            <p>{data.questions[0].description}</p>
                            <ul className="lista-alternativas">
                                <ListAlternatives />
                            </ul>
                            <Container.Button>Jogar</Container.Button>
                        </Container.ContentQuiz>
                    </Container.Content>
                </Container>
                <Footer />
            </QuizContainer>
            <GitHubCorner projectUrl="https://github.com/lizvidotti91" />
        </BackgroundQuiz>
    );
}