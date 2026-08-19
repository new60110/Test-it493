import { useState } from "react";
import { products } from "./data/products";
import FilterBar from "./components/FilterBar";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import './App.css';

function App() {
  const [query, setQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const keyword = query.trim().toLowerCase();
  const visibleProducts = products.filter((product) =>
    product.name.toLowerCase().includes(keyword)
  );

  return (
    <div className="app">
      <header className="header">
        <h1 className="header__title">แคตตาล็อกสินค้า</h1>
        <p className="header__subtitle">
          สินค้าทั้งหมด {products.length} รายการ
        </p>
      </header>
      <main>
        <FilterBar query={query} onQueryChange={setQuery} />
        <p className="results">พบ {visibleProducts.length} รายการ</p>
        <ProductList
          products={visibleProducts}
          onSelect={setSelectedProduct}
          onReset={() => setQuery("")}
        />
      </main>
      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}

export default App;