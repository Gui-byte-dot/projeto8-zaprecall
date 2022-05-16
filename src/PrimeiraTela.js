export default function PrimeiraTela({setTela}){
    return (
        <div className="primeiratela">
            <img src="raio.png" alt="raio" width="136px" height="161px"/>
            <h2>Zap Recall</h2>
            <button onClick={() => setTela('tela')}>Iniciar Recall</button>
        </div>

    )
}

