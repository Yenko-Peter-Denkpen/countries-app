import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ContactScreen from "./screens/ContactScreen";
import AboutScreen from "./screens/AboutScreen";
import ProductScreen from "./screens/ProductScreen";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/contact" element={<ContactScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/product" element={<ProductScreen />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
