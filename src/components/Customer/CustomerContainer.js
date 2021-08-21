import React, { useEffect, useState } from "react";

import CustomerList from "./CustomerList";
import { Spinner } from "react-bootstrap";

const CustomerContainer = (props) => {
  const [customers, setCustomers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchData() {
    const response = await fetch(
      "https://northwindrestservices.azurewebsites.net/customer",

      {
        headers: {
          Authorization: "Basic YWRtaW46YWRtaW4=",
        },
      }
    );

    const data = await response.json();

    setCustomers(data);
  }

  useEffect(() => {
    setIsLoading(true);
    fetchData();

    setIsLoading(false);
  }, []);

  return (<div>

{isLoading && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}

      {!isLoading && <CustomerList CustomerList={customers} />}




  </div>);
};

export default CustomerContainer;
