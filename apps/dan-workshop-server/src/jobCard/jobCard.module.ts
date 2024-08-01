import { Module } from "@nestjs/common";
import { JobCardModuleBase } from "./base/jobCard.module.base";
import { JobCardService } from "./jobCard.service";
import { JobCardController } from "./jobCard.controller";
import { JobCardResolver } from "./jobCard.resolver";

@Module({
  imports: [JobCardModuleBase],
  controllers: [JobCardController],
  providers: [JobCardService, JobCardResolver],
  exports: [JobCardService],
})
export class JobCardModule {}
