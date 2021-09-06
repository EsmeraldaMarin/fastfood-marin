import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting= "Welcome, UserX"/>
    </div>
  );
}

export default App;
