import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ProcessedReviewList } from "./processedReview/ProcessedReviewList";
import { ProcessedReviewCreate } from "./processedReview/ProcessedReviewCreate";
import { ProcessedReviewEdit } from "./processedReview/ProcessedReviewEdit";
import { ProcessedReviewShow } from "./processedReview/ProcessedReviewShow";
import { KafkaMessageList } from "./kafkaMessage/KafkaMessageList";
import { KafkaMessageCreate } from "./kafkaMessage/KafkaMessageCreate";
import { KafkaMessageEdit } from "./kafkaMessage/KafkaMessageEdit";
import { KafkaMessageShow } from "./kafkaMessage/KafkaMessageShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"KafkaConsumerService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="ProcessedReview"
          list={ProcessedReviewList}
          edit={ProcessedReviewEdit}
          create={ProcessedReviewCreate}
          show={ProcessedReviewShow}
        />
        <Resource
          name="KafkaMessage"
          list={KafkaMessageList}
          edit={KafkaMessageEdit}
          create={KafkaMessageCreate}
          show={KafkaMessageShow}
        />
      </Admin>
    </div>
  );
};

export default App;
