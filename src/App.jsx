import "./App.css";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import ProductViewer from "./components/ProductViewer";

function App() {
  return (
    <main className="bg-black min-h-screen">
      <NavBar />
      <Hero />
      <ProductViewer />
    </main>
  );
}

export default App;
