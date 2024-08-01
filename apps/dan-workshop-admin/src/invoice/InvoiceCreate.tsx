import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { CustomerTitle } from "../customer/CustomerTitle";
import { JobCardTitle } from "../jobCard/JobCardTitle";

export const InvoiceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Amount" source="amount" />
        <ReferenceInput
          source="customer.id"
          reference="Customer"
          label="Customer"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <DateTimeInput label="Date" source="date" />
        <NumberInput step={1} label="InvoiceNumber" source="invoiceNumber" />
        <ReferenceInput source="jobCard.id" reference="JobCard" label="JobCard">
          <SelectInput optionText={JobCardTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
