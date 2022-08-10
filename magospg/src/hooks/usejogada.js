import { useRouter } from "next/router"
import { useRecoilState } from "recoil"
import { magoSelecionado, monstro, resultadoDoDado } from "../atom"
import { dano } from "../func/dano"
import { useVerificarSeAvidaAcabou} from "./useVerificarSeAvidaAcabou"


export const useJogada = () => {
    const rota = useRouter()

    const[resultadoDodadoAtom,setResultadoDodado] = useRecoilState(resultadoDoDado)

    const[vidaMago,setVidaMago] = useRecoilState(magoSelecionado)

    const[vidaMonstro,setVidaMonstro] = useRecoilState(monstro)

    


    return () => { 

    ///////
    dano(resultadoDodadoAtom, setResultadoDodado, vidaMonstro, "monstro", setVidaMonstro)
    dano(resultadoDodadoAtom, setResultadoDodado, vidaMago, "mago", setVidaMago)
    /////

    useVerificarSeAvidaAcabou(vidaMago, "derrota",rota)

    useVerificarSeAvidaAcabou(vidaMonstro, "vitoria",rota)

    }    

}