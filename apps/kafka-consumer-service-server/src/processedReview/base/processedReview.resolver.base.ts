/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { ProcessedReview } from "./ProcessedReview";
import { ProcessedReviewCountArgs } from "./ProcessedReviewCountArgs";
import { ProcessedReviewFindManyArgs } from "./ProcessedReviewFindManyArgs";
import { ProcessedReviewFindUniqueArgs } from "./ProcessedReviewFindUniqueArgs";
import { CreateProcessedReviewArgs } from "./CreateProcessedReviewArgs";
import { UpdateProcessedReviewArgs } from "./UpdateProcessedReviewArgs";
import { DeleteProcessedReviewArgs } from "./DeleteProcessedReviewArgs";
import { ProcessedReviewService } from "../processedReview.service";
@graphql.Resolver(() => ProcessedReview)
export class ProcessedReviewResolverBase {
  constructor(protected readonly service: ProcessedReviewService) {}

  async _processedReviewsMeta(
    @graphql.Args() args: ProcessedReviewCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ProcessedReview])
  async processedReviews(
    @graphql.Args() args: ProcessedReviewFindManyArgs
  ): Promise<ProcessedReview[]> {
    return this.service.processedReviews(args);
  }

  @graphql.Query(() => ProcessedReview, { nullable: true })
  async processedReview(
    @graphql.Args() args: ProcessedReviewFindUniqueArgs
  ): Promise<ProcessedReview | null> {
    const result = await this.service.processedReview(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ProcessedReview)
  async createProcessedReview(
    @graphql.Args() args: CreateProcessedReviewArgs
  ): Promise<ProcessedReview> {
    return await this.service.createProcessedReview({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => ProcessedReview)
  async updateProcessedReview(
    @graphql.Args() args: UpdateProcessedReviewArgs
  ): Promise<ProcessedReview | null> {
    try {
      return await this.service.updateProcessedReview({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => ProcessedReview)
  async deleteProcessedReview(
    @graphql.Args() args: DeleteProcessedReviewArgs
  ): Promise<ProcessedReview | null> {
    try {
      return await this.service.deleteProcessedReview(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
