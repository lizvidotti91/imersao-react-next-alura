import Container from '../Container/styles';
import Arrow from '../Arrow/styles';
import Button from '../Button/styles';

function Questions({ index, total, questions, onSubmit }) {
    const id = `question-${index}`;
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
                <form onSubmit={(evento) => {
                    evento.preventDefault();
                    onSubmit();
                }}>
                    {questions.alternatives.map((item, itemIndex) => {
                        return (
                            <Container.FormQuestion>
                                <input type="radio" id={itemIndex} name={id} />
                                <label htmlFor={itemIndex}>{item}</label>
                            </Container.FormQuestion>
                        );
                    })}
                    <Button type="submit">Confirmar</Button>
                </form>
            </Container.Content>
        </Container>
    );
}

export default Questions;