import ItemListContainer from "./containers/ItemListContainer";
import NavBar from "./components/Navbar/NavBar";


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting= "Welcome, UserX"/>
    </div>
  );
}

export default App;
