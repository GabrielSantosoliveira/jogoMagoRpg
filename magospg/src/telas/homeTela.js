import { useRecoilState } from "recoil"
import { mago } from "../atom"
import { useSelecionarMago } from "../hooks/useSelecionarMago"


export default function HomeTela() {
    const [magos, setmago] = useRecoilState(mago)
    const setMago = useSelecionarMago()


    return (
        <>

            <h1 className="titulo"> Bem-vindo ao magos Pg </h1>

            <div className="escolhaSeuMago">

                <ul className="listaMagos">

                    {magos.map((elemento, i) => {
                        return (
                            <>
                                <li className="magos" key={elemento.id}>

                                    <div className="personagem" onClick={e => { setMago(elemento) }} >
                                        <h3 className="nomeDoPesonagem">{elemento.nome}</h3>
                                        <h4 className="tipoPersonagem">Tipo: {elemento.tipo}</h4>
                                        <img className="fotoPersonagem" src={elemento.foto} alt="magos Imagem" />
                                    </div>

                                </li>

                            </>

                        )
                    })}

                </ul>

            </div>
 <style jsx>
                {`
                .titulo{
                    text-aliguscar fontes n: center;
                    font-size:3rem;
                    font-weight: 900;
                }
                .escolhaSeuMago{
                    box-si
                    text-aliguscar fontes n: center;
                    font-size:3rem;
                    font-weight: 900;
                }
                .escolhaSeuMago{
                    box-sizing: border-box;
                    padding:1;
                    margin:0;uscar fontes 
                    width:100vw ;
                    
                }
                .listaMagos{
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap
                    justify-content: space-around
                    width:99%;
                    margin: 0 auto;
                }
                .magos{
                    width:90%;
                }
                .personagem{
                    background-color: #0284fd ;
                    padding:10px ;
                    margin:10px;
                    height: 540px ;
                    display: flex;
                    flex-direction: column;
                    justify-content:space-around ;
                    border:10px solid rgb(220, 245, 1);
                    border-radius: 10px; 
                    opacity:0.9;
                    transition: all 500ms ;
                    box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.39);
                }
                .personagem:hover{
                    

                    background-color: #1a90fd ;
                    opacity:1;
                    transform: scale(1.07) ;
                    box-shadow: 12px 13px 11px 2px rgba(0, 0, 0, 0.568);


                }
                .nomeDoPesonagem{
                    font-size: 2.5rem ;
                    text-align: center;
                    font-weight:900 ;
                }
                .tipoPersonagem{
                    font-size:1.5rem;
                    font-weight:900;
                }
                .fotoPersonagem{
                    width:99%;
                    height:300px;
                    margin:5px;

                }
                `}
            </style>
        </>
    )
}