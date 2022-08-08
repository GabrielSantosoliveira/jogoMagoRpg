import {atom} from "recoil"
export const magoSelecionado = atom({
    key: 'magoSelecionado', // unique ID (with respect to other atoms/selectors)
    default: {}, // default value (aka initial value)
  });
  export const resultadoDoDado = atom({
    key: 'resultadoDoDado', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
  });

