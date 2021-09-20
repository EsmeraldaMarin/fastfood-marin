import ItemListContainer from "./containers/ItemListContainer";
import NavBar from "./components/Navbar/NavBar";
import ItemDetailContainer from "./containers/ItemDetailContainer";


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Welcome, UserX" />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
