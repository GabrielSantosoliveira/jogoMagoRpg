import { useRecoilState } from "recoil"
import { mago } from "../atom"
import { useSelecionarMago } from "../hooks/useSelecionarMago"


export default function HomeTela() {
    const[magos,setmago] = useRecoilState(mago)
    const setMago = useSelecionarMago()


    return (
        <>

            <h1> Bem-vindo al magos Pg </h1>

            <div className="escolhaSeuMago">

                <ul>

                    {magos.map((elemento, i) => {
                        return (
                            <>
                                <li key={elemento.id}>

                                    <div className="personagem" onClick={e => { setMago(elemento) }} >
                                        <h3>{elemento.nome}</h3>
                                        <h4>{elemento.tipo}</h4>
                                        <img src={elemento.foto} alt="magos Imagem" />
                                    </div>

                                </li>

                            </>

                        )
                    })}

                </ul>

            </div>
            </>
            )
}