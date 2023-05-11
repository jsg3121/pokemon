import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateNormalStatsArgs } from "./args/AggregateNormalStatsArgs";
import { CreateManyNormalStatsArgs } from "./args/CreateManyNormalStatsArgs";
import { CreateOneNormalStatsArgs } from "./args/CreateOneNormalStatsArgs";
import { DeleteManyNormalStatsArgs } from "./args/DeleteManyNormalStatsArgs";
import { DeleteOneNormalStatsArgs } from "./args/DeleteOneNormalStatsArgs";
import { FindFirstNormalStatsArgs } from "./args/FindFirstNormalStatsArgs";
import { FindFirstNormalStatsOrThrowArgs } from "./args/FindFirstNormalStatsOrThrowArgs";
import { FindManyNormalStatsArgs } from "./args/FindManyNormalStatsArgs";
import { FindUniqueNormalStatsArgs } from "./args/FindUniqueNormalStatsArgs";
import { FindUniqueNormalStatsOrThrowArgs } from "./args/FindUniqueNormalStatsOrThrowArgs";
import { GroupByNormalStatsArgs } from "./args/GroupByNormalStatsArgs";
import { UpdateManyNormalStatsArgs } from "./args/UpdateManyNormalStatsArgs";
import { UpdateOneNormalStatsArgs } from "./args/UpdateOneNormalStatsArgs";
import { UpsertOneNormalStatsArgs } from "./args/UpsertOneNormalStatsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { NormalStats } from "../../../models/NormalStats";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateNormalStats } from "../../outputs/AggregateNormalStats";
import { NormalStatsGroupBy } from "../../outputs/NormalStatsGroupBy";

@TypeGraphQL.Resolver(_of => NormalStats)
export class NormalStatsCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateNormalStats, {
    nullable: false
  })
  async aggregateNormalStats(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateNormalStatsArgs): Promise<AggregateNormalStats> {
    return getPrismaFromContext(ctx).normalStats.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyNormalStats(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyNormalStatsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).normalStats.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => NormalStats, {
    nullable: false
  })
  async createOneNormalStats(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneNormalStatsArgs): Promise<NormalStats> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).normalStats.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyNormalStats(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyNormalStatsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).normalStats.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => NormalStats, {
    nullable: true
  })
  async deleteOneNormalStats(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneNormalStatsArgs): Promise<NormalStats | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).normalStats.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => NormalStats, {
    nullable: true
  })
  async findFirstNormalStats(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstNormalStatsArgs): Promise<NormalStats | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).normalStats.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => NormalStats, {
    nullable: true
  })
  async findFirstNormalStatsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstNormalStatsOrThrowArgs): Promise<NormalStats | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).normalStats.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [NormalStats], {
    nullable: false
  })
  async findManyNormalStats(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyNormalStatsArgs): Promise<NormalStats[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).normalStats.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => NormalStats, {
    nullable: true
  })
  async findUniqueNormalStats(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueNormalStatsArgs): Promise<NormalStats | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).normalStats.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => NormalStats, {
    nullable: true
  })
  async findUniqueNormalStatsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueNormalStatsOrThrowArgs): Promise<NormalStats | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).normalStats.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [NormalStatsGroupBy], {
    nullable: false
  })
  async groupByNormalStats(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByNormalStatsArgs): Promise<NormalStatsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).normalStats.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyNormalStats(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyNormalStatsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).normalStats.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => NormalStats, {
    nullable: true
  })
  async updateOneNormalStats(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneNormalStatsArgs): Promise<NormalStats | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).normalStats.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => NormalStats, {
    nullable: false
  })
  async upsertOneNormalStats(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneNormalStatsArgs): Promise<NormalStats> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).normalStats.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
