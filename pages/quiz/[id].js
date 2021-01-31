export default function QuizExterno(props) {
    return (
        <div>
            <pre style={{ color: 'black', }}>
                {JSON.stringify(props, null, 4)}
            </pre>
        </div>
    );
}

export async function getServerSideProps(context) {
    const [projeto, nome] = context.query.id.split('___');
    const dbExterno = await fetch(`https://${projeto}.${nome}.vercel.app/api/db`)
        .then((respostaDoServer) => {
            if (respostaDoServer.ok) {
                return respostaDoServer.json();
            }
            throw new Error('Falha em carregar os dados');
        })
        .then((respostaConvertidaEmObjeto) => {
            return (respostaConvertidaEmObjeto);
        })
        .catch((err) => {
            console.error(err);
        })
    return {
        props: {
            dbExterno,
        },
    }
}