import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import Login from "./pages/Login";
import AnchorTemporaryDrawer from "./pages/Login/test";

function App() {
  return (
    <div className="App">
      <Header />
      <ListarTarefa />
      <AnchorTemporaryDrawer />
    </div>
  );
}

export default App;
