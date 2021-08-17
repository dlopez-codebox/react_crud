import { Badge, Breadcrumb, Button, Table } from "react-bootstrap";
import React, { useState } from "react";

import Customer from "./Customer";

const CustomerList = (props) => {
  const [show, setShow] = useState(false);

  const openModal = () => {
    setShow(true);
  };

  async function deleteCustomer (evt) {
      const response = await fetch('https://northwindrestservices.azurewebsites.net/api/products'+evt,
      {
        headers: {
          Authorization: "Basic YWRtaW46YWRtaW4=",
        },
        method:'DELETE'
      });
    let r = window.confirm("Seguro que desea eliminar?");

    if (r) {
      alert(evt);
    } else {
      return;
    }
  };

  return (
    <div>
      <br />
      <Customer showStatus={true} />
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
          Customer
        </Breadcrumb.Item>
        <Breadcrumb.Item active>List</Breadcrumb.Item>
      </Breadcrumb>
      <br />
      <h1>
        Customer List <Badge bg="secondary">{props.CustomerList.length}</Badge>
      </h1>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Company Name</th>
            <th>Contact Title</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {props.CustomerList.map((customer) => (
            <tr key={customer.customerID}>
              <td>{customer.customerID}</td>
              <td>{customer.companyName}</td>
              <td>{customer.contactTitle}</td>
              <td>
                <Button
                  variant="secondary"
                  onClick={() => openModal(customer.customerID)}
                >
                  Editar
                </Button>
              </td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => deleteCustomer(customer.customerID)}
                >
                  X
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CustomerList;
