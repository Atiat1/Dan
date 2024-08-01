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
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { StringFilter } from "../../util/StringFilter";
import { InvoiceListRelationFilter } from "../../invoice/base/InvoiceListRelationFilter";
import { JobCardListRelationFilter } from "../../jobCard/base/JobCardListRelationFilter";
import { VehicleListRelationFilter } from "../../vehicle/base/VehicleListRelationFilter";

@InputType()
class CustomerWhereInput {
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  address?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  email?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => InvoiceListRelationFilter,
  })
  @ValidateNested()
  @Type(() => InvoiceListRelationFilter)
  @IsOptional()
  @Field(() => InvoiceListRelationFilter, {
    nullable: true,
  })
  invoices?: InvoiceListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => JobCardListRelationFilter,
  })
  @ValidateNested()
  @Type(() => JobCardListRelationFilter)
  @IsOptional()
  @Field(() => JobCardListRelationFilter, {
    nullable: true,
  })
  jobCards?: JobCardListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  phone?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => VehicleListRelationFilter,
  })
  @ValidateNested()
  @Type(() => VehicleListRelationFilter)
  @IsOptional()
  @Field(() => VehicleListRelationFilter, {
    nullable: true,
  })
  vehicles?: VehicleListRelationFilter;
}

export { CustomerWhereInput as CustomerWhereInput };
