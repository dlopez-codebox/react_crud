import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Cart from "./Cart/Cart";
import CartCheckout from "./Cart/CartCheckout";
import { CartProvider } from "./Context/CartContext";
import { Container } from "react-bootstrap";
import CustomerContainer from "./Customer/CustomerContainer";
import NavigationBar from "./NavigationBar";
import ProductDetailContainer from "./Products/ProductDetailContainer";
import ProductsContainer from "./Products/ProductsContainer";
import React from "react";

const App = () => {
  return (
    <Router>
      <CartProvider>
        <Container>
          <NavigationBar />

          <Switch>
            <Route exact path="/" component={CustomerContainer} />
            <Route exact path="/products" component={ProductsContainer} />
            <Route
              exact
              path="/products/:id"
              component={ProductDetailContainer}
            />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/checkout" component={CartCheckout} />
          </Switch>
        </Container>
      </CartProvider>
    </Router>
  );
};

export default App;
