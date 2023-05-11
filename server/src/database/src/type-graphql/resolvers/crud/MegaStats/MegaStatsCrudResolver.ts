import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMegaStatsArgs } from "./args/AggregateMegaStatsArgs";
import { CreateManyMegaStatsArgs } from "./args/CreateManyMegaStatsArgs";
import { CreateOneMegaStatsArgs } from "./args/CreateOneMegaStatsArgs";
import { DeleteManyMegaStatsArgs } from "./args/DeleteManyMegaStatsArgs";
import { DeleteOneMegaStatsArgs } from "./args/DeleteOneMegaStatsArgs";
import { FindFirstMegaStatsArgs } from "./args/FindFirstMegaStatsArgs";
import { FindFirstMegaStatsOrThrowArgs } from "./args/FindFirstMegaStatsOrThrowArgs";
import { FindManyMegaStatsArgs } from "./args/FindManyMegaStatsArgs";
import { FindUniqueMegaStatsArgs } from "./args/FindUniqueMegaStatsArgs";
import { FindUniqueMegaStatsOrThrowArgs } from "./args/FindUniqueMegaStatsOrThrowArgs";
import { GroupByMegaStatsArgs } from "./args/GroupByMegaStatsArgs";
import { UpdateManyMegaStatsArgs } from "./args/UpdateManyMegaStatsArgs";
import { UpdateOneMegaStatsArgs } from "./args/UpdateOneMegaStatsArgs";
import { UpsertOneMegaStatsArgs } from "./args/UpsertOneMegaStatsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { MegaStats } from "../../../models/MegaStats";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateMegaStats } from "../../outputs/AggregateMegaStats";
import { MegaStatsGroupBy } from "../../outputs/MegaStatsGroupBy";

@TypeGraphQL.Resolver(_of => MegaStats)
export class MegaStatsCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateMegaStats, {
    nullable: false
  })
  async aggregateMegaStats(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMegaStatsArgs): Promise<AggregateMegaStats> {
    return getPrismaFromContext(ctx).megaStats.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyMegaStats(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyMegaStatsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).megaStats.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MegaStats, {
    nullable: false
  })
  async createOneMegaStats(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneMegaStatsArgs): Promise<MegaStats> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).megaStats.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyMegaStats(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyMegaStatsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).megaStats.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MegaStats, {
    nullable: true
  })
  async deleteOneMegaStats(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneMegaStatsArgs): Promise<MegaStats | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).megaStats.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MegaStats, {
    nullable: true
  })
  async findFirstMegaStats(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMegaStatsArgs): Promise<MegaStats | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).megaStats.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MegaStats, {
    nullable: true
  })
  async findFirstMegaStatsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMegaStatsOrThrowArgs): Promise<MegaStats | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).megaStats.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [MegaStats], {
    nullable: false
  })
  async findManyMegaStats(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyMegaStatsArgs): Promise<MegaStats[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).megaStats.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MegaStats, {
    nullable: true
  })
  async findUniqueMegaStats(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMegaStatsArgs): Promise<MegaStats | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).megaStats.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MegaStats, {
    nullable: true
  })
  async findUniqueMegaStatsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMegaStatsOrThrowArgs): Promise<MegaStats | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).megaStats.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [MegaStatsGroupBy], {
    nullable: false
  })
  async groupByMegaStats(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByMegaStatsArgs): Promise<MegaStatsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).megaStats.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyMegaStats(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyMegaStatsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).megaStats.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MegaStats, {
    nullable: true
  })
  async updateOneMegaStats(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneMegaStatsArgs): Promise<MegaStats | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).megaStats.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MegaStats, {
    nullable: false
  })
  async upsertOneMegaStats(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneMegaStatsArgs): Promise<MegaStats> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).megaStats.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
