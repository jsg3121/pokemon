import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TypeRelationOrderByWithRelationInput } from "../../../inputs/TypeRelationOrderByWithRelationInput";
import { TypeRelationWhereInput } from "../../../inputs/TypeRelationWhereInput";
import { TypeRelationWhereUniqueInput } from "../../../inputs/TypeRelationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateTypeRelationArgs {
  @TypeGraphQL.Field(_type => TypeRelationWhereInput, {
    nullable: true
  })
  where?: TypeRelationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TypeRelationOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: TypeRelationOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => TypeRelationWhereUniqueInput, {
    nullable: true
  })
  cursor?: TypeRelationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
