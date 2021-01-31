import BackgroundQuiz from '../../src/components/BackgroundQuiz/styles';
import LoadContainer from '../../src/components/LoadContainer/styles';
import QuizContainer from '../../src/components/QuizContainer/styles';
import QuizLogo from '../../src/components/QuizLogo/styles';
import Questions from '../../src/components/Questions/styles';
import ResultQuiz from '../../src/components/ResultQuiz/styles';
import Footer from '../../src/components/Footer/styles';
import GitHubCorner from '../../src/components/GitHubCorner/styles';
import data from '../../data.json';

import { motion } from 'framer-motion';
import { useEffect } from 'react';

// Informando quais são os três estados em que a tela pode estar
/*
    Efeitos/Effects do React para COMPONENTES DE CLASSE
    - componente 'nasceu': didMount
    - componente vai atualizar: willUpdate
    - componente vai 'morrer': willUnmount

    useEffect();
*/
const EstadosDaTela = {
    LOADING: 'LOADING',
    QUIZ: 'QUIZ',
    RESULTADO: 'RESULTADO',
};

function PageQuiz() {
    // INICIANDO A TELA COM O ESTADO DE LOADING
    const [estadoDaTela, setEstadoDeTela] = React.useState(EstadosDaTela.LOADING);
    // Iniciar nosso contador do index das questões
    const [questaoAtual, setQuestaoAtual] = React.useState(0);
    // Armazenar os resultados do quiz
    const [resultado, setResultado] = React.useState([]);
    // Declaração das variáveis para as alternativas das questões
    const total = data.questions.length;
    const index = questaoAtual;
    const questions = data.questions[index];

    function addResultado(answer) {
        setResultado([
            ...resultado,
            answer
        ]);
    }

    // QUANDO INICIA A PÁGINA COM O ESTADO DE LOADING, LEVAMOS 1000ms PARA MUDAR O ESTADO DA TELA PARA QUIZ
    useEffect(() => {
        setTimeout(() => {
            setEstadoDeTela(EstadosDaTela.QUIZ);
        }, 1000);
    }, []);

    // Essa função faz com que possamos percorrer o array de questões, exibindo cada uma delas na tela!
    function handleSubmit() {
        const proximaQuestao = index + 1;
        if (proximaQuestao < total) {
            setQuestaoAtual(proximaQuestao);
        } else {
            setEstadoDeTela(EstadosDaTela.RESULTADO);
        }
    }

    return (
        <BackgroundQuiz backgroundImage={data.bg}>
            <QuizContainer
                as={motion.section}
                transition={{ delay: 0.5, duration: 0.5 }}
                variants={{
                    show: { opacity: 1 },
                    hidden: { opacity: 0 },
                }}
                initial="hidden"
                animate="show"
            >
                <QuizLogo />
                {/* Verificando o Estado da Tela para definir quando deve ser carregada a tela de Loadind, e quando deve ser carregada a tela do Quiz */}
                {/* SE a operação lógica for verdadeira, ENTÃO execute a ação logo após o && */}

                {/* Página de Carregamento */}
                {estadoDaTela === EstadosDaTela.LOADING && <LoadContainer />}
                {/* Página com as questões */}
                {estadoDaTela === EstadosDaTela.QUIZ &&
                    <Questions
                        index={index}
                        total={total}
                        questions={questions}
                        onSubmit={handleSubmit}
                        addResultado={addResultado}
                    />}
                {/* Página com o resultado */}
                {estadoDaTela === EstadosDaTela.RESULTADO && <ResultQuiz resultado={resultado} />}
                <Footer />
            </QuizContainer>
            <GitHubCorner projectUrl="https://github.com/lizvidotti91" />
        </BackgroundQuiz>
    );
}

export default PageQuiz;