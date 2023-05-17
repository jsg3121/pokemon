export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type FormStats = {
  __typename?: 'FormStats';
  attack: Scalars['Int'];
  defense: Scalars['Int'];
  hp: Scalars['Int'];
  id: Scalars['Int'];
  specialAttack: Scalars['Int'];
  specialDefense: Scalars['Int'];
  speed: Scalars['Int'];
  statCode: Scalars['String'];
  total: Scalars['Int'];
};

export type MegaStats = {
  __typename?: 'MegaStats';
  attack: Scalars['Int'];
  defense: Scalars['Int'];
  hp: Scalars['Int'];
  id: Scalars['Int'];
  specialAttack: Scalars['Int'];
  specialDefense: Scalars['Int'];
  speed: Scalars['Int'];
  statCode: Scalars['String'];
  total: Scalars['Int'];
};

export type NormalStats = {
  __typename?: 'NormalStats';
  attack: Scalars['Int'];
  defense: Scalars['Int'];
  hp: Scalars['Int'];
  id: Scalars['Int'];
  pokemonId: Scalars['Int'];
  specialAttack: Scalars['Int'];
  specialDefense: Scalars['Int'];
  speed: Scalars['Int'];
  total: Scalars['Int'];
};

export type Pokemon = {
  __typename?: 'Pokemon';
  _count?: Maybe<PokemonCount>;
  evolutionId: Array<Scalars['Int']>;
  generation: Scalars['Int'];
  id: Scalars['Int'];
  isEvolution: Scalars['Boolean'];
  isForm: Scalars['Boolean'];
  isMega?: Maybe<Scalars['Boolean']>;
  isRegion?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  number: Scalars['Int'];
  /** pokemonList fieldResover */
  stats: NormalStats;
  type: Array<Scalars['String']>;
  typeSingle1: Scalars['String'];
  typeSingle2?: Maybe<Scalars['String']>;
};

export type PokemonCount = {
  __typename?: 'PokemonCount';
  PokemonMega: Scalars['Int'];
  PokemonNormalForm: Scalars['Int'];
  PokemonRegion: Scalars['Int'];
};

export type PokemonMega = {
  __typename?: 'PokemonMega';
  _count?: Maybe<PokemonMegaCount>;
  id: Scalars['Int'];
  /** 메가진화 상태 종족값 */
  megaStats?: Maybe<MegaStats>;
  pokemonId: Scalars['Int'];
  pokemonNumber: Scalars['Int'];
  statCode: Scalars['String'];
  type: Array<Scalars['String']>;
  typeSingle1: Scalars['String'];
  typeSingle2?: Maybe<Scalars['String']>;
};

export type PokemonMegaCount = {
  __typename?: 'PokemonMegaCount';
  MegaStats: Scalars['Int'];
};

export type PokemonNormalForm = {
  __typename?: 'PokemonNormalForm';
  _count?: Maybe<PokemonNormalFormCount>;
  /** 노말폼 변경시 종족값 */
  formStats?: Maybe<FormStats>;
  id: Scalars['Int'];
  imagePath: Scalars['String'];
  name: Scalars['String'];
  pokemonId: Scalars['Int'];
  statCode: Scalars['String'];
  type: Array<Scalars['String']>;
  typeSingle1: Scalars['String'];
  typeSingle2?: Maybe<Scalars['String']>;
};

export type PokemonNormalFormCount = {
  __typename?: 'PokemonNormalFormCount';
  FormStats: Scalars['Int'];
};

export type PokemonRegion = {
  __typename?: 'PokemonRegion';
  _count?: Maybe<PokemonRegionCount>;
  id: Scalars['Int'];
  pokemonId: Scalars['Int'];
  pokemonNumber: Scalars['Int'];
  region: Scalars['String'];
  /** 리전폼 포켓몬 종족값 */
  regionStats?: Maybe<RegionStats>;
  statCode: Scalars['String'];
  type: Array<Scalars['String']>;
  typeSingle1: Scalars['String'];
  typeSingle2?: Maybe<Scalars['String']>;
};

export type PokemonRegionCount = {
  __typename?: 'PokemonRegionCount';
  RegionStats: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  getList: Array<Pokemon>;
  getMegaEvolution: Array<PokemonMega>;
  getNormalForm: Array<PokemonNormalForm>;
  getNormalStats: Array<NormalStats>;
  getPokemonFilter?: Maybe<Array<Pokemon>>;
  getPokemonStats: FormStats;
  getRegionForm: Array<PokemonRegion>;
  getSingleNormalStats: NormalStats;
  getSinglePokemon: Pokemon;
};


export type QueryGetMegaEvolutionArgs = {
  number: Scalars['Float'];
};


export type QueryGetNormalFormArgs = {
  number: Scalars['Float'];
};


export type QueryGetPokemonFilterArgs = {
  generation?: InputMaybe<Array<Scalars['String']>>;
  isEvolution?: InputMaybe<Scalars['Boolean']>;
  isMega?: InputMaybe<Scalars['Boolean']>;
  isRegion?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Array<Scalars['String']>>;
};


export type QueryGetPokemonStatsArgs = {
  statCode: Scalars['String'];
  type: Scalars['String'];
};


export type QueryGetRegionFormArgs = {
  number: Scalars['Float'];
};


export type QueryGetSingleNormalStatsArgs = {
  id: Scalars['Float'];
};


export type QueryGetSinglePokemonArgs = {
  number: Scalars['Float'];
};

export type RegionStats = {
  __typename?: 'RegionStats';
  attack: Scalars['Int'];
  defense: Scalars['Int'];
  hp: Scalars['Int'];
  id: Scalars['Int'];
  specialAttack: Scalars['Int'];
  specialDefense: Scalars['Int'];
  speed: Scalars['Int'];
  statCode: Scalars['String'];
  total: Scalars['Int'];
};
