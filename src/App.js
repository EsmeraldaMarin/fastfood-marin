import NavBar from "./components/Navbar/NavBar";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ItemDetail from "./pages/ItemDetail";
import ItemListContainer from "./containers/ItemListContainer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/category/:categoryId" component={ItemListContainer} />
        <Route exact path="/item/:id" component={ItemDetail} />
        <Route exact path="*" component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
