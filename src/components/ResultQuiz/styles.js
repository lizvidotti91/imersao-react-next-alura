import Container from '../Container/styles';
import Button from '../Button/styles';

export function nomeJogador(context) {
    return (
        <p>Mandou bem, {context.query}!</p>
    );
}

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
                {/* <nomeJogador /> */}
                <p>Você fez {total} pontos, parabéns!</p>
                <Button>Adicionar ao meu projeto</Button>
                <p
                    style={{
                        textAlign: 'center',
                    }}
                >
                    <a href="/">Voltar para a Home</a>
                </p>
            </Container.Content>
        </Container>
    );
}

export default ResultQuiz;