import { Module } from "@nestjs/common";
import { ProcessedReviewModuleBase } from "./base/processedReview.module.base";
import { ProcessedReviewService } from "./processedReview.service";
import { ProcessedReviewController } from "./processedReview.controller";
import { ProcessedReviewResolver } from "./processedReview.resolver";

@Module({
  imports: [ProcessedReviewModuleBase],
  controllers: [ProcessedReviewController],
  providers: [ProcessedReviewService, ProcessedReviewResolver],
  exports: [ProcessedReviewService],
})
export class ProcessedReviewModule {}
