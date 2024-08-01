import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { JobCardTitle } from "../jobCard/JobCardTitle";

export const ServiceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Cost" source="cost" />
        <TextInput label="Description" multiline source="description" />
        <ReferenceInput source="jobCard.id" reference="JobCard" label="JobCard">
          <SelectInput optionText={JobCardTitle} />
        </ReferenceInput>
        <DateTimeInput label="ServiceDate" source="serviceDate" />
      </SimpleForm>
    </Edit>
  );
};
