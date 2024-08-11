import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProcessedReviewServiceBase } from "./base/processedReview.service.base";

@Injectable()
export class ProcessedReviewService extends ProcessedReviewServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
