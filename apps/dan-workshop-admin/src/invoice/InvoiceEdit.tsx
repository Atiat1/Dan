import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { CustomerTitle } from "../customer/CustomerTitle";
import { JobCardTitle } from "../jobCard/JobCardTitle";

export const InvoiceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
