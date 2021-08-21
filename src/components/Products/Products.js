import { Button, Form } from "react-bootstrap";
import React, { useState } from "react";

const Products = (props) => {
  const [enteredName, setEnteredName] = useState(props.product.productName);
  const [enteredStock, setEnteredStock] = useState(props.product.unitsInStock);
  const [enteredPrice, setEnteredPrice] = useState(props.product.unitPrice);

  const updateProduct = async () => {
    const response = await fetch(
      "https://northwindrestservices.azurewebsites.net/api/products/",
      {
        method: "PUT",
        body: JSON.stringify({
          productID: props.product.productID,
          productName: enteredName,
          unitsInStock: enteredStock,
          unitPrice: enteredPrice,
          unitsOnOrder: props.product.unitsOnOrder
        }),
        headers: {
          Authorization: "Basic YWRtaW46YWRtaW4=",
          "Content-Type": "application/json"
        },
      }
    );

const data = await response.json();

  };

  const onSubmitChangeHandler = (evt) => {
    evt.preventDefault();

    updateProduct();
  };

  const enteredNameChangeHandler = (evt) => {
    setEnteredName(evt.target.value);
  };

  const enteredStockChangeHandler = (evt) => {
    setEnteredStock(evt.target.value);
  };

  const enteredPriceChangeHandler = (evt) => {
    setEnteredPrice(evt.target.value);
  };

  
  return (
    <Form onSubmit={onSubmitChangeHandler}>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Product Name</Form.Label>
        <Form.Control
          type="text"
          value={enteredName}
          onChange={enteredNameChangeHandler}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Product Stock</Form.Label>
        <Form.Control
          type="number"
          value={enteredStock}
          onChange={enteredStockChangeHandler}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Product Price</Form.Label>
        <Form.Control
          type="number"
          value={enteredPrice}
          onChange={enteredPriceChangeHandler}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Products;
