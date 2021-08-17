import { Button, Container, Spinner } from "react-bootstrap";
import React, { useEffect, useState } from "react";

import CustomerList from "./Customer/CustomerList";
import NavigationBar from "./NavigationBar";

const App = () => {
  const [customers, setCustomers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(async () => {
    setIsLoading(true);

    const response = await fetch(
      "https://northwindrestservices.azurewebsites.net/customer",
      {
        headers: {
          Authorization: "Basic YWRtaW46YWRtaW4=",
        },
      }
    );

    const data = await response.json();

    setTimeout(() => {
      console.log("");
    }, 3000);

    setCustomers(data);
    setIsLoading(false);
  }, []);

  return (

    <Container>
      <NavigationBar />

      {isLoading && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}

      {!isLoading && <CustomerList CustomerList={customers} />}
    </Container>
   
  );
};

export default App;
