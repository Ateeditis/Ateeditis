import * as graphql from "@nestjs/graphql";
import { ProcessedReviewResolverBase } from "./base/processedReview.resolver.base";
import { ProcessedReview } from "./base/ProcessedReview";
import { ProcessedReviewService } from "./processedReview.service";

@graphql.Resolver(() => ProcessedReview)
export class ProcessedReviewResolver extends ProcessedReviewResolverBase {
  constructor(protected readonly service: ProcessedReviewService) {
    super(service);
  }
}
