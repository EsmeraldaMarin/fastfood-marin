import NavBar from "./components/Navbar/NavBar";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ItemDetail from "./pages/ItemDetail";
import ItemListContainer from "./containers/ItemsCtn/ItemListContainer";
import Cart from "./pages/Cart"
import { CartProvider } from "./context/CartContext";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/category/:categoryKey" component={ItemListContainer} />
          <Route exact path="/item/:id" component={ItemDetail} />
          <Route exact path="*" component={NotFound} />
        </Switch>
        <Footer/>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
