import { useRecoilState } from "recoil";
import { resultadoDoDado } from "../atom";

export const useSotearUmNumeroDe0a6 = () => {
    const [dadoResultado, setDadoResultado] = useRecoilState(resultadoDoDado)

    return () => { 

        let resultado = Math.random() * (6 - 0) + 0;
        resultado = resultado.toFixed()
        setDadoResultado(Number(resultado))

        alert(` caiu ${resultado} `)

    }
    
}