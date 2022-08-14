import { useRecoilState } from "recoil"
import { magoSelecionado, monstro } from "../atom"
import { useJogada } from "../hooks/usejogada"
import { useSotearUmNumeroDe0a6 } from "../hooks/useSorteaNumero0a6"

export default function LutaTela() {

    const [mago, setMago] = useRecoilState(magoSelecionado)
    const [monstroAtom, setMonstro] = useRecoilState(monstro)
    
    const jogada = useJogada()
    const sortearNumero = useSotearUmNumeroDe0a6()

    return (
        <>
            <h1> começe a luta </h1>

            <div className="personagem">

                <h2 className="personagemTitulo"> seu mago </h2>

                <img  className="personagemImg" src={mago.foto} />
                <h3 className="personagemNome"> {mago.nome}</h3>
                <h4 className="personagemTipo">{mago.tipo}</h4>
                <h4 className="personagemVida">{mago.vida}</h4>
            </div>
            <button onClick={jogada}> Jogada </button>

            <div className="personagem">
                <h2 className="personagemTitulo" > Monstro </h2>
                <img className="personagemImg" src={monstroAtom.foto} />
                <h3 className="personagemNome" > {monstroAtom.nome}</h3>
                <h4 className="persornagemDescrisão">{monstroAtom.descricao}</h4>
                <h4 className="persornagemStatus">{monstroAtom.status}</h4>
                <h4 className="personagemVida">{monstroAtom.vida}</h4>
            </div>

            <button onClick={sortearNumero}> rodar dados</button>
        <style jsx>
            {`
            
            
            .personagem{
                box-sizing: border-box;
                background-color:#02529c;
                width:48% ;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                border: 10px solid rgb(236, 255, 65);
                border-radius:5px;
            }

            .personagemTitulo{
                font-size: 2rem;
                font-weight: 900;
                margin-bottom: 10px;

            }

            .personagemImg{
                width: 90%;
            }
            .personagemNome{
                font-size: 2rem;
                margin-bottom: 10px;
            }

            .personagemTipo{
                font-size: 1.8rem;
                color: rgba(235, 193, 193, 0.863);
                margin-bottom: 10px;
            }

            .personagemVida{
                font-size: 2.5rem;
                font-weight: 900;
                color: rgb(253, 29, 29);
            }
            .persornagemDescrisão{
                font-size: 1.6rem;
                text-align: justify;
                padding: 1rem ;
                margin: 1rem;

            }
            .persornagemStatus{
                font-size: 1.9rem;
                text-align: center;
                padding: 1rem ;
                margin: 1rem;
            }
            `}
        </style>
        </>
    )
}