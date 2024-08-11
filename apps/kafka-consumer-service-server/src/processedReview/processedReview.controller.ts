import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProcessedReviewService } from "./processedReview.service";
import { ProcessedReviewControllerBase } from "./base/processedReview.controller.base";

@swagger.ApiTags("processedReviews")
@common.Controller("processedReviews")
export class ProcessedReviewController extends ProcessedReviewControllerBase {
  constructor(protected readonly service: ProcessedReviewService) {
    super(service);
  }
}
