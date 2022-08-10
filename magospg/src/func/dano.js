export const dano = (resultadoDodado,setResultadoDodado,personagem,papel,setPersonagem,) => {

    const personagemAtual = Object.assign({...personagem})
    

    if (papel == "monstro") {
        const dano = Number(resultadoDodado) *8  
        const vida = personagemAtual.vida - dano
       
        personagemAtual.vida = vida
        
        setPersonagem(personagemAtual)
      
        alert(`o você deu ${dano} no mostro`)


        setResultadoDodado(0)
    }
    else {
        const dano = Number(resultadoDodado) / 8 + 25
        const vida = personagemAtual.vida - dano
       console.log(personagemAtual)
        personagemAtual.vida = vida
       
        setPersonagem(personagemAtual)
        alert(`o monstro deu ${dano} `)


        setResultadoDodado(0)
    }


}

