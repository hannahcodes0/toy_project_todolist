import React from "react";
import Header from "../header/Header";
import Layout from "../layout/Layout";
import Form from "../form/Form";
import List from "../list/List";

const Home = () => {
  return (
    <Layout>
      <Header />
      <Form />
      <List />
    </Layout>
  );
};

export default Home;
