import { useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from "react-redux";
import { addChart } from "./counter/counterSlice";

function Home() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");
  const cartData = useSelector((state) => state.counter)
  let dispatch = useDispatch()


  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });

  }, []);

  useEffect(() => {
    let url = "https://dummyjson.com/products";

    if (category !== "all") {
      url = `https://dummyjson.com/products/category/${category}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, [category]);


  return (
    <div>
      <Header setCategory={setCategory} />

      <div className="main">

        <Sidebar categories={categories} category={category} setCategory={setCategory} />

        <div className="products">



          <div className="product-list">

            {products.map((product) => (
              <div className="product" key={product.id}>
                <img src={product.thumbnail} alt={product.title} />

                <h3 className="my-3">{product.title}</h3>

                <p>${product.price  }</p>

                <button onClick={() => {dispatch(addChart(product));}}>Add to Cart</button>
              </div>
            ))}

          </div>

        </div>

      </div>
    </div>
  );
}

export default Home;
