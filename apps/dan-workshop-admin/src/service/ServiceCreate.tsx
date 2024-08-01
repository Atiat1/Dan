import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { JobCardTitle } from "../jobCard/JobCardTitle";

export const ServiceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Cost" source="cost" />
        <TextInput label="Description" multiline source="description" />
        <ReferenceInput source="jobCard.id" reference="JobCard" label="JobCard">
          <SelectInput optionText={JobCardTitle} />
        </ReferenceInput>
        <DateTimeInput label="ServiceDate" source="serviceDate" />
      </SimpleForm>
    </Create>
  );
};
