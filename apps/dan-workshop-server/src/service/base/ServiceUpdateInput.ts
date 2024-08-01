/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";

import {
  IsNumber,
  Min,
  Max,
  IsOptional,
  IsString,
  MaxLength,
  ValidateNested,
  IsDate,
} from "class-validator";

import { JobCardWhereUniqueInput } from "../../jobCard/base/JobCardWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class ServiceUpdateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  cost?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: () => JobCardWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => JobCardWhereUniqueInput)
  @IsOptional()
  @Field(() => JobCardWhereUniqueInput, {
    nullable: true,
  })
  jobCard?: JobCardWhereUniqueInput | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  serviceDate?: Date | null;
}

export { ServiceUpdateInput as ServiceUpdateInput };
