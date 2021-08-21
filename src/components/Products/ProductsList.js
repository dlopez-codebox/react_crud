import { Badge, Breadcrumb, Button, Table } from "react-bootstrap";
import React, { useContext, useEffect, useState } from "react";

import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";

const ProductsList = (props) => {
  const [products, setProducts] = useState([]);
  const { cartCount, addValue,removeValue,addToCart } = useContext(CartContext);

  async function fetchData() {
    const response = await fetch(
      "https://northwindrestservices.azurewebsites.net/api/products/",
      {
        headers: { Authorization: "Basic YWRtaW46YWRtaW4=" },
      }
    );

    const data = await response.json();

    setProducts(data);
  }

  const addProductToCart = (product) => {
    addValue();
    addToCart(product,2);


  };

  useEffect(() => {
    setProducts(props.productsList);
  }, [props.productsList]);

  const deleteProduct = async (id) => {
    if (window.confirm("Desea eliminar el registro?")) {
      const response = await fetch(
        "https://northwindrestservices.azurewebsites.net/api/products/" + id,
        {
          method: "DELETE",
          headers: { Authorization: "Basic YWRtaW46YWRtaW4=" },
        }
      );

      const data = await response.json();

      fetchData();
    }
  };

  return (
    <div>
      {products && (
        <div>
          <br />
          {/* <Customer showStatus={true} /> */}
          <Breadcrumb>
            <Breadcrumb.Item>
              {" "}
              <Link to={"/"}>Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
              Products
            </Breadcrumb.Item>
            <Breadcrumb.Item active>List</Breadcrumb.Item>
          </Breadcrumb>
          <br />
          <h1>
            Products List <Badge bg="secondary">{products.length}</Badge>
          </h1>
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Unit Price</th>
                <th>Stock</th>
                <th>Editar</th>
                <th>Operaciones</th>
                <th>Ver Detalle</th>

                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.productID}>
                  <td>{product.productID}</td>
                  <td>{product.productName}</td>
                  <td>{product.unitPrice}</td>
                  <td>{product.unitsInStock}</td>
                  <td>
                    <Link to={"/products/" + product.productID}>
                      <Button variant="secondary" onClick={() => {}}>
                        Editar
                      </Button>
                    </Link>
                  </td>
                  <td>
                    <Button onClick={()=>addProductToCart(product)}>+</Button>

                    <Button onClick={()=>removeValue()}>-</Button>
                  </td>
                  <td>
                    <Button variant="secondary" onClick={() => {}}>
                      Ver Detalle
                    </Button>
                  </td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => deleteProduct(product.productID)}
                    >
                      X
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default ProductsList;
