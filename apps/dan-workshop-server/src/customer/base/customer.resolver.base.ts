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
import { Customer } from "./Customer";
import { CustomerCountArgs } from "./CustomerCountArgs";
import { CustomerFindManyArgs } from "./CustomerFindManyArgs";
import { CustomerFindUniqueArgs } from "./CustomerFindUniqueArgs";
import { CreateCustomerArgs } from "./CreateCustomerArgs";
import { UpdateCustomerArgs } from "./UpdateCustomerArgs";
import { DeleteCustomerArgs } from "./DeleteCustomerArgs";
import { InvoiceFindManyArgs } from "../../invoice/base/InvoiceFindManyArgs";
import { Invoice } from "../../invoice/base/Invoice";
import { JobCardFindManyArgs } from "../../jobCard/base/JobCardFindManyArgs";
import { JobCard } from "../../jobCard/base/JobCard";
import { VehicleFindManyArgs } from "../../vehicle/base/VehicleFindManyArgs";
import { Vehicle } from "../../vehicle/base/Vehicle";
import { CustomerService } from "../customer.service";
@graphql.Resolver(() => Customer)
export class CustomerResolverBase {
  constructor(protected readonly service: CustomerService) {}

  async _customersMeta(
    @graphql.Args() args: CustomerCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Customer])
  async customers(
    @graphql.Args() args: CustomerFindManyArgs
  ): Promise<Customer[]> {
    return this.service.customers(args);
  }

  @graphql.Query(() => Customer, { nullable: true })
  async customer(
    @graphql.Args() args: CustomerFindUniqueArgs
  ): Promise<Customer | null> {
    const result = await this.service.customer(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Customer)
  async createCustomer(
    @graphql.Args() args: CreateCustomerArgs
  ): Promise<Customer> {
    return await this.service.createCustomer({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Customer)
  async updateCustomer(
    @graphql.Args() args: UpdateCustomerArgs
  ): Promise<Customer | null> {
    try {
      return await this.service.updateCustomer({
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

  @graphql.Mutation(() => Customer)
  async deleteCustomer(
    @graphql.Args() args: DeleteCustomerArgs
  ): Promise<Customer | null> {
    try {
      return await this.service.deleteCustomer(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Invoice], { name: "invoices" })
  async findInvoices(
    @graphql.Parent() parent: Customer,
    @graphql.Args() args: InvoiceFindManyArgs
  ): Promise<Invoice[]> {
    const results = await this.service.findInvoices(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [JobCard], { name: "jobCards" })
  async findJobCards(
    @graphql.Parent() parent: Customer,
    @graphql.Args() args: JobCardFindManyArgs
  ): Promise<JobCard[]> {
    const results = await this.service.findJobCards(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Vehicle], { name: "vehicles" })
  async findVehicles(
    @graphql.Parent() parent: Customer,
    @graphql.Args() args: VehicleFindManyArgs
  ): Promise<Vehicle[]> {
    const results = await this.service.findVehicles(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
