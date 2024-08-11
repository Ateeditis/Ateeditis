import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const KafkaMessageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="messageContent" multiline source="messageContent" />
        <TextInput label="topic" source="topic" />
      </SimpleForm>
    </Create>
  );
};
