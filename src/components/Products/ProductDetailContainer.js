import React, { useEffect, useState } from "react";

import Products from "./Products";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetailContainer = () => {
  const { id } = useParams();

  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    const response = await fetch(
      "https://northwindrestservices.azurewebsites.net/api/products/" + id,
      { headers: { Authorization: "Basic YWRtaW46YWRtaW4=" } }
    );

    const data = await response.json();

    setProduct(data);
  };

useEffect(() => {
   setIsLoading(true);
   fetchData();
   setIsLoading(false);
}, [id])

  return (
    <div>

{isLoading && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}

      {!isLoading && product && <Products product={product} />}
    </div>
  );
};

export default ProductDetailContainer;
