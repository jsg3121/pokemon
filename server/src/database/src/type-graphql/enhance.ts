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
  PokemonNormalForm: crudResolvers.PokemonNormalFormCrudResolver,
  PokemonRegion: crudResolvers.PokemonRegionCrudResolver,
  PokemonMega: crudResolvers.PokemonMegaCrudResolver,
  TypeRelation: crudResolvers.TypeRelationCrudResolver,
  NormalStats: crudResolvers.NormalStatsCrudResolver,
  MegaStats: crudResolvers.MegaStatsCrudResolver,
  RegionStats: crudResolvers.RegionStatsCrudResolver,
  FormStats: crudResolvers.FormStatsCrudResolver,
  UseCount: crudResolvers.UseCountCrudResolver
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
  PokemonNormalForm: {
    aggregatePokemonNormalForm: actionResolvers.AggregatePokemonNormalFormResolver,
    createManyPokemonNormalForm: actionResolvers.CreateManyPokemonNormalFormResolver,
    createOnePokemonNormalForm: actionResolvers.CreateOnePokemonNormalFormResolver,
    deleteManyPokemonNormalForm: actionResolvers.DeleteManyPokemonNormalFormResolver,
    deleteOnePokemonNormalForm: actionResolvers.DeleteOnePokemonNormalFormResolver,
    findFirstPokemonNormalForm: actionResolvers.FindFirstPokemonNormalFormResolver,
    findFirstPokemonNormalFormOrThrow: actionResolvers.FindFirstPokemonNormalFormOrThrowResolver,
    pokemonNormalForms: actionResolvers.FindManyPokemonNormalFormResolver,
    pokemonNormalForm: actionResolvers.FindUniquePokemonNormalFormResolver,
    getPokemonNormalForm: actionResolvers.FindUniquePokemonNormalFormOrThrowResolver,
    groupByPokemonNormalForm: actionResolvers.GroupByPokemonNormalFormResolver,
    updateManyPokemonNormalForm: actionResolvers.UpdateManyPokemonNormalFormResolver,
    updateOnePokemonNormalForm: actionResolvers.UpdateOnePokemonNormalFormResolver,
    upsertOnePokemonNormalForm: actionResolvers.UpsertOnePokemonNormalFormResolver
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
  },
  NormalStats: {
    aggregateNormalStats: actionResolvers.AggregateNormalStatsResolver,
    createManyNormalStats: actionResolvers.CreateManyNormalStatsResolver,
    createOneNormalStats: actionResolvers.CreateOneNormalStatsResolver,
    deleteManyNormalStats: actionResolvers.DeleteManyNormalStatsResolver,
    deleteOneNormalStats: actionResolvers.DeleteOneNormalStatsResolver,
    findFirstNormalStats: actionResolvers.FindFirstNormalStatsResolver,
    findFirstNormalStatsOrThrow: actionResolvers.FindFirstNormalStatsOrThrowResolver,
    findManyNormalStats: actionResolvers.FindManyNormalStatsResolver,
    findUniqueNormalStats: actionResolvers.FindUniqueNormalStatsResolver,
    findUniqueNormalStatsOrThrow: actionResolvers.FindUniqueNormalStatsOrThrowResolver,
    groupByNormalStats: actionResolvers.GroupByNormalStatsResolver,
    updateManyNormalStats: actionResolvers.UpdateManyNormalStatsResolver,
    updateOneNormalStats: actionResolvers.UpdateOneNormalStatsResolver,
    upsertOneNormalStats: actionResolvers.UpsertOneNormalStatsResolver
  },
  MegaStats: {
    aggregateMegaStats: actionResolvers.AggregateMegaStatsResolver,
    createManyMegaStats: actionResolvers.CreateManyMegaStatsResolver,
    createOneMegaStats: actionResolvers.CreateOneMegaStatsResolver,
    deleteManyMegaStats: actionResolvers.DeleteManyMegaStatsResolver,
    deleteOneMegaStats: actionResolvers.DeleteOneMegaStatsResolver,
    findFirstMegaStats: actionResolvers.FindFirstMegaStatsResolver,
    findFirstMegaStatsOrThrow: actionResolvers.FindFirstMegaStatsOrThrowResolver,
    findManyMegaStats: actionResolvers.FindManyMegaStatsResolver,
    findUniqueMegaStats: actionResolvers.FindUniqueMegaStatsResolver,
    findUniqueMegaStatsOrThrow: actionResolvers.FindUniqueMegaStatsOrThrowResolver,
    groupByMegaStats: actionResolvers.GroupByMegaStatsResolver,
    updateManyMegaStats: actionResolvers.UpdateManyMegaStatsResolver,
    updateOneMegaStats: actionResolvers.UpdateOneMegaStatsResolver,
    upsertOneMegaStats: actionResolvers.UpsertOneMegaStatsResolver
  },
  RegionStats: {
    aggregateRegionStats: actionResolvers.AggregateRegionStatsResolver,
    createManyRegionStats: actionResolvers.CreateManyRegionStatsResolver,
    createOneRegionStats: actionResolvers.CreateOneRegionStatsResolver,
    deleteManyRegionStats: actionResolvers.DeleteManyRegionStatsResolver,
    deleteOneRegionStats: actionResolvers.DeleteOneRegionStatsResolver,
    findFirstRegionStats: actionResolvers.FindFirstRegionStatsResolver,
    findFirstRegionStatsOrThrow: actionResolvers.FindFirstRegionStatsOrThrowResolver,
    findManyRegionStats: actionResolvers.FindManyRegionStatsResolver,
    findUniqueRegionStats: actionResolvers.FindUniqueRegionStatsResolver,
    findUniqueRegionStatsOrThrow: actionResolvers.FindUniqueRegionStatsOrThrowResolver,
    groupByRegionStats: actionResolvers.GroupByRegionStatsResolver,
    updateManyRegionStats: actionResolvers.UpdateManyRegionStatsResolver,
    updateOneRegionStats: actionResolvers.UpdateOneRegionStatsResolver,
    upsertOneRegionStats: actionResolvers.UpsertOneRegionStatsResolver
  },
  FormStats: {
    aggregateFormStats: actionResolvers.AggregateFormStatsResolver,
    createManyFormStats: actionResolvers.CreateManyFormStatsResolver,
    createOneFormStats: actionResolvers.CreateOneFormStatsResolver,
    deleteManyFormStats: actionResolvers.DeleteManyFormStatsResolver,
    deleteOneFormStats: actionResolvers.DeleteOneFormStatsResolver,
    findFirstFormStats: actionResolvers.FindFirstFormStatsResolver,
    findFirstFormStatsOrThrow: actionResolvers.FindFirstFormStatsOrThrowResolver,
    findManyFormStats: actionResolvers.FindManyFormStatsResolver,
    findUniqueFormStats: actionResolvers.FindUniqueFormStatsResolver,
    findUniqueFormStatsOrThrow: actionResolvers.FindUniqueFormStatsOrThrowResolver,
    groupByFormStats: actionResolvers.GroupByFormStatsResolver,
    updateManyFormStats: actionResolvers.UpdateManyFormStatsResolver,
    updateOneFormStats: actionResolvers.UpdateOneFormStatsResolver,
    upsertOneFormStats: actionResolvers.UpsertOneFormStatsResolver
  },
  UseCount: {
    aggregateUseCount: actionResolvers.AggregateUseCountResolver,
    createManyUseCount: actionResolvers.CreateManyUseCountResolver,
    createOneUseCount: actionResolvers.CreateOneUseCountResolver,
    deleteManyUseCount: actionResolvers.DeleteManyUseCountResolver,
    deleteOneUseCount: actionResolvers.DeleteOneUseCountResolver,
    findFirstUseCount: actionResolvers.FindFirstUseCountResolver,
    findFirstUseCountOrThrow: actionResolvers.FindFirstUseCountOrThrowResolver,
    useCounts: actionResolvers.FindManyUseCountResolver,
    useCount: actionResolvers.FindUniqueUseCountResolver,
    getUseCount: actionResolvers.FindUniqueUseCountOrThrowResolver,
    groupByUseCount: actionResolvers.GroupByUseCountResolver,
    updateManyUseCount: actionResolvers.UpdateManyUseCountResolver,
    updateOneUseCount: actionResolvers.UpdateOneUseCountResolver,
    upsertOneUseCount: actionResolvers.UpsertOneUseCountResolver
  }
};
const crudResolversInfo = {
  Pokemon: ["aggregatePokemon", "createManyPokemon", "createOnePokemon", "deleteManyPokemon", "deleteOnePokemon", "findFirstPokemon", "findFirstPokemonOrThrow", "findManyPokemon", "findUniquePokemon", "findUniquePokemonOrThrow", "groupByPokemon", "updateManyPokemon", "updateOnePokemon", "upsertOnePokemon"],
  PokemonNormalForm: ["aggregatePokemonNormalForm", "createManyPokemonNormalForm", "createOnePokemonNormalForm", "deleteManyPokemonNormalForm", "deleteOnePokemonNormalForm", "findFirstPokemonNormalForm", "findFirstPokemonNormalFormOrThrow", "pokemonNormalForms", "pokemonNormalForm", "getPokemonNormalForm", "groupByPokemonNormalForm", "updateManyPokemonNormalForm", "updateOnePokemonNormalForm", "upsertOnePokemonNormalForm"],
  PokemonRegion: ["aggregatePokemonRegion", "createManyPokemonRegion", "createOnePokemonRegion", "deleteManyPokemonRegion", "deleteOnePokemonRegion", "findFirstPokemonRegion", "findFirstPokemonRegionOrThrow", "pokemonRegions", "pokemonRegion", "getPokemonRegion", "groupByPokemonRegion", "updateManyPokemonRegion", "updateOnePokemonRegion", "upsertOnePokemonRegion"],
  PokemonMega: ["aggregatePokemonMega", "createManyPokemonMega", "createOnePokemonMega", "deleteManyPokemonMega", "deleteOnePokemonMega", "findFirstPokemonMega", "findFirstPokemonMegaOrThrow", "pokemonMegas", "pokemonMega", "getPokemonMega", "groupByPokemonMega", "updateManyPokemonMega", "updateOnePokemonMega", "upsertOnePokemonMega"],
  TypeRelation: ["aggregateTypeRelation", "createManyTypeRelation", "createOneTypeRelation", "deleteManyTypeRelation", "deleteOneTypeRelation", "findFirstTypeRelation", "findFirstTypeRelationOrThrow", "typeRelations", "typeRelation", "getTypeRelation", "groupByTypeRelation", "updateManyTypeRelation", "updateOneTypeRelation", "upsertOneTypeRelation"],
  NormalStats: ["aggregateNormalStats", "createManyNormalStats", "createOneNormalStats", "deleteManyNormalStats", "deleteOneNormalStats", "findFirstNormalStats", "findFirstNormalStatsOrThrow", "findManyNormalStats", "findUniqueNormalStats", "findUniqueNormalStatsOrThrow", "groupByNormalStats", "updateManyNormalStats", "updateOneNormalStats", "upsertOneNormalStats"],
  MegaStats: ["aggregateMegaStats", "createManyMegaStats", "createOneMegaStats", "deleteManyMegaStats", "deleteOneMegaStats", "findFirstMegaStats", "findFirstMegaStatsOrThrow", "findManyMegaStats", "findUniqueMegaStats", "findUniqueMegaStatsOrThrow", "groupByMegaStats", "updateManyMegaStats", "updateOneMegaStats", "upsertOneMegaStats"],
  RegionStats: ["aggregateRegionStats", "createManyRegionStats", "createOneRegionStats", "deleteManyRegionStats", "deleteOneRegionStats", "findFirstRegionStats", "findFirstRegionStatsOrThrow", "findManyRegionStats", "findUniqueRegionStats", "findUniqueRegionStatsOrThrow", "groupByRegionStats", "updateManyRegionStats", "updateOneRegionStats", "upsertOneRegionStats"],
  FormStats: ["aggregateFormStats", "createManyFormStats", "createOneFormStats", "deleteManyFormStats", "deleteOneFormStats", "findFirstFormStats", "findFirstFormStatsOrThrow", "findManyFormStats", "findUniqueFormStats", "findUniqueFormStatsOrThrow", "groupByFormStats", "updateManyFormStats", "updateOneFormStats", "upsertOneFormStats"],
  UseCount: ["aggregateUseCount", "createManyUseCount", "createOneUseCount", "deleteManyUseCount", "deleteOneUseCount", "findFirstUseCount", "findFirstUseCountOrThrow", "useCounts", "useCount", "getUseCount", "groupByUseCount", "updateManyUseCount", "updateOneUseCount", "upsertOneUseCount"]
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
  AggregatePokemonNormalFormArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyPokemonNormalFormArgs: ["data", "skipDuplicates"],
  CreateOnePokemonNormalFormArgs: ["data"],
  DeleteManyPokemonNormalFormArgs: ["where"],
  DeleteOnePokemonNormalFormArgs: ["where"],
  FindFirstPokemonNormalFormArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstPokemonNormalFormOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPokemonNormalFormArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniquePokemonNormalFormArgs: ["where"],
  FindUniquePokemonNormalFormOrThrowArgs: ["where"],
  GroupByPokemonNormalFormArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyPokemonNormalFormArgs: ["data", "where"],
  UpdateOnePokemonNormalFormArgs: ["data", "where"],
  UpsertOnePokemonNormalFormArgs: ["where", "create", "update"],
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
  UpsertOneTypeRelationArgs: ["where", "create", "update"],
  AggregateNormalStatsArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyNormalStatsArgs: ["data", "skipDuplicates"],
  CreateOneNormalStatsArgs: ["data"],
  DeleteManyNormalStatsArgs: ["where"],
  DeleteOneNormalStatsArgs: ["where"],
  FindFirstNormalStatsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstNormalStatsOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyNormalStatsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueNormalStatsArgs: ["where"],
  FindUniqueNormalStatsOrThrowArgs: ["where"],
  GroupByNormalStatsArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyNormalStatsArgs: ["data", "where"],
  UpdateOneNormalStatsArgs: ["data", "where"],
  UpsertOneNormalStatsArgs: ["where", "create", "update"],
  AggregateMegaStatsArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyMegaStatsArgs: ["data", "skipDuplicates"],
  CreateOneMegaStatsArgs: ["data"],
  DeleteManyMegaStatsArgs: ["where"],
  DeleteOneMegaStatsArgs: ["where"],
  FindFirstMegaStatsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstMegaStatsOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyMegaStatsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueMegaStatsArgs: ["where"],
  FindUniqueMegaStatsOrThrowArgs: ["where"],
  GroupByMegaStatsArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyMegaStatsArgs: ["data", "where"],
  UpdateOneMegaStatsArgs: ["data", "where"],
  UpsertOneMegaStatsArgs: ["where", "create", "update"],
  AggregateRegionStatsArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyRegionStatsArgs: ["data", "skipDuplicates"],
  CreateOneRegionStatsArgs: ["data"],
  DeleteManyRegionStatsArgs: ["where"],
  DeleteOneRegionStatsArgs: ["where"],
  FindFirstRegionStatsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstRegionStatsOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyRegionStatsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueRegionStatsArgs: ["where"],
  FindUniqueRegionStatsOrThrowArgs: ["where"],
  GroupByRegionStatsArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyRegionStatsArgs: ["data", "where"],
  UpdateOneRegionStatsArgs: ["data", "where"],
  UpsertOneRegionStatsArgs: ["where", "create", "update"],
  AggregateFormStatsArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyFormStatsArgs: ["data", "skipDuplicates"],
  CreateOneFormStatsArgs: ["data"],
  DeleteManyFormStatsArgs: ["where"],
  DeleteOneFormStatsArgs: ["where"],
  FindFirstFormStatsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstFormStatsOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyFormStatsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueFormStatsArgs: ["where"],
  FindUniqueFormStatsOrThrowArgs: ["where"],
  GroupByFormStatsArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyFormStatsArgs: ["data", "where"],
  UpdateOneFormStatsArgs: ["data", "where"],
  UpsertOneFormStatsArgs: ["where", "create", "update"],
  AggregateUseCountArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyUseCountArgs: ["data", "skipDuplicates"],
  CreateOneUseCountArgs: ["data"],
  DeleteManyUseCountArgs: ["where"],
  DeleteOneUseCountArgs: ["where"],
  FindFirstUseCountArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstUseCountOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUseCountArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueUseCountArgs: ["where"],
  FindUniqueUseCountOrThrowArgs: ["where"],
  GroupByUseCountArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyUseCountArgs: ["data", "where"],
  UpdateOneUseCountArgs: ["data", "where"],
  UpsertOneUseCountArgs: ["where", "create", "update"]
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
  PokemonNormalForm: relationResolvers.PokemonNormalFormRelationsResolver,
  PokemonRegion: relationResolvers.PokemonRegionRelationsResolver,
  PokemonMega: relationResolvers.PokemonMegaRelationsResolver,
  NormalStats: relationResolvers.NormalStatsRelationsResolver,
  MegaStats: relationResolvers.MegaStatsRelationsResolver,
  RegionStats: relationResolvers.RegionStatsRelationsResolver,
  FormStats: relationResolvers.FormStatsRelationsResolver
};
const relationResolversInfo = {
  Pokemon: ["NormalStats", "PokemonMega", "PokemonNormalForm", "PokemonRegion"],
  PokemonNormalForm: ["FormStats", "pokemon"],
  PokemonRegion: ["pokemon", "RegionStats"],
  PokemonMega: ["MegaStats", "pokemon"],
  NormalStats: ["pokemon"],
  MegaStats: ["megaPokemon"],
  RegionStats: ["regionPokemon"],
  FormStats: ["normalFormPokemon"]
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
  Pokemon: ["id", "number", "name", "type", "isRegion", "isMega", "typeSingle1", "typeSingle2", "isEvolution", "evolutionId", "generation", "isForm"],
  PokemonNormalForm: ["id", "pokemonId", "name", "type", "typeSingle1", "typeSingle2", "imagePath", "statCode"],
  PokemonRegion: ["id", "pokemonId", "pokemonNumber", "region", "type", "typeSingle1", "typeSingle2", "statCode"],
  PokemonMega: ["id", "pokemonId", "pokemonNumber", "type", "typeSingle1", "typeSingle2", "statCode"],
  TypeRelation: ["id", "type", "strong", "weak", "invalidity"],
  NormalStats: ["id", "pokemonId", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total"],
  MegaStats: ["id", "statCode", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total"],
  RegionStats: ["id", "statCode", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total"],
  FormStats: ["id", "statCode", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total"],
  UseCount: ["id", "totalCount", "todayCount"]
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
  PokemonGroupBy: ["id", "number", "name", "type", "isRegion", "isMega", "typeSingle1", "typeSingle2", "isEvolution", "evolutionId", "generation", "isForm", "_count", "_avg", "_sum", "_min", "_max"],
  AggregatePokemonNormalForm: ["_count", "_avg", "_sum", "_min", "_max"],
  PokemonNormalFormGroupBy: ["id", "pokemonId", "name", "type", "typeSingle1", "typeSingle2", "imagePath", "statCode", "_count", "_avg", "_sum", "_min", "_max"],
  AggregatePokemonRegion: ["_count", "_avg", "_sum", "_min", "_max"],
  PokemonRegionGroupBy: ["id", "pokemonId", "pokemonNumber", "region", "type", "typeSingle1", "typeSingle2", "statCode", "_count", "_avg", "_sum", "_min", "_max"],
  AggregatePokemonMega: ["_count", "_avg", "_sum", "_min", "_max"],
  PokemonMegaGroupBy: ["id", "pokemonId", "pokemonNumber", "type", "typeSingle1", "typeSingle2", "statCode", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateTypeRelation: ["_count", "_avg", "_sum", "_min", "_max"],
  TypeRelationGroupBy: ["id", "type", "strong", "weak", "invalidity", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateNormalStats: ["_count", "_avg", "_sum", "_min", "_max"],
  NormalStatsGroupBy: ["id", "pokemonId", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateMegaStats: ["_count", "_avg", "_sum", "_min", "_max"],
  MegaStatsGroupBy: ["id", "statCode", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateRegionStats: ["_count", "_avg", "_sum", "_min", "_max"],
  RegionStatsGroupBy: ["id", "statCode", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateFormStats: ["_count", "_avg", "_sum", "_min", "_max"],
  FormStatsGroupBy: ["id", "statCode", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateUseCount: ["_count", "_avg", "_sum", "_min", "_max"],
  UseCountGroupBy: ["id", "totalCount", "todayCount", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  PokemonCount: ["PokemonMega", "PokemonNormalForm", "PokemonRegion"],
  PokemonCountAggregate: ["id", "number", "name", "type", "isRegion", "isMega", "typeSingle1", "typeSingle2", "isEvolution", "evolutionId", "generation", "isForm", "_all"],
  PokemonAvgAggregate: ["id", "number", "evolutionId", "generation"],
  PokemonSumAggregate: ["id", "number", "evolutionId", "generation"],
  PokemonMinAggregate: ["id", "number", "name", "isRegion", "isMega", "typeSingle1", "typeSingle2", "isEvolution", "generation", "isForm"],
  PokemonMaxAggregate: ["id", "number", "name", "isRegion", "isMega", "typeSingle1", "typeSingle2", "isEvolution", "generation", "isForm"],
  PokemonNormalFormCount: ["FormStats"],
  PokemonNormalFormCountAggregate: ["id", "pokemonId", "name", "type", "typeSingle1", "typeSingle2", "imagePath", "statCode", "_all"],
  PokemonNormalFormAvgAggregate: ["id", "pokemonId"],
  PokemonNormalFormSumAggregate: ["id", "pokemonId"],
  PokemonNormalFormMinAggregate: ["id", "pokemonId", "name", "typeSingle1", "typeSingle2", "imagePath", "statCode"],
  PokemonNormalFormMaxAggregate: ["id", "pokemonId", "name", "typeSingle1", "typeSingle2", "imagePath", "statCode"],
  PokemonRegionCount: ["RegionStats"],
  PokemonRegionCountAggregate: ["id", "pokemonId", "pokemonNumber", "region", "type", "typeSingle1", "typeSingle2", "statCode", "_all"],
  PokemonRegionAvgAggregate: ["id", "pokemonId", "pokemonNumber"],
  PokemonRegionSumAggregate: ["id", "pokemonId", "pokemonNumber"],
  PokemonRegionMinAggregate: ["id", "pokemonId", "pokemonNumber", "region", "typeSingle1", "typeSingle2", "statCode"],
  PokemonRegionMaxAggregate: ["id", "pokemonId", "pokemonNumber", "region", "typeSingle1", "typeSingle2", "statCode"],
  PokemonMegaCount: ["MegaStats"],
  PokemonMegaCountAggregate: ["id", "pokemonId", "pokemonNumber", "type", "typeSingle1", "typeSingle2", "statCode", "_all"],
  PokemonMegaAvgAggregate: ["id", "pokemonId", "pokemonNumber"],
  PokemonMegaSumAggregate: ["id", "pokemonId", "pokemonNumber"],
  PokemonMegaMinAggregate: ["id", "pokemonId", "pokemonNumber", "typeSingle1", "typeSingle2", "statCode"],
  PokemonMegaMaxAggregate: ["id", "pokemonId", "pokemonNumber", "typeSingle1", "typeSingle2", "statCode"],
  TypeRelationCountAggregate: ["id", "type", "strong", "weak", "invalidity", "_all"],
  TypeRelationAvgAggregate: ["id"],
  TypeRelationSumAggregate: ["id"],
  TypeRelationMinAggregate: ["id", "type", "strong", "weak", "invalidity"],
  TypeRelationMaxAggregate: ["id", "type", "strong", "weak", "invalidity"],
  NormalStatsCountAggregate: ["id", "pokemonId", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total", "_all"],
  NormalStatsAvgAggregate: ["id", "pokemonId", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total"],
  NormalStatsSumAggregate: ["id", "pokemonId", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total"],
  NormalStatsMinAggregate: ["id", "pokemonId", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total"],
  NormalStatsMaxAggregate: ["id", "pokemonId", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total"],
  MegaStatsCountAggregate: ["id", "statCode", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total", "_all"],
  MegaStatsAvgAggregate: ["id", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total"],
  MegaStatsSumAggregate: ["id", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total"],
  MegaStatsMinAggregate: ["id", "statCode", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total"],
  MegaStatsMaxAggregate: ["id", "statCode", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total"],
  RegionStatsCountAggregate: ["id", "statCode", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total", "_all"],
  RegionStatsAvgAggregate: ["id", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total"],
  RegionStatsSumAggregate: ["id", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total"],
  RegionStatsMinAggregate: ["id", "statCode", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total"],
  RegionStatsMaxAggregate: ["id", "statCode", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total"],
  FormStatsCountAggregate: ["id", "statCode", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total", "_all"],
  FormStatsAvgAggregate: ["id", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total"],
  FormStatsSumAggregate: ["id", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total"],
  FormStatsMinAggregate: ["id", "statCode", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total"],
  FormStatsMaxAggregate: ["id", "statCode", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total"],
  UseCountCountAggregate: ["id", "totalCount", "todayCount", "_all"],
  UseCountAvgAggregate: ["id", "totalCount", "todayCount"],
  UseCountSumAggregate: ["id", "totalCount", "todayCount"],
  UseCountMinAggregate: ["id", "totalCount", "todayCount"],
  UseCountMaxAggregate: ["id", "totalCount", "todayCount"]
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
  PokemonWhereInput: ["AND", "OR", "NOT", "id", "number", "name", "type", "isRegion", "isMega", "typeSingle1", "typeSingle2", "isEvolution", "evolutionId", "generation", "isForm", "NormalStats", "PokemonMega", "PokemonNormalForm", "PokemonRegion"],
  PokemonOrderByWithRelationInput: ["id", "number", "name", "type", "isRegion", "isMega", "typeSingle1", "typeSingle2", "isEvolution", "evolutionId", "generation", "isForm", "NormalStats", "PokemonMega", "PokemonNormalForm", "PokemonRegion"],
  PokemonWhereUniqueInput: ["id", "number"],
  PokemonOrderByWithAggregationInput: ["id", "number", "name", "type", "isRegion", "isMega", "typeSingle1", "typeSingle2", "isEvolution", "evolutionId", "generation", "isForm", "_count", "_avg", "_max", "_min", "_sum"],
  PokemonScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "number", "name", "type", "isRegion", "isMega", "typeSingle1", "typeSingle2", "isEvolution", "evolutionId", "generation", "isForm"],
  PokemonNormalFormWhereInput: ["AND", "OR", "NOT", "id", "pokemonId", "name", "type", "typeSingle1", "typeSingle2", "imagePath", "statCode", "FormStats", "pokemon"],
  PokemonNormalFormOrderByWithRelationInput: ["id", "pokemonId", "name", "type", "typeSingle1", "typeSingle2", "imagePath", "statCode", "FormStats", "pokemon"],
  PokemonNormalFormWhereUniqueInput: ["id", "statCode"],
  PokemonNormalFormOrderByWithAggregationInput: ["id", "pokemonId", "name", "type", "typeSingle1", "typeSingle2", "imagePath", "statCode", "_count", "_avg", "_max", "_min", "_sum"],
  PokemonNormalFormScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "pokemonId", "name", "type", "typeSingle1", "typeSingle2", "imagePath", "statCode"],
  PokemonRegionWhereInput: ["AND", "OR", "NOT", "id", "pokemonId", "pokemonNumber", "region", "type", "typeSingle1", "typeSingle2", "statCode", "pokemon", "RegionStats"],
  PokemonRegionOrderByWithRelationInput: ["id", "pokemonId", "pokemonNumber", "region", "type", "typeSingle1", "typeSingle2", "statCode", "pokemon", "RegionStats"],
  PokemonRegionWhereUniqueInput: ["id", "statCode"],
  PokemonRegionOrderByWithAggregationInput: ["id", "pokemonId", "pokemonNumber", "region", "type", "typeSingle1", "typeSingle2", "statCode", "_count", "_avg", "_max", "_min", "_sum"],
  PokemonRegionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "pokemonId", "pokemonNumber", "region", "type", "typeSingle1", "typeSingle2", "statCode"],
  PokemonMegaWhereInput: ["AND", "OR", "NOT", "id", "pokemonId", "pokemonNumber", "type", "typeSingle1", "typeSingle2", "statCode", "MegaStats", "pokemon"],
  PokemonMegaOrderByWithRelationInput: ["id", "pokemonId", "pokemonNumber", "type", "typeSingle1", "typeSingle2", "statCode", "MegaStats", "pokemon"],
  PokemonMegaWhereUniqueInput: ["id", "statCode"],
  PokemonMegaOrderByWithAggregationInput: ["id", "pokemonId", "pokemonNumber", "type", "typeSingle1", "typeSingle2", "statCode", "_count", "_avg", "_max", "_min", "_sum"],
  PokemonMegaScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "pokemonId", "pokemonNumber", "type", "typeSingle1", "typeSingle2", "statCode"],
  TypeRelationWhereInput: ["AND", "OR", "NOT", "id", "type", "strong", "weak", "invalidity"],
  TypeRelationOrderByWithRelationInput: ["id", "type", "strong", "weak", "invalidity"],
  TypeRelationWhereUniqueInput: ["id"],
  TypeRelationOrderByWithAggregationInput: ["id", "type", "strong", "weak", "invalidity", "_count", "_avg", "_max", "_min", "_sum"],
  TypeRelationScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "type", "strong", "weak", "invalidity"],
  NormalStatsWhereInput: ["AND", "OR", "NOT", "id", "pokemonId", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total", "pokemon"],
  NormalStatsOrderByWithRelationInput: ["id", "pokemonId", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total", "pokemon"],
  NormalStatsWhereUniqueInput: ["id", "pokemonId"],
  NormalStatsOrderByWithAggregationInput: ["id", "pokemonId", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total", "_count", "_avg", "_max", "_min", "_sum"],
  NormalStatsScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "pokemonId", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total"],
  MegaStatsWhereInput: ["AND", "OR", "NOT", "id", "statCode", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total", "megaPokemon"],
  MegaStatsOrderByWithRelationInput: ["id", "statCode", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total", "megaPokemon"],
  MegaStatsWhereUniqueInput: ["id"],
  MegaStatsOrderByWithAggregationInput: ["id", "statCode", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total", "_count", "_avg", "_max", "_min", "_sum"],
  MegaStatsScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "statCode", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total"],
  RegionStatsWhereInput: ["AND", "OR", "NOT", "id", "statCode", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total", "regionPokemon"],
  RegionStatsOrderByWithRelationInput: ["id", "statCode", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total", "regionPokemon"],
  RegionStatsWhereUniqueInput: ["id"],
  RegionStatsOrderByWithAggregationInput: ["id", "statCode", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total", "_count", "_avg", "_max", "_min", "_sum"],
  RegionStatsScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "statCode", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total"],
  FormStatsWhereInput: ["AND", "OR", "NOT", "id", "statCode", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total", "normalFormPokemon"],
  FormStatsOrderByWithRelationInput: ["id", "statCode", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total", "normalFormPokemon"],
  FormStatsWhereUniqueInput: ["id"],
  FormStatsOrderByWithAggregationInput: ["id", "statCode", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total", "_count", "_avg", "_max", "_min", "_sum"],
  FormStatsScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "statCode", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total"],
  UseCountWhereInput: ["AND", "OR", "NOT", "id", "totalCount", "todayCount"],
  UseCountOrderByWithRelationInput: ["id", "totalCount", "todayCount"],
  UseCountWhereUniqueInput: ["id"],
  UseCountOrderByWithAggregationInput: ["id", "totalCount", "todayCount", "_count", "_avg", "_max", "_min", "_sum"],
  UseCountScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "totalCount", "todayCount"],
  PokemonCreateInput: ["number", "name", "type", "isRegion", "isMega", "typeSingle1", "typeSingle2", "isEvolution", "evolutionId", "generation", "isForm", "NormalStats", "PokemonMega", "PokemonNormalForm", "PokemonRegion"],
  PokemonUpdateInput: ["number", "name", "type", "isRegion", "isMega", "typeSingle1", "typeSingle2", "isEvolution", "evolutionId", "generation", "isForm", "NormalStats", "PokemonMega", "PokemonNormalForm", "PokemonRegion"],
  PokemonCreateManyInput: ["id", "number", "name", "type", "isRegion", "isMega", "typeSingle1", "typeSingle2", "isEvolution", "evolutionId", "generation", "isForm"],
  PokemonUpdateManyMutationInput: ["number", "name", "type", "isRegion", "isMega", "typeSingle1", "typeSingle2", "isEvolution", "evolutionId", "generation", "isForm"],
  PokemonNormalFormCreateInput: ["name", "type", "typeSingle1", "typeSingle2", "imagePath", "statCode", "FormStats", "pokemon"],
  PokemonNormalFormUpdateInput: ["name", "type", "typeSingle1", "typeSingle2", "imagePath", "statCode", "FormStats", "pokemon"],
  PokemonNormalFormCreateManyInput: ["id", "pokemonId", "name", "type", "typeSingle1", "typeSingle2", "imagePath", "statCode"],
  PokemonNormalFormUpdateManyMutationInput: ["name", "type", "typeSingle1", "typeSingle2", "imagePath", "statCode"],
  PokemonRegionCreateInput: ["pokemonNumber", "region", "type", "typeSingle1", "typeSingle2", "statCode", "pokemon", "RegionStats"],
  PokemonRegionUpdateInput: ["pokemonNumber", "region", "type", "typeSingle1", "typeSingle2", "statCode", "pokemon", "RegionStats"],
  PokemonRegionCreateManyInput: ["id", "pokemonId", "pokemonNumber", "region", "type", "typeSingle1", "typeSingle2", "statCode"],
  PokemonRegionUpdateManyMutationInput: ["pokemonNumber", "region", "type", "typeSingle1", "typeSingle2", "statCode"],
  PokemonMegaCreateInput: ["pokemonNumber", "type", "typeSingle1", "typeSingle2", "statCode", "MegaStats", "pokemon"],
  PokemonMegaUpdateInput: ["pokemonNumber", "type", "typeSingle1", "typeSingle2", "statCode", "MegaStats", "pokemon"],
  PokemonMegaCreateManyInput: ["id", "pokemonId", "pokemonNumber", "type", "typeSingle1", "typeSingle2", "statCode"],
  PokemonMegaUpdateManyMutationInput: ["pokemonNumber", "type", "typeSingle1", "typeSingle2", "statCode"],
  TypeRelationCreateInput: ["type", "strong", "weak", "invalidity"],
  TypeRelationUpdateInput: ["type", "strong", "weak", "invalidity"],
  TypeRelationCreateManyInput: ["id", "type", "strong", "weak", "invalidity"],
  TypeRelationUpdateManyMutationInput: ["type", "strong", "weak", "invalidity"],
  NormalStatsCreateInput: ["hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total", "pokemon"],
  NormalStatsUpdateInput: ["hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total", "pokemon"],
  NormalStatsCreateManyInput: ["id", "pokemonId", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total"],
  NormalStatsUpdateManyMutationInput: ["hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total"],
  MegaStatsCreateInput: ["hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total", "megaPokemon"],
  MegaStatsUpdateInput: ["hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total", "megaPokemon"],
  MegaStatsCreateManyInput: ["id", "statCode", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total"],
  MegaStatsUpdateManyMutationInput: ["hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total"],
  RegionStatsCreateInput: ["hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total", "regionPokemon"],
  RegionStatsUpdateInput: ["hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total", "regionPokemon"],
  RegionStatsCreateManyInput: ["id", "statCode", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total"],
  RegionStatsUpdateManyMutationInput: ["hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total"],
  FormStatsCreateInput: ["hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total", "normalFormPokemon"],
  FormStatsUpdateInput: ["hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total", "normalFormPokemon"],
  FormStatsCreateManyInput: ["id", "statCode", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total"],
  FormStatsUpdateManyMutationInput: ["hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total"],
  UseCountCreateInput: ["totalCount", "todayCount"],
  UseCountUpdateInput: ["totalCount", "todayCount"],
  UseCountCreateManyInput: ["id", "totalCount", "todayCount"],
  UseCountUpdateManyMutationInput: ["totalCount", "todayCount"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  StringNullableListFilter: ["equals", "has", "hasEvery", "hasSome", "isEmpty"],
  BoolNullableFilter: ["equals", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  BoolFilter: ["equals", "not"],
  IntNullableListFilter: ["equals", "has", "hasEvery", "hasSome", "isEmpty"],
  NormalStatsRelationFilter: ["is", "isNot"],
  PokemonMegaListRelationFilter: ["every", "some", "none"],
  PokemonNormalFormListRelationFilter: ["every", "some", "none"],
  PokemonRegionListRelationFilter: ["every", "some", "none"],
  PokemonMegaOrderByRelationAggregateInput: ["_count"],
  PokemonNormalFormOrderByRelationAggregateInput: ["_count"],
  PokemonRegionOrderByRelationAggregateInput: ["_count"],
  PokemonCountOrderByAggregateInput: ["id", "number", "name", "type", "isRegion", "isMega", "typeSingle1", "typeSingle2", "isEvolution", "evolutionId", "generation", "isForm"],
  PokemonAvgOrderByAggregateInput: ["id", "number", "evolutionId", "generation"],
  PokemonMaxOrderByAggregateInput: ["id", "number", "name", "isRegion", "isMega", "typeSingle1", "typeSingle2", "isEvolution", "generation", "isForm"],
  PokemonMinOrderByAggregateInput: ["id", "number", "name", "isRegion", "isMega", "typeSingle1", "typeSingle2", "isEvolution", "generation", "isForm"],
  PokemonSumOrderByAggregateInput: ["id", "number", "evolutionId", "generation"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  BoolNullableWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  FormStatsListRelationFilter: ["every", "some", "none"],
  PokemonRelationFilter: ["is", "isNot"],
  FormStatsOrderByRelationAggregateInput: ["_count"],
  PokemonNormalFormCountOrderByAggregateInput: ["id", "pokemonId", "name", "type", "typeSingle1", "typeSingle2", "imagePath", "statCode"],
  PokemonNormalFormAvgOrderByAggregateInput: ["id", "pokemonId"],
  PokemonNormalFormMaxOrderByAggregateInput: ["id", "pokemonId", "name", "typeSingle1", "typeSingle2", "imagePath", "statCode"],
  PokemonNormalFormMinOrderByAggregateInput: ["id", "pokemonId", "name", "typeSingle1", "typeSingle2", "imagePath", "statCode"],
  PokemonNormalFormSumOrderByAggregateInput: ["id", "pokemonId"],
  RegionStatsListRelationFilter: ["every", "some", "none"],
  RegionStatsOrderByRelationAggregateInput: ["_count"],
  PokemonRegionCountOrderByAggregateInput: ["id", "pokemonId", "pokemonNumber", "region", "type", "typeSingle1", "typeSingle2", "statCode"],
  PokemonRegionAvgOrderByAggregateInput: ["id", "pokemonId", "pokemonNumber"],
  PokemonRegionMaxOrderByAggregateInput: ["id", "pokemonId", "pokemonNumber", "region", "typeSingle1", "typeSingle2", "statCode"],
  PokemonRegionMinOrderByAggregateInput: ["id", "pokemonId", "pokemonNumber", "region", "typeSingle1", "typeSingle2", "statCode"],
  PokemonRegionSumOrderByAggregateInput: ["id", "pokemonId", "pokemonNumber"],
  MegaStatsListRelationFilter: ["every", "some", "none"],
  MegaStatsOrderByRelationAggregateInput: ["_count"],
  PokemonMegaCountOrderByAggregateInput: ["id", "pokemonId", "pokemonNumber", "type", "typeSingle1", "typeSingle2", "statCode"],
  PokemonMegaAvgOrderByAggregateInput: ["id", "pokemonId", "pokemonNumber"],
  PokemonMegaMaxOrderByAggregateInput: ["id", "pokemonId", "pokemonNumber", "typeSingle1", "typeSingle2", "statCode"],
  PokemonMegaMinOrderByAggregateInput: ["id", "pokemonId", "pokemonNumber", "typeSingle1", "typeSingle2", "statCode"],
  PokemonMegaSumOrderByAggregateInput: ["id", "pokemonId", "pokemonNumber"],
  TypeRelationCountOrderByAggregateInput: ["id", "type", "strong", "weak", "invalidity"],
  TypeRelationAvgOrderByAggregateInput: ["id"],
  TypeRelationMaxOrderByAggregateInput: ["id", "type", "strong", "weak", "invalidity"],
  TypeRelationMinOrderByAggregateInput: ["id", "type", "strong", "weak", "invalidity"],
  TypeRelationSumOrderByAggregateInput: ["id"],
  NormalStatsCountOrderByAggregateInput: ["id", "pokemonId", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total"],
  NormalStatsAvgOrderByAggregateInput: ["id", "pokemonId", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total"],
  NormalStatsMaxOrderByAggregateInput: ["id", "pokemonId", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total"],
  NormalStatsMinOrderByAggregateInput: ["id", "pokemonId", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total"],
  NormalStatsSumOrderByAggregateInput: ["id", "pokemonId", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total"],
  PokemonMegaRelationFilter: ["is", "isNot"],
  MegaStatsCountOrderByAggregateInput: ["id", "statCode", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total"],
  MegaStatsAvgOrderByAggregateInput: ["id", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total"],
  MegaStatsMaxOrderByAggregateInput: ["id", "statCode", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total"],
  MegaStatsMinOrderByAggregateInput: ["id", "statCode", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total"],
  MegaStatsSumOrderByAggregateInput: ["id", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total"],
  PokemonRegionRelationFilter: ["is", "isNot"],
  RegionStatsCountOrderByAggregateInput: ["id", "statCode", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total"],
  RegionStatsAvgOrderByAggregateInput: ["id", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total"],
  RegionStatsMaxOrderByAggregateInput: ["id", "statCode", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total"],
  RegionStatsMinOrderByAggregateInput: ["id", "statCode", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total"],
  RegionStatsSumOrderByAggregateInput: ["id", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total"],
  PokemonNormalFormRelationFilter: ["is", "isNot"],
  FormStatsCountOrderByAggregateInput: ["id", "statCode", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total"],
  FormStatsAvgOrderByAggregateInput: ["id", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total"],
  FormStatsMaxOrderByAggregateInput: ["id", "statCode", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total"],
  FormStatsMinOrderByAggregateInput: ["id", "statCode", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total"],
  FormStatsSumOrderByAggregateInput: ["id", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total"],
  UseCountCountOrderByAggregateInput: ["id", "totalCount", "todayCount"],
  UseCountAvgOrderByAggregateInput: ["id", "totalCount", "todayCount"],
  UseCountMaxOrderByAggregateInput: ["id", "totalCount", "todayCount"],
  UseCountMinOrderByAggregateInput: ["id", "totalCount", "todayCount"],
  UseCountSumOrderByAggregateInput: ["id", "totalCount", "todayCount"],
  PokemonCreatetypeInput: ["set"],
  PokemonCreateevolutionIdInput: ["set"],
  NormalStatsCreateNestedOneWithoutPokemonInput: ["create", "connectOrCreate", "connect"],
  PokemonMegaCreateNestedManyWithoutPokemonInput: ["create", "connectOrCreate", "createMany", "connect"],
  PokemonNormalFormCreateNestedManyWithoutPokemonInput: ["create", "connectOrCreate", "createMany", "connect"],
  PokemonRegionCreateNestedManyWithoutPokemonInput: ["create", "connectOrCreate", "createMany", "connect"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  StringFieldUpdateOperationsInput: ["set"],
  PokemonUpdatetypeInput: ["set", "push"],
  NullableBoolFieldUpdateOperationsInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  BoolFieldUpdateOperationsInput: ["set"],
  PokemonUpdateevolutionIdInput: ["set", "push"],
  NormalStatsUpdateOneWithoutPokemonNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  PokemonMegaUpdateManyWithoutPokemonNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  PokemonNormalFormUpdateManyWithoutPokemonNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  PokemonRegionUpdateManyWithoutPokemonNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  PokemonNormalFormCreatetypeInput: ["set"],
  FormStatsCreateNestedManyWithoutNormalFormPokemonInput: ["create", "connectOrCreate", "createMany", "connect"],
  PokemonCreateNestedOneWithoutPokemonNormalFormInput: ["create", "connectOrCreate", "connect"],
  PokemonNormalFormUpdatetypeInput: ["set", "push"],
  FormStatsUpdateManyWithoutNormalFormPokemonNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  PokemonUpdateOneRequiredWithoutPokemonNormalFormNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PokemonRegionCreatetypeInput: ["set"],
  PokemonCreateNestedOneWithoutPokemonRegionInput: ["create", "connectOrCreate", "connect"],
  RegionStatsCreateNestedManyWithoutRegionPokemonInput: ["create", "connectOrCreate", "createMany", "connect"],
  PokemonRegionUpdatetypeInput: ["set", "push"],
  PokemonUpdateOneRequiredWithoutPokemonRegionNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  RegionStatsUpdateManyWithoutRegionPokemonNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  PokemonMegaCreatetypeInput: ["set"],
  MegaStatsCreateNestedManyWithoutMegaPokemonInput: ["create", "connectOrCreate", "createMany", "connect"],
  PokemonCreateNestedOneWithoutPokemonMegaInput: ["create", "connectOrCreate", "connect"],
  PokemonMegaUpdatetypeInput: ["set", "push"],
  MegaStatsUpdateManyWithoutMegaPokemonNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  PokemonUpdateOneRequiredWithoutPokemonMegaNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PokemonCreateNestedOneWithoutNormalStatsInput: ["create", "connectOrCreate", "connect"],
  PokemonUpdateOneRequiredWithoutNormalStatsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PokemonMegaCreateNestedOneWithoutMegaStatsInput: ["create", "connectOrCreate", "connect"],
  PokemonMegaUpdateOneRequiredWithoutMegaStatsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PokemonRegionCreateNestedOneWithoutRegionStatsInput: ["create", "connectOrCreate", "connect"],
  PokemonRegionUpdateOneRequiredWithoutRegionStatsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PokemonNormalFormCreateNestedOneWithoutFormStatsInput: ["create", "connectOrCreate", "connect"],
  PokemonNormalFormUpdateOneRequiredWithoutFormStatsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
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
  NormalStatsCreateWithoutPokemonInput: ["hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total"],
  NormalStatsCreateOrConnectWithoutPokemonInput: ["where", "create"],
  PokemonMegaCreateWithoutPokemonInput: ["pokemonNumber", "type", "typeSingle1", "typeSingle2", "statCode", "MegaStats"],
  PokemonMegaCreateOrConnectWithoutPokemonInput: ["where", "create"],
  PokemonMegaCreateManyPokemonInputEnvelope: ["data", "skipDuplicates"],
  PokemonNormalFormCreateWithoutPokemonInput: ["name", "type", "typeSingle1", "typeSingle2", "imagePath", "statCode", "FormStats"],
  PokemonNormalFormCreateOrConnectWithoutPokemonInput: ["where", "create"],
  PokemonNormalFormCreateManyPokemonInputEnvelope: ["data", "skipDuplicates"],
  PokemonRegionCreateWithoutPokemonInput: ["pokemonNumber", "region", "type", "typeSingle1", "typeSingle2", "statCode", "RegionStats"],
  PokemonRegionCreateOrConnectWithoutPokemonInput: ["where", "create"],
  PokemonRegionCreateManyPokemonInputEnvelope: ["data", "skipDuplicates"],
  NormalStatsUpsertWithoutPokemonInput: ["update", "create"],
  NormalStatsUpdateWithoutPokemonInput: ["hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total"],
  PokemonMegaUpsertWithWhereUniqueWithoutPokemonInput: ["where", "update", "create"],
  PokemonMegaUpdateWithWhereUniqueWithoutPokemonInput: ["where", "data"],
  PokemonMegaUpdateManyWithWhereWithoutPokemonInput: ["where", "data"],
  PokemonMegaScalarWhereInput: ["AND", "OR", "NOT", "id", "pokemonId", "pokemonNumber", "type", "typeSingle1", "typeSingle2", "statCode"],
  PokemonNormalFormUpsertWithWhereUniqueWithoutPokemonInput: ["where", "update", "create"],
  PokemonNormalFormUpdateWithWhereUniqueWithoutPokemonInput: ["where", "data"],
  PokemonNormalFormUpdateManyWithWhereWithoutPokemonInput: ["where", "data"],
  PokemonNormalFormScalarWhereInput: ["AND", "OR", "NOT", "id", "pokemonId", "name", "type", "typeSingle1", "typeSingle2", "imagePath", "statCode"],
  PokemonRegionUpsertWithWhereUniqueWithoutPokemonInput: ["where", "update", "create"],
  PokemonRegionUpdateWithWhereUniqueWithoutPokemonInput: ["where", "data"],
  PokemonRegionUpdateManyWithWhereWithoutPokemonInput: ["where", "data"],
  PokemonRegionScalarWhereInput: ["AND", "OR", "NOT", "id", "pokemonId", "pokemonNumber", "region", "type", "typeSingle1", "typeSingle2", "statCode"],
  FormStatsCreateWithoutNormalFormPokemonInput: ["hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total"],
  FormStatsCreateOrConnectWithoutNormalFormPokemonInput: ["where", "create"],
  FormStatsCreateManyNormalFormPokemonInputEnvelope: ["data", "skipDuplicates"],
  PokemonCreateWithoutPokemonNormalFormInput: ["number", "name", "type", "isRegion", "isMega", "typeSingle1", "typeSingle2", "isEvolution", "evolutionId", "generation", "isForm", "NormalStats", "PokemonMega", "PokemonRegion"],
  PokemonCreateOrConnectWithoutPokemonNormalFormInput: ["where", "create"],
  FormStatsUpsertWithWhereUniqueWithoutNormalFormPokemonInput: ["where", "update", "create"],
  FormStatsUpdateWithWhereUniqueWithoutNormalFormPokemonInput: ["where", "data"],
  FormStatsUpdateManyWithWhereWithoutNormalFormPokemonInput: ["where", "data"],
  FormStatsScalarWhereInput: ["AND", "OR", "NOT", "id", "statCode", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total"],
  PokemonUpsertWithoutPokemonNormalFormInput: ["update", "create"],
  PokemonUpdateWithoutPokemonNormalFormInput: ["number", "name", "type", "isRegion", "isMega", "typeSingle1", "typeSingle2", "isEvolution", "evolutionId", "generation", "isForm", "NormalStats", "PokemonMega", "PokemonRegion"],
  PokemonCreateWithoutPokemonRegionInput: ["number", "name", "type", "isRegion", "isMega", "typeSingle1", "typeSingle2", "isEvolution", "evolutionId", "generation", "isForm", "NormalStats", "PokemonMega", "PokemonNormalForm"],
  PokemonCreateOrConnectWithoutPokemonRegionInput: ["where", "create"],
  RegionStatsCreateWithoutRegionPokemonInput: ["hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total"],
  RegionStatsCreateOrConnectWithoutRegionPokemonInput: ["where", "create"],
  RegionStatsCreateManyRegionPokemonInputEnvelope: ["data", "skipDuplicates"],
  PokemonUpsertWithoutPokemonRegionInput: ["update", "create"],
  PokemonUpdateWithoutPokemonRegionInput: ["number", "name", "type", "isRegion", "isMega", "typeSingle1", "typeSingle2", "isEvolution", "evolutionId", "generation", "isForm", "NormalStats", "PokemonMega", "PokemonNormalForm"],
  RegionStatsUpsertWithWhereUniqueWithoutRegionPokemonInput: ["where", "update", "create"],
  RegionStatsUpdateWithWhereUniqueWithoutRegionPokemonInput: ["where", "data"],
  RegionStatsUpdateManyWithWhereWithoutRegionPokemonInput: ["where", "data"],
  RegionStatsScalarWhereInput: ["AND", "OR", "NOT", "id", "statCode", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total"],
  MegaStatsCreateWithoutMegaPokemonInput: ["hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total"],
  MegaStatsCreateOrConnectWithoutMegaPokemonInput: ["where", "create"],
  MegaStatsCreateManyMegaPokemonInputEnvelope: ["data", "skipDuplicates"],
  PokemonCreateWithoutPokemonMegaInput: ["number", "name", "type", "isRegion", "isMega", "typeSingle1", "typeSingle2", "isEvolution", "evolutionId", "generation", "isForm", "NormalStats", "PokemonNormalForm", "PokemonRegion"],
  PokemonCreateOrConnectWithoutPokemonMegaInput: ["where", "create"],
  MegaStatsUpsertWithWhereUniqueWithoutMegaPokemonInput: ["where", "update", "create"],
  MegaStatsUpdateWithWhereUniqueWithoutMegaPokemonInput: ["where", "data"],
  MegaStatsUpdateManyWithWhereWithoutMegaPokemonInput: ["where", "data"],
  MegaStatsScalarWhereInput: ["AND", "OR", "NOT", "id", "statCode", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total"],
  PokemonUpsertWithoutPokemonMegaInput: ["update", "create"],
  PokemonUpdateWithoutPokemonMegaInput: ["number", "name", "type", "isRegion", "isMega", "typeSingle1", "typeSingle2", "isEvolution", "evolutionId", "generation", "isForm", "NormalStats", "PokemonNormalForm", "PokemonRegion"],
  PokemonCreateWithoutNormalStatsInput: ["number", "name", "type", "isRegion", "isMega", "typeSingle1", "typeSingle2", "isEvolution", "evolutionId", "generation", "isForm", "PokemonMega", "PokemonNormalForm", "PokemonRegion"],
  PokemonCreateOrConnectWithoutNormalStatsInput: ["where", "create"],
  PokemonUpsertWithoutNormalStatsInput: ["update", "create"],
  PokemonUpdateWithoutNormalStatsInput: ["number", "name", "type", "isRegion", "isMega", "typeSingle1", "typeSingle2", "isEvolution", "evolutionId", "generation", "isForm", "PokemonMega", "PokemonNormalForm", "PokemonRegion"],
  PokemonMegaCreateWithoutMegaStatsInput: ["pokemonNumber", "type", "typeSingle1", "typeSingle2", "statCode", "pokemon"],
  PokemonMegaCreateOrConnectWithoutMegaStatsInput: ["where", "create"],
  PokemonMegaUpsertWithoutMegaStatsInput: ["update", "create"],
  PokemonMegaUpdateWithoutMegaStatsInput: ["pokemonNumber", "type", "typeSingle1", "typeSingle2", "statCode", "pokemon"],
  PokemonRegionCreateWithoutRegionStatsInput: ["pokemonNumber", "region", "type", "typeSingle1", "typeSingle2", "statCode", "pokemon"],
  PokemonRegionCreateOrConnectWithoutRegionStatsInput: ["where", "create"],
  PokemonRegionUpsertWithoutRegionStatsInput: ["update", "create"],
  PokemonRegionUpdateWithoutRegionStatsInput: ["pokemonNumber", "region", "type", "typeSingle1", "typeSingle2", "statCode", "pokemon"],
  PokemonNormalFormCreateWithoutFormStatsInput: ["name", "type", "typeSingle1", "typeSingle2", "imagePath", "statCode", "pokemon"],
  PokemonNormalFormCreateOrConnectWithoutFormStatsInput: ["where", "create"],
  PokemonNormalFormUpsertWithoutFormStatsInput: ["update", "create"],
  PokemonNormalFormUpdateWithoutFormStatsInput: ["name", "type", "typeSingle1", "typeSingle2", "imagePath", "statCode", "pokemon"],
  PokemonMegaCreateManyPokemonInput: ["id", "pokemonNumber", "type", "typeSingle1", "typeSingle2", "statCode"],
  PokemonNormalFormCreateManyPokemonInput: ["id", "name", "type", "typeSingle1", "typeSingle2", "imagePath", "statCode"],
  PokemonRegionCreateManyPokemonInput: ["id", "pokemonNumber", "region", "type", "typeSingle1", "typeSingle2", "statCode"],
  PokemonMegaUpdateWithoutPokemonInput: ["pokemonNumber", "type", "typeSingle1", "typeSingle2", "statCode", "MegaStats"],
  PokemonNormalFormUpdateWithoutPokemonInput: ["name", "type", "typeSingle1", "typeSingle2", "imagePath", "statCode", "FormStats"],
  PokemonRegionUpdateWithoutPokemonInput: ["pokemonNumber", "region", "type", "typeSingle1", "typeSingle2", "statCode", "RegionStats"],
  FormStatsCreateManyNormalFormPokemonInput: ["id", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total"],
  FormStatsUpdateWithoutNormalFormPokemonInput: ["hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total"],
  RegionStatsCreateManyRegionPokemonInput: ["id", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total"],
  RegionStatsUpdateWithoutRegionPokemonInput: ["hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total"],
  MegaStatsCreateManyMegaPokemonInput: ["id", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total"],
  MegaStatsUpdateWithoutMegaPokemonInput: ["hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "total"]
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

