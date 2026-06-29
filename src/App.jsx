import "./App.css";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

function App() {
  return (
    <main className="bg-black min-h-screen">
      <NavBar />
      <Hero />
    </main>
  );
}

export default App;
