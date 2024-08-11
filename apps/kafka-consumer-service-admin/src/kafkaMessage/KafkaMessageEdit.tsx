import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const KafkaMessageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="messageContent" multiline source="messageContent" />
        <TextInput label="topic" source="topic" />
      </SimpleForm>
    </Edit>
  );
};
