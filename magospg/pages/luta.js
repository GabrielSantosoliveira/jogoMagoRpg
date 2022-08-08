import { useRecoilState } from "recoil"
import {useState} from "react"
import{magoSelecionado} from"../src/atom"
import { resultadoDoDado } from "../src/atom"
export default function Luta (){
    const[mago,setMago]=useRecoilState(magoSelecionado)
    const[resultadoDOdado,setResultadoDOdado]=useRecoilState(resultadoDoDado)
    const[vidaMago,setvidaMago] = useState(mago.vida)
    const mostroObj = { 
        nome:"Daniel",
        status:"fome de nutella",
        descricao: "o daniel pode fazer tudo ate mesmo matar quando está como fome de nutella",
        vida:600, 
        foto:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.mEaNg1BQAasDsxg7iMH3sAAAAA%26pid%3DApi&f=1"
    }
    const[mostro,setMostro] = useState(mostroObj)

    const danoDoMostro = () =>{
        const dano = Number(resultadoDOdado)/4+100
        vidaMago = vidaMago- dano
       setvidaMago(vidaMago)
       alert(`o mostro deu ${dano} em voce`)
        

        setResultadoDOdado(0)
      }

    
      
      
      const danoDoMago  = () =>{
          const dano = Number(resultadoDOdado)*4/2*2
          mostro.vida = mostro.vida - dano
          setMostro(mostro)
          alert(`voce deu ${dano} no mostro `)
          
          
          setResultadoDOdado(0)
        }
        const jogada = () =>{
            danoDoMago()
            danoDoMostro()
        }

    const SotearUmNumeroDe0a6 = () => { 
        let resultado = Math.random() * (6 - 0) + 0;
        resultado = resultado.toFixed()
        return Number(resultado)
    }
    
    const guardarResultadoDoDado = (resultado) => {
        setResultadoDOdado(resultado)
    }

    const MostrarResultadoDoDado = () => { 
        const resultadoDoDado = SotearUmNumeroDe0a6()
        alert(` caiu ${resultadoDoDado} `)

        guardarResultadoDoDado(resultadoDoDado)
    }
    return ( 
        <>
        <h1> começe a luta </h1> 
            
            <div> 

            <h2> seu mago </h2>

                <h3> {mago.nome}</h3>
                <h4>{mostro.tipo}</h4>
                <h4>{vidaMago}</h4>
                <img src={mago.foto}/>
            </div>
                <button onClick={jogada}> Jogada </button>

            <div> 
                <h4>{mostro.descricao}</h4>
                <h2> Monstro </h2>
                <h4>{mostro.status}</h4>
                <h3> {mostro.nome}</h3>
                <h4>{mostro.vida}</h4>
                <img src={mostro.foto}/>
            </div>

            <button onClick={MostrarResultadoDoDado}> rodar dados</button>

        </>
    )
 }