export interface ICarteiraProfissional {
  numero: number;
  serie: string;
}

export interface IDependentes {
  filhosHomens: number;
  filhosMenores: number;
  filhosMulheres: number;
  outrosDependentes: number;
}

export interface IEndereco {
  bairro: string;
  complemento: string;
  cpf: string;
  numero: number;
  rua: string;
}

export interface IFiliacao {
  nomeMae: string;
  nomePai: string;
}

export interface IFotoAssociado {
  contentType: string;
  nomeArquivo: string;
  tamanho: number;
}

export interface INaturalidade {
  estado: string;
  municipio: string;
}

export interface IAssociado {
  carteiraProfissional: ICarteiraProfissional;
  carteiraSindical: number;
  cpf: string;
  dataAssociacao: string;
  dependentes: IDependentes;
  dataNascimento: string;
  eleitor: boolean;
  endereco: IEndereco;
  estadoCivil: string;
  filiacao: IFiliacao;
  fotoAssociado?: IFotoAssociado;
  localTrabalho: string;
  nacionalidade: string;
  naturalidade: INaturalidade;
  nome: string;
  profissao: string;
  rg: string;
  sabeLer: boolean;
}
