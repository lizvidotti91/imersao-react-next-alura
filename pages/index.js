import { useRouter } from 'next/router';

import BackgroundQuiz from '../src/components/BackgroundQuiz/styles';
import QuizContainer from '../src/components/QuizContainer/styles';
import QuizLogo from '../src/components/QuizLogo/styles';
import Container from '../src/components/Container/styles';
import Input from '../src/components/Input/styles';
import Button from '../src/components/Button/styles';
import Footer from '../src/components/Footer/styles';
import GitHubCorner from '../src/components/GitHubCorner/styles';
import data from '../data.json';

export default function Home() {
  const rota = useRouter(); // inicializando a minha rota
  const [nome, setNome] = React.useState('') // a constante nome tem estado inicial '' (string vazia), que vai ser alterado conforme formos digitando o nome em nosso input :)
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
            <form
              onSubmit={(evento) => { // Arrow function
                evento.preventDefault(); // essa função evita que o console do browser recarregue
                rota.push(`/quiz?name=${nome}`); // ao clicar no botão JOGAR, a nossa rota será ex.: url/quiz?name=Liz
                // Router manda para a próxima página
                // As rotas vão se "empilhando" no histórico do navegador
              }
              }
            >
              <Input
                name="Nome do Jogador"
                value={nome}
                type="text"
                placeholder={data.txtInput}
                onChange={(evento) => { // Arrow function
                  // State/Estado
                  setNome(evento.target.value);
                  console.log(nome);
                }
                }
              />
              <Button
                type="submit"
                disabled={nome.length === 0}
              >
                {`É hora de jogar ${nome}`}
              </Button>
            </form>
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
