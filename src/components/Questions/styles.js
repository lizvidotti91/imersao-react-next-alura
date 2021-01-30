import Container from '../Container/styles';
import Arrow from '../Arrow/styles';
import Button from '../Button/styles';

function Questions({ index, total, questions, onSubmit, addResultado }) {
    // Definindo o Estado de Alternativas marcadas. Será indefinido porque não há input radio selecionado
    const [questaoSelecionada, setQuestaoSelecionada] = React.useState(undefined);
    // Definindo o estado se o formulário teve submit. Ele só tem submit quando clicamos no botão confirmar!
    const [clicouBotao, setClicouBotao] = React.useState(false);
    // Declaração variáveis
    const id = `question-${index}`;
    const estaCorreto = questaoSelecionada === questions.answer;
    const temAlternativa = questaoSelecionada !== undefined;

    return (
        <Container>
            <Container.Header>
                <Arrow />
                <h1>{`Pergunta ${index + 1} de ${total}`}</h1>
            </Container.Header>
            <img
                src={questions.image}
                style={{
                    objectFit: 'cover',
                    width: '100%',
                }}
            />
            <Container.Content>
                <h2>{questions.title}</h2>
                <p>{questions.description}</p>
                <form
                    onSubmit={(evento) => {
                        evento.preventDefault();
                        // Aqui mostra se o jogador acertou ou errou a questão
                        setClicouBotao(true);
                        // Aqui temos um tempo para que o jogador possa ver se acertou ou errou, e a tela muda para a próxima
                        setTimeout(() => {
                            addResultado(estaCorreto);
                            onSubmit(); // mudou de tela
                            // Deixar todos os inputs desmarcados quando passar para a próxima questão
                            const inputs = document.querySelectorAll(`input`);
                            inputs.forEach(input => {
                                input.checked = false;
                            })
                            setClicouBotao(false); // desabilita o botao
                            setQuestaoSelecionada(undefined); // desabilita os inputs selecionados
                        }, 2000);
                    }
                    }>
                    {questions.alternatives.map((item, itemIndex) => {
                        const idAlternativa = `alternative-${itemIndex}`;
                        const status = estaCorreto ? 'SUCCESS' : 'ERROR';
                        const estaSelecionado = questaoSelecionada === itemIndex;
                        return (
                            <Container.FormQuestion
                                as="label"
                                htmlFor={idAlternativa}
                                key={idAlternativa}
                                data-selected={estaSelecionado}
                                data-status={clicouBotao && status}
                            >
                                <input
                                    type="radio"
                                    id={idAlternativa}
                                    name={id}
                                    onChange={() => {
                                        setQuestaoSelecionada(itemIndex);
                                    }}
                                />
                                {item}
                            </Container.FormQuestion>
                        );
                    })}
                    <Button type="submit" disabled={!temAlternativa}>Confirmar</Button>
                    {clicouBotao && estaCorreto &&
                        <p className="right">
                            <i class="fas fa-check"></i>
                        </p>
                    }
                    {clicouBotao && !estaCorreto &&
                        <p className="wrong">
                            <i class="far fa-times-circle"></i>
                        </p>
                    }
                </form>
            </Container.Content>
        </Container>
    );
}

export default Questions;