import Container from '../Container/styles';
import Button from '../Button/styles';

function ResultQuiz({ resultado }) {
    const total = resultado.reduce((soma, elemento) => {
        if (elemento == true) {
            return soma + 1;
        }
        return soma;
    }, 0);
    return (
        <Container>
            <Container.Header>
                <h1>Resultado</h1>
            </Container.Header>
            <Container.Content>
                <p>Mandou bem, Fulano!</p>
                <p>Você fez {total} pontos, parabéns!</p>
                <Button>Adicionar ao meu projeto</Button>
                <a href="/">Voltar para a Home</a>
            </Container.Content>
        </Container>
    );
}

export default ResultQuiz;