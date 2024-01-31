import Layout from "./components/Layout";
import Context from "./context/Context";

function App() {
  return (
    <Context>
      <div>
        <Layout />
      </div>
    </Context>
  );
}

export default App;
