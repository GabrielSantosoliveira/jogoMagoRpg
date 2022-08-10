import { useRecoilState } from "recoil"
import { magoSelecionado } from "../atom"
import { useRouter } from "next/router"

export const useSelecionarMago = () => {
    const [magoSelecionadoAtom, setMagoSelecionado] = useRecoilState(magoSelecionado)

    const rota = useRouter()




    return (mago) => {
        setMagoSelecionado(mago)
        alert(`<< O mago que você selecionou foi o ${mago.nome}. >>`)
        rota.push("luta")
    }
}