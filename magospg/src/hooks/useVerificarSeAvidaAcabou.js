
export const useVerificarSeAvidaAcabou = (vida,paginaFinal,rota) => {
    
    if (vida < 0) {
        rota.push(paginaFinal)
    }

    
}
