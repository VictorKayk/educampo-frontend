export interface CarteiraProfissional {
  id: number;
  numero: number;
  serie: string;
}

export interface Dependentes {
  filhosHomens: number;
  filhosMenores: number;
  filhosMulheres: number;
  id: number;
  outrosDependentes: number;
}

export interface Endereco {
  bairro: string;
  complemento: string;
  cpf: string;
  id: number;
  numero: number;
  rua: string;
}

export interface Filiacao {
  id: number;
  nomeMae: string;
  nomePai: string;
}

export interface FotoAssociado {
  contentType: string;
  id: number;
  nomeArquivo: string;
  tamanho: number;
}

export interface Naturalidade {
  estado: string;
  id: number;
  municipio: string;
}

export interface Associado {
  carteiraProfissional: CarteiraProfissional;
  carteiraSindical: number;
  cpf: string;
  dataAssociacao: string;
  dependentes: Dependentes;
  edataNascimento: string;
  eleitor: boolean;
  endereco: Endereco;
  estadoCivil: string;
  filiacao: Filiacao;
  fotoAssociado: FotoAssociado;
  id: number;
  localTrabalho: string;
  nacionalidade: string;
  naturalidade: Naturalidade;
  nome: string;
  profissao: string;
  rg: string;
  sabeLer: boolean;
}
