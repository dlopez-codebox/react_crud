import React, { useEffect, useState } from "react";

import ProductsList from "./ProductsList";
import { Spinner } from "react-bootstrap";

const ProductsContainer = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchData() {
    const response = await fetch("https://northwindrestservices.azurewebsites.net/api/products/", {
      headers: { Authorization: "Basic YWRtaW46YWRtaW4=" },
    });

    const data = await response.json();

    setProducts(data);
  }

  useEffect(() => {
    setIsLoading(true); 
fetchData();
setIsLoading(false);
  }, [])

  return (

<div>
{isLoading && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}

      {!isLoading && <ProductsList productsList={products}  updateProductsListFunction={fetchData}/>}
</div>



  );
};

export default ProductsContainer;
