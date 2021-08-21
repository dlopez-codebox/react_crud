import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { Container } from "react-bootstrap";
import CustomerContainer from "./Customer/CustomerContainer";
import NavigationBar from "./NavigationBar";
import ProductDetailContainer from "./Products/ProductDetailContainer";
import ProductsContainer from "./Products/ProductsContainer";
import React from "react";

const App = () => {
  return (
    <Router>
    <Container>
      <NavigationBar />

<Switch>

<Route exact path="/" component={CustomerContainer}/>
<Route exact path="/products" component={ProductsContainer}/>
<Route exact path="/products/:id" component={ProductDetailContainer}/>

</Switch>

    
     


    </Container>
    </Router>
  );
};

export default App;
