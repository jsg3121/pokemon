import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  Pokemon: crudResolvers.PokemonCrudResolver,
  PokemonRegion: crudResolvers.PokemonRegionCrudResolver,
  PokemonMega: crudResolvers.PokemonMegaCrudResolver,
  TypeRelation: crudResolvers.TypeRelationCrudResolver
};
const actionResolversMap = {
  Pokemon: {
    aggregatePokemon: actionResolvers.AggregatePokemonResolver,
    createManyPokemon: actionResolvers.CreateManyPokemonResolver,
    createOnePokemon: actionResolvers.CreateOnePokemonResolver,
    deleteManyPokemon: actionResolvers.DeleteManyPokemonResolver,
    deleteOnePokemon: actionResolvers.DeleteOnePokemonResolver,
    findFirstPokemon: actionResolvers.FindFirstPokemonResolver,
    findFirstPokemonOrThrow: actionResolvers.FindFirstPokemonOrThrowResolver,
    findManyPokemon: actionResolvers.FindManyPokemonResolver,
    findUniquePokemon: actionResolvers.FindUniquePokemonResolver,
    findUniquePokemonOrThrow: actionResolvers.FindUniquePokemonOrThrowResolver,
    groupByPokemon: actionResolvers.GroupByPokemonResolver,
    updateManyPokemon: actionResolvers.UpdateManyPokemonResolver,
    updateOnePokemon: actionResolvers.UpdateOnePokemonResolver,
    upsertOnePokemon: actionResolvers.UpsertOnePokemonResolver
  },
  PokemonRegion: {
    aggregatePokemonRegion: actionResolvers.AggregatePokemonRegionResolver,
    createManyPokemonRegion: actionResolvers.CreateManyPokemonRegionResolver,
    createOnePokemonRegion: actionResolvers.CreateOnePokemonRegionResolver,
    deleteManyPokemonRegion: actionResolvers.DeleteManyPokemonRegionResolver,
    deleteOnePokemonRegion: actionResolvers.DeleteOnePokemonRegionResolver,
    findFirstPokemonRegion: actionResolvers.FindFirstPokemonRegionResolver,
    findFirstPokemonRegionOrThrow: actionResolvers.FindFirstPokemonRegionOrThrowResolver,
    pokemonRegions: actionResolvers.FindManyPokemonRegionResolver,
    pokemonRegion: actionResolvers.FindUniquePokemonRegionResolver,
    getPokemonRegion: actionResolvers.FindUniquePokemonRegionOrThrowResolver,
    groupByPokemonRegion: actionResolvers.GroupByPokemonRegionResolver,
    updateManyPokemonRegion: actionResolvers.UpdateManyPokemonRegionResolver,
    updateOnePokemonRegion: actionResolvers.UpdateOnePokemonRegionResolver,
    upsertOnePokemonRegion: actionResolvers.UpsertOnePokemonRegionResolver
  },
  PokemonMega: {
    aggregatePokemonMega: actionResolvers.AggregatePokemonMegaResolver,
    createManyPokemonMega: actionResolvers.CreateManyPokemonMegaResolver,
    createOnePokemonMega: actionResolvers.CreateOnePokemonMegaResolver,
    deleteManyPokemonMega: actionResolvers.DeleteManyPokemonMegaResolver,
    deleteOnePokemonMega: actionResolvers.DeleteOnePokemonMegaResolver,
    findFirstPokemonMega: actionResolvers.FindFirstPokemonMegaResolver,
    findFirstPokemonMegaOrThrow: actionResolvers.FindFirstPokemonMegaOrThrowResolver,
    pokemonMegas: actionResolvers.FindManyPokemonMegaResolver,
    pokemonMega: actionResolvers.FindUniquePokemonMegaResolver,
    getPokemonMega: actionResolvers.FindUniquePokemonMegaOrThrowResolver,
    groupByPokemonMega: actionResolvers.GroupByPokemonMegaResolver,
    updateManyPokemonMega: actionResolvers.UpdateManyPokemonMegaResolver,
    updateOnePokemonMega: actionResolvers.UpdateOnePokemonMegaResolver,
    upsertOnePokemonMega: actionResolvers.UpsertOnePokemonMegaResolver
  },
  TypeRelation: {
    aggregateTypeRelation: actionResolvers.AggregateTypeRelationResolver,
    createManyTypeRelation: actionResolvers.CreateManyTypeRelationResolver,
    createOneTypeRelation: actionResolvers.CreateOneTypeRelationResolver,
    deleteManyTypeRelation: actionResolvers.DeleteManyTypeRelationResolver,
    deleteOneTypeRelation: actionResolvers.DeleteOneTypeRelationResolver,
    findFirstTypeRelation: actionResolvers.FindFirstTypeRelationResolver,
    findFirstTypeRelationOrThrow: actionResolvers.FindFirstTypeRelationOrThrowResolver,
    typeRelations: actionResolvers.FindManyTypeRelationResolver,
    typeRelation: actionResolvers.FindUniqueTypeRelationResolver,
    getTypeRelation: actionResolvers.FindUniqueTypeRelationOrThrowResolver,
    groupByTypeRelation: actionResolvers.GroupByTypeRelationResolver,
    updateManyTypeRelation: actionResolvers.UpdateManyTypeRelationResolver,
    updateOneTypeRelation: actionResolvers.UpdateOneTypeRelationResolver,
    upsertOneTypeRelation: actionResolvers.UpsertOneTypeRelationResolver
  }
};
const crudResolversInfo = {
  Pokemon: ["aggregatePokemon", "createManyPokemon", "createOnePokemon", "deleteManyPokemon", "deleteOnePokemon", "findFirstPokemon", "findFirstPokemonOrThrow", "findManyPokemon", "findUniquePokemon", "findUniquePokemonOrThrow", "groupByPokemon", "updateManyPokemon", "updateOnePokemon", "upsertOnePokemon"],
  PokemonRegion: ["aggregatePokemonRegion", "createManyPokemonRegion", "createOnePokemonRegion", "deleteManyPokemonRegion", "deleteOnePokemonRegion", "findFirstPokemonRegion", "findFirstPokemonRegionOrThrow", "pokemonRegions", "pokemonRegion", "getPokemonRegion", "groupByPokemonRegion", "updateManyPokemonRegion", "updateOnePokemonRegion", "upsertOnePokemonRegion"],
  PokemonMega: ["aggregatePokemonMega", "createManyPokemonMega", "createOnePokemonMega", "deleteManyPokemonMega", "deleteOnePokemonMega", "findFirstPokemonMega", "findFirstPokemonMegaOrThrow", "pokemonMegas", "pokemonMega", "getPokemonMega", "groupByPokemonMega", "updateManyPokemonMega", "updateOnePokemonMega", "upsertOnePokemonMega"],
  TypeRelation: ["aggregateTypeRelation", "createManyTypeRelation", "createOneTypeRelation", "deleteManyTypeRelation", "deleteOneTypeRelation", "findFirstTypeRelation", "findFirstTypeRelationOrThrow", "typeRelations", "typeRelation", "getTypeRelation", "groupByTypeRelation", "updateManyTypeRelation", "updateOneTypeRelation", "upsertOneTypeRelation"]
};
const argsInfo = {
  AggregatePokemonArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyPokemonArgs: ["data", "skipDuplicates"],
  CreateOnePokemonArgs: ["data"],
  DeleteManyPokemonArgs: ["where"],
  DeleteOnePokemonArgs: ["where"],
  FindFirstPokemonArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstPokemonOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPokemonArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniquePokemonArgs: ["where"],
  FindUniquePokemonOrThrowArgs: ["where"],
  GroupByPokemonArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyPokemonArgs: ["data", "where"],
  UpdateOnePokemonArgs: ["data", "where"],
  UpsertOnePokemonArgs: ["where", "create", "update"],
  AggregatePokemonRegionArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyPokemonRegionArgs: ["data", "skipDuplicates"],
  CreateOnePokemonRegionArgs: ["data"],
  DeleteManyPokemonRegionArgs: ["where"],
  DeleteOnePokemonRegionArgs: ["where"],
  FindFirstPokemonRegionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstPokemonRegionOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPokemonRegionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniquePokemonRegionArgs: ["where"],
  FindUniquePokemonRegionOrThrowArgs: ["where"],
  GroupByPokemonRegionArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyPokemonRegionArgs: ["data", "where"],
  UpdateOnePokemonRegionArgs: ["data", "where"],
  UpsertOnePokemonRegionArgs: ["where", "create", "update"],
  AggregatePokemonMegaArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyPokemonMegaArgs: ["data", "skipDuplicates"],
  CreateOnePokemonMegaArgs: ["data"],
  DeleteManyPokemonMegaArgs: ["where"],
  DeleteOnePokemonMegaArgs: ["where"],
  FindFirstPokemonMegaArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstPokemonMegaOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPokemonMegaArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniquePokemonMegaArgs: ["where"],
  FindUniquePokemonMegaOrThrowArgs: ["where"],
  GroupByPokemonMegaArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyPokemonMegaArgs: ["data", "where"],
  UpdateOnePokemonMegaArgs: ["data", "where"],
  UpsertOnePokemonMegaArgs: ["where", "create", "update"],
  AggregateTypeRelationArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyTypeRelationArgs: ["data", "skipDuplicates"],
  CreateOneTypeRelationArgs: ["data"],
  DeleteManyTypeRelationArgs: ["where"],
  DeleteOneTypeRelationArgs: ["where"],
  FindFirstTypeRelationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstTypeRelationOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyTypeRelationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueTypeRelationArgs: ["where"],
  FindUniqueTypeRelationOrThrowArgs: ["where"],
  GroupByTypeRelationArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyTypeRelationArgs: ["data", "where"],
  UpdateOneTypeRelationArgs: ["data", "where"],
  UpsertOneTypeRelationArgs: ["where", "create", "update"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
> = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
> = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
        tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
> = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  Pokemon: relationResolvers.PokemonRelationsResolver,
  PokemonRegion: relationResolvers.PokemonRegionRelationsResolver,
  PokemonMega: relationResolvers.PokemonMegaRelationsResolver
};
const relationResolversInfo = {
  Pokemon: ["PokemonRegion", "PokemonMega"],
  PokemonRegion: ["pokemon"],
  PokemonMega: ["pokemon"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
> = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  Pokemon: ["id", "number", "name", "type", "isRegion", "isMega", "typeSingle1", "typeSingle2", "isEvolution", "evolutionId", "generation"],
  PokemonRegion: ["id", "pokemonId", "pokemonNumber", "region", "type", "typeSingle1", "typeSingle2"],
  PokemonMega: ["id", "pokemonId", "pokemonNumber", "type", "typeSingle1", "typeSingle2"],
  TypeRelation: ["id", "type", "strong", "weak", "invalidity"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregatePokemon: ["_count", "_avg", "_sum", "_min", "_max"],
  PokemonGroupBy: ["id", "number", "name", "type", "isRegion", "isMega", "typeSingle1", "typeSingle2", "isEvolution", "evolutionId", "generation", "_count", "_avg", "_sum", "_min", "_max"],
  AggregatePokemonRegion: ["_count", "_avg", "_sum", "_min", "_max"],
  PokemonRegionGroupBy: ["id", "pokemonId", "pokemonNumber", "region", "type", "typeSingle1", "typeSingle2", "_count", "_avg", "_sum", "_min", "_max"],
  AggregatePokemonMega: ["_count", "_avg", "_sum", "_min", "_max"],
  PokemonMegaGroupBy: ["id", "pokemonId", "pokemonNumber", "type", "typeSingle1", "typeSingle2", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateTypeRelation: ["_count", "_avg", "_sum", "_min", "_max"],
  TypeRelationGroupBy: ["id", "type", "strong", "weak", "invalidity", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  PokemonCount: ["PokemonRegion", "PokemonMega"],
  PokemonCountAggregate: ["id", "number", "name", "type", "isRegion", "isMega", "typeSingle1", "typeSingle2", "isEvolution", "evolutionId", "generation", "_all"],
  PokemonAvgAggregate: ["id", "number", "evolutionId", "generation"],
  PokemonSumAggregate: ["id", "number", "evolutionId", "generation"],
  PokemonMinAggregate: ["id", "number", "name", "isRegion", "isMega", "typeSingle1", "typeSingle2", "isEvolution", "generation"],
  PokemonMaxAggregate: ["id", "number", "name", "isRegion", "isMega", "typeSingle1", "typeSingle2", "isEvolution", "generation"],
  PokemonRegionCountAggregate: ["id", "pokemonId", "pokemonNumber", "region", "type", "typeSingle1", "typeSingle2", "_all"],
  PokemonRegionAvgAggregate: ["id", "pokemonId", "pokemonNumber"],
  PokemonRegionSumAggregate: ["id", "pokemonId", "pokemonNumber"],
  PokemonRegionMinAggregate: ["id", "pokemonId", "pokemonNumber", "region", "typeSingle1", "typeSingle2"],
  PokemonRegionMaxAggregate: ["id", "pokemonId", "pokemonNumber", "region", "typeSingle1", "typeSingle2"],
  PokemonMegaCountAggregate: ["id", "pokemonId", "pokemonNumber", "type", "typeSingle1", "typeSingle2", "_all"],
  PokemonMegaAvgAggregate: ["id", "pokemonId", "pokemonNumber"],
  PokemonMegaSumAggregate: ["id", "pokemonId", "pokemonNumber"],
  PokemonMegaMinAggregate: ["id", "pokemonId", "pokemonNumber", "typeSingle1", "typeSingle2"],
  PokemonMegaMaxAggregate: ["id", "pokemonId", "pokemonNumber", "typeSingle1", "typeSingle2"],
  TypeRelationCountAggregate: ["id", "type", "strong", "weak", "invalidity", "_all"],
  TypeRelationAvgAggregate: ["id"],
  TypeRelationSumAggregate: ["id"],
  TypeRelationMinAggregate: ["id", "type", "strong", "weak", "invalidity"],
  TypeRelationMaxAggregate: ["id", "type", "strong", "weak", "invalidity"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
> = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  PokemonWhereInput: ["AND", "OR", "NOT", "id", "number", "name", "type", "isRegion", "isMega", "typeSingle1", "typeSingle2", "isEvolution", "evolutionId", "generation", "PokemonRegion", "PokemonMega"],
  PokemonOrderByWithRelationInput: ["id", "number", "name", "type", "isRegion", "isMega", "typeSingle1", "typeSingle2", "isEvolution", "evolutionId", "generation", "PokemonRegion", "PokemonMega"],
  PokemonWhereUniqueInput: ["id", "number"],
  PokemonOrderByWithAggregationInput: ["id", "number", "name", "type", "isRegion", "isMega", "typeSingle1", "typeSingle2", "isEvolution", "evolutionId", "generation", "_count", "_avg", "_max", "_min", "_sum"],
  PokemonScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "number", "name", "type", "isRegion", "isMega", "typeSingle1", "typeSingle2", "isEvolution", "evolutionId", "generation"],
  PokemonRegionWhereInput: ["AND", "OR", "NOT", "id", "pokemon", "pokemonId", "pokemonNumber", "region", "type", "typeSingle1", "typeSingle2"],
  PokemonRegionOrderByWithRelationInput: ["id", "pokemon", "pokemonId", "pokemonNumber", "region", "type", "typeSingle1", "typeSingle2"],
  PokemonRegionWhereUniqueInput: ["id"],
  PokemonRegionOrderByWithAggregationInput: ["id", "pokemonId", "pokemonNumber", "region", "type", "typeSingle1", "typeSingle2", "_count", "_avg", "_max", "_min", "_sum"],
  PokemonRegionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "pokemonId", "pokemonNumber", "region", "type", "typeSingle1", "typeSingle2"],
  PokemonMegaWhereInput: ["AND", "OR", "NOT", "id", "pokemon", "pokemonId", "pokemonNumber", "type", "typeSingle1", "typeSingle2"],
  PokemonMegaOrderByWithRelationInput: ["id", "pokemon", "pokemonId", "pokemonNumber", "type", "typeSingle1", "typeSingle2"],
  PokemonMegaWhereUniqueInput: ["id"],
  PokemonMegaOrderByWithAggregationInput: ["id", "pokemonId", "pokemonNumber", "type", "typeSingle1", "typeSingle2", "_count", "_avg", "_max", "_min", "_sum"],
  PokemonMegaScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "pokemonId", "pokemonNumber", "type", "typeSingle1", "typeSingle2"],
  TypeRelationWhereInput: ["AND", "OR", "NOT", "id", "type", "strong", "weak", "invalidity"],
  TypeRelationOrderByWithRelationInput: ["id", "type", "strong", "weak", "invalidity"],
  TypeRelationWhereUniqueInput: ["id"],
  TypeRelationOrderByWithAggregationInput: ["id", "type", "strong", "weak", "invalidity", "_count", "_avg", "_max", "_min", "_sum"],
  TypeRelationScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "type", "strong", "weak", "invalidity"],
  PokemonCreateInput: ["number", "name", "type", "isRegion", "isMega", "typeSingle1", "typeSingle2", "isEvolution", "evolutionId", "generation", "PokemonRegion", "PokemonMega"],
  PokemonUpdateInput: ["number", "name", "type", "isRegion", "isMega", "typeSingle1", "typeSingle2", "isEvolution", "evolutionId", "generation", "PokemonRegion", "PokemonMega"],
  PokemonCreateManyInput: ["id", "number", "name", "type", "isRegion", "isMega", "typeSingle1", "typeSingle2", "isEvolution", "evolutionId", "generation"],
  PokemonUpdateManyMutationInput: ["number", "name", "type", "isRegion", "isMega", "typeSingle1", "typeSingle2", "isEvolution", "evolutionId", "generation"],
  PokemonRegionCreateInput: ["pokemon", "pokemonNumber", "region", "type", "typeSingle1", "typeSingle2"],
  PokemonRegionUpdateInput: ["pokemon", "pokemonNumber", "region", "type", "typeSingle1", "typeSingle2"],
  PokemonRegionCreateManyInput: ["id", "pokemonId", "pokemonNumber", "region", "type", "typeSingle1", "typeSingle2"],
  PokemonRegionUpdateManyMutationInput: ["pokemonNumber", "region", "type", "typeSingle1", "typeSingle2"],
  PokemonMegaCreateInput: ["pokemon", "pokemonNumber", "type", "typeSingle1", "typeSingle2"],
  PokemonMegaUpdateInput: ["pokemon", "pokemonNumber", "type", "typeSingle1", "typeSingle2"],
  PokemonMegaCreateManyInput: ["id", "pokemonId", "pokemonNumber", "type", "typeSingle1", "typeSingle2"],
  PokemonMegaUpdateManyMutationInput: ["pokemonNumber", "type", "typeSingle1", "typeSingle2"],
  TypeRelationCreateInput: ["type", "strong", "weak", "invalidity"],
  TypeRelationUpdateInput: ["type", "strong", "weak", "invalidity"],
  TypeRelationCreateManyInput: ["id", "type", "strong", "weak", "invalidity"],
  TypeRelationUpdateManyMutationInput: ["type", "strong", "weak", "invalidity"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  StringNullableListFilter: ["equals", "has", "hasEvery", "hasSome", "isEmpty"],
  BoolNullableFilter: ["equals", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  BoolFilter: ["equals", "not"],
  IntNullableListFilter: ["equals", "has", "hasEvery", "hasSome", "isEmpty"],
  PokemonRegionListRelationFilter: ["every", "some", "none"],
  PokemonMegaListRelationFilter: ["every", "some", "none"],
  PokemonRegionOrderByRelationAggregateInput: ["_count"],
  PokemonMegaOrderByRelationAggregateInput: ["_count"],
  PokemonCountOrderByAggregateInput: ["id", "number", "name", "type", "isRegion", "isMega", "typeSingle1", "typeSingle2", "isEvolution", "evolutionId", "generation"],
  PokemonAvgOrderByAggregateInput: ["id", "number", "evolutionId", "generation"],
  PokemonMaxOrderByAggregateInput: ["id", "number", "name", "isRegion", "isMega", "typeSingle1", "typeSingle2", "isEvolution", "generation"],
  PokemonMinOrderByAggregateInput: ["id", "number", "name", "isRegion", "isMega", "typeSingle1", "typeSingle2", "isEvolution", "generation"],
  PokemonSumOrderByAggregateInput: ["id", "number", "evolutionId", "generation"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  BoolNullableWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  PokemonRelationFilter: ["is", "isNot"],
  PokemonRegionCountOrderByAggregateInput: ["id", "pokemonId", "pokemonNumber", "region", "type", "typeSingle1", "typeSingle2"],
  PokemonRegionAvgOrderByAggregateInput: ["id", "pokemonId", "pokemonNumber"],
  PokemonRegionMaxOrderByAggregateInput: ["id", "pokemonId", "pokemonNumber", "region", "typeSingle1", "typeSingle2"],
  PokemonRegionMinOrderByAggregateInput: ["id", "pokemonId", "pokemonNumber", "region", "typeSingle1", "typeSingle2"],
  PokemonRegionSumOrderByAggregateInput: ["id", "pokemonId", "pokemonNumber"],
  PokemonMegaCountOrderByAggregateInput: ["id", "pokemonId", "pokemonNumber", "type", "typeSingle1", "typeSingle2"],
  PokemonMegaAvgOrderByAggregateInput: ["id", "pokemonId", "pokemonNumber"],
  PokemonMegaMaxOrderByAggregateInput: ["id", "pokemonId", "pokemonNumber", "typeSingle1", "typeSingle2"],
  PokemonMegaMinOrderByAggregateInput: ["id", "pokemonId", "pokemonNumber", "typeSingle1", "typeSingle2"],
  PokemonMegaSumOrderByAggregateInput: ["id", "pokemonId", "pokemonNumber"],
  TypeRelationCountOrderByAggregateInput: ["id", "type", "strong", "weak", "invalidity"],
  TypeRelationAvgOrderByAggregateInput: ["id"],
  TypeRelationMaxOrderByAggregateInput: ["id", "type", "strong", "weak", "invalidity"],
  TypeRelationMinOrderByAggregateInput: ["id", "type", "strong", "weak", "invalidity"],
  TypeRelationSumOrderByAggregateInput: ["id"],
  PokemonCreatetypeInput: ["set"],
  PokemonCreateevolutionIdInput: ["set"],
  PokemonRegionCreateNestedManyWithoutPokemonInput: ["create", "connectOrCreate", "createMany", "connect"],
  PokemonMegaCreateNestedManyWithoutPokemonInput: ["create", "connectOrCreate", "createMany", "connect"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  StringFieldUpdateOperationsInput: ["set"],
  PokemonUpdatetypeInput: ["set", "push"],
  NullableBoolFieldUpdateOperationsInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  BoolFieldUpdateOperationsInput: ["set"],
  PokemonUpdateevolutionIdInput: ["set", "push"],
  PokemonRegionUpdateManyWithoutPokemonNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  PokemonMegaUpdateManyWithoutPokemonNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  PokemonCreateNestedOneWithoutPokemonRegionInput: ["create", "connectOrCreate", "connect"],
  PokemonRegionCreatetypeInput: ["set"],
  PokemonUpdateOneRequiredWithoutPokemonRegionNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PokemonRegionUpdatetypeInput: ["set", "push"],
  PokemonCreateNestedOneWithoutPokemonMegaInput: ["create", "connectOrCreate", "connect"],
  PokemonMegaCreatetypeInput: ["set"],
  PokemonUpdateOneRequiredWithoutPokemonMegaNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PokemonMegaUpdatetypeInput: ["set", "push"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedBoolNullableFilter: ["equals", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedBoolFilter: ["equals", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedBoolNullableWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  PokemonRegionCreateWithoutPokemonInput: ["pokemonNumber", "region", "type", "typeSingle1", "typeSingle2"],
  PokemonRegionCreateOrConnectWithoutPokemonInput: ["where", "create"],
  PokemonRegionCreateManyPokemonInputEnvelope: ["data", "skipDuplicates"],
  PokemonMegaCreateWithoutPokemonInput: ["pokemonNumber", "type", "typeSingle1", "typeSingle2"],
  PokemonMegaCreateOrConnectWithoutPokemonInput: ["where", "create"],
  PokemonMegaCreateManyPokemonInputEnvelope: ["data", "skipDuplicates"],
  PokemonRegionUpsertWithWhereUniqueWithoutPokemonInput: ["where", "update", "create"],
  PokemonRegionUpdateWithWhereUniqueWithoutPokemonInput: ["where", "data"],
  PokemonRegionUpdateManyWithWhereWithoutPokemonInput: ["where", "data"],
  PokemonRegionScalarWhereInput: ["AND", "OR", "NOT", "id", "pokemonId", "pokemonNumber", "region", "type", "typeSingle1", "typeSingle2"],
  PokemonMegaUpsertWithWhereUniqueWithoutPokemonInput: ["where", "update", "create"],
  PokemonMegaUpdateWithWhereUniqueWithoutPokemonInput: ["where", "data"],
  PokemonMegaUpdateManyWithWhereWithoutPokemonInput: ["where", "data"],
  PokemonMegaScalarWhereInput: ["AND", "OR", "NOT", "id", "pokemonId", "pokemonNumber", "type", "typeSingle1", "typeSingle2"],
  PokemonCreateWithoutPokemonRegionInput: ["number", "name", "type", "isRegion", "isMega", "typeSingle1", "typeSingle2", "isEvolution", "evolutionId", "generation", "PokemonMega"],
  PokemonCreateOrConnectWithoutPokemonRegionInput: ["where", "create"],
  PokemonUpsertWithoutPokemonRegionInput: ["update", "create"],
  PokemonUpdateWithoutPokemonRegionInput: ["number", "name", "type", "isRegion", "isMega", "typeSingle1", "typeSingle2", "isEvolution", "evolutionId", "generation", "PokemonMega"],
  PokemonCreateWithoutPokemonMegaInput: ["number", "name", "type", "isRegion", "isMega", "typeSingle1", "typeSingle2", "isEvolution", "evolutionId", "generation", "PokemonRegion"],
  PokemonCreateOrConnectWithoutPokemonMegaInput: ["where", "create"],
  PokemonUpsertWithoutPokemonMegaInput: ["update", "create"],
  PokemonUpdateWithoutPokemonMegaInput: ["number", "name", "type", "isRegion", "isMega", "typeSingle1", "typeSingle2", "isEvolution", "evolutionId", "generation", "PokemonRegion"],
  PokemonRegionCreateManyPokemonInput: ["id", "pokemonNumber", "region", "type", "typeSingle1", "typeSingle2"],
  PokemonMegaCreateManyPokemonInput: ["id", "pokemonNumber", "type", "typeSingle1", "typeSingle2"],
  PokemonRegionUpdateWithoutPokemonInput: ["pokemonNumber", "region", "type", "typeSingle1", "typeSingle2"],
  PokemonMegaUpdateWithoutPokemonInput: ["pokemonNumber", "type", "typeSingle1", "typeSingle2"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
> = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

