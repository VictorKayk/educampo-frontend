export interface ICarteiraProfissional {
  id?: number;
  numero: number;
  serie: string;
}

export interface IDependentes {
  id?: number;
  filhosHomens: number;
  filhosMenores: number;
  filhosMulheres: number;
  outrosDependentes: number;
}

export interface IEndereco {
  id?: number;
  bairro: string;
  complemento: string;
  cep: string;
  numero: number;
  rua: string;
}

export interface IFiliacao {
  id?: number;
  nomeMae: string;
  nomePai: string;
}

export interface IFotoAssociado {
  id?: number;
  contentType: string;
  nomeArquivo: string;
  tamanho: number;
}

export interface INaturalidade {
  id?: number;
  estado: string;
  municipio: string;
}

export interface IAssociado {
  id?: number;
  carteiraProfissional: ICarteiraProfissional;
  carteiraSindical: number;
  cpf: string;
  celular: string;
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
