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

export type Pokemon = {
  __typename?: 'Pokemon';
  _count?: Maybe<PokemonCount>;
  evolutionId: Array<Scalars['Int']>;
  generation: Scalars['Int'];
  id: Scalars['Int'];
  isEvolution: Scalars['Boolean'];
  isMega?: Maybe<Scalars['Boolean']>;
  isRegion?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  number: Scalars['Int'];
  type: Array<Scalars['String']>;
  typeSingle1: Scalars['String'];
  typeSingle2?: Maybe<Scalars['String']>;
};

export type PokemonCount = {
  __typename?: 'PokemonCount';
  PokemonMega: Scalars['Int'];
  PokemonRegion: Scalars['Int'];
};

export type PokemonMega = {
  __typename?: 'PokemonMega';
  id: Scalars['Int'];
  pokemonId: Scalars['Int'];
  pokemonNumber: Scalars['Int'];
  type: Array<Scalars['String']>;
  typeSingle1: Scalars['String'];
  typeSingle2?: Maybe<Scalars['String']>;
};

export type PokemonRegion = {
  __typename?: 'PokemonRegion';
  id: Scalars['Int'];
  pokemonId: Scalars['Int'];
  pokemonNumber: Scalars['Int'];
  region: Scalars['String'];
  type: Array<Scalars['String']>;
  typeSingle1: Scalars['String'];
  typeSingle2?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  getList: Array<Pokemon>;
  getMegaEvolution: PokemonMega;
  getPokemonFilter?: Maybe<Array<Pokemon>>;
  getRegionForm: PokemonRegion;
  getSinglePokemon: Pokemon;
};


export type QueryGetMegaEvolutionArgs = {
  number: Scalars['Float'];
};


export type QueryGetPokemonFilterArgs = {
  generation?: InputMaybe<Scalars['Float']>;
  isEvolution?: InputMaybe<Scalars['Boolean']>;
  isMega?: InputMaybe<Scalars['Boolean']>;
  isRegion?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Array<Scalars['String']>>;
};


export type QueryGetRegionFormArgs = {
  number: Scalars['Float'];
};


export type QueryGetSinglePokemonArgs = {
  number: Scalars['Float'];
};
