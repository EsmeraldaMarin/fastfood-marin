import NavBar from "./components/Navbar/NavBar";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./pages/Home";
import Counter from "./pages/Counter";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/counter" component={Counter} />
        <Route exact path="/product/:id" component={ProductDetail} />
        <Route exact path="*" component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
