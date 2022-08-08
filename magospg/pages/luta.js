import { useRecoilState } from "recoil"
import{magoSelecionado} from"../src/atom"

export default function Luta (){
    const[mago,setMago]=useRecoilState(magoSelecionado)
    return ( 
        <>
        <h1> começe a luta </h1> 
            <h2> seu mago </h2>
            <div> 

                <h3> {mago.nome}</h3>
                <h4>{mago.tipo}</h4>
                <img src={mago.foto}/>
            </div>

            <button onClick={() => {
                alert("o dado sai 5 ,dano critico")
            }}> rodar dados</button>

        </>
    )
 }