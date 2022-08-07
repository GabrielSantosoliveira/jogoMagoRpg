import {useState} from "react"
export default function Home() {

  const[magoSelecionado,setMagoSlecionado] = useState({})

  const MagosPersonagems = [{
    nome: "alberto",
    tipo: "fogo",
    foto: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.AdbdB1XcTyEtrUbEAwoi5wHaG7%26pid%3DApi&f=1",
    id:"1"
  }, {
    nome: "francisco",
    tipo: "água",
    foto: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.4gN0nbT2JIMtvxm-xlQtuwHaFu%26pid%3DApi&f=1 ",
    id:"2"
  }, {
    nome: "pedro",
    tipo: "terra",
    foto: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.5SqDOncJPPWctyIlIjcLzwHaEK%26pid%3DApi&f=1",
    id:"3"
  }]


  const selecionarMago = (mago) =>{

    setMagoSlecionado(mago)
    

    alert(`o mago que vc selecionou foi, ${mago.nome}`)

  }


  return (
    <>

      <h1> Bem-vindo al magos Pg </h1>

      <div className="escolhaSeuMago">

        <ul>

        {MagosPersonagems.map((elemento,i)=>{
          return (
            <>
            <li key={elemento.id}>

            <div className="personagem" onClick={ e => {selecionarMago(elemento)}} >
                  <h3>{elemento.nome}</h3>
                  <h4>{elemento.tipo}</h4>
                  <img src={elemento.foto} alt="magos Imagem"/>
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
