import { atom } from "recoil"
import {PersonagemsMago, PersonagemsMonstro } from "./dados/personagem";


export const magoSelecionado = atom({
  key: 'magoSelecionado',
  default: {},
});


export const resultadoDoDado = atom({
  key: 'resultadoDoDado',
  default: '',
});


export const mago = atom({
  key: 'magos',
  default: PersonagemsMago,
});


export const monstro = atom({
  key: 'monstro',
  default: PersonagemsMonstro,
});





