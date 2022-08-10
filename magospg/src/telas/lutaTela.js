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

            <div>

                <h2> seu mago </h2>

                <img src={mago.foto} />
                <h3> {mago.nome}</h3>
                <h4>{mago.tipo}</h4>
                <h4>{mago.vida}</h4>
            </div>
            <button onClick={jogada}> Jogada </button>

            <div>
                <img src={monstroAtom.foto} />
                <h2> Monstro </h2>
                <h4>{monstroAtom.descricao}</h4>
                <h4>{monstroAtom.status}</h4>
                <h3> {monstroAtom.nome}</h3>
                <h4>{monstroAtom.vida}</h4>
            </div>

            <button onClick={sortearNumero}> rodar dados</button>

        </>
    )
}