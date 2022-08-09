import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [data, setdata] = useState([]);

  useEffect(
    () => async () => {
      try {
        let response = await axios.get(
          "https://techcrunch.com/wp-json/wp/v2/posts?per_page=10"
        );
        setdata(response.data);
      } catch (error) {
        console.error(error);
      }
    },
    []
  );

  return (
    <div className="App">
      {data.map((datas) => {
        return (
          <>
            <span>date: {datas.date}</span>
            <h1>title: {datas.title.rendered}</h1>
            <h1>excerpt: {datas.excerpt.rendered}</h1>
            <h1>author: {datas.parsely.meta.author.map((el) => el.name)}</h1>;
          </>
        );
      })}
    </div>
  );
}

export default App;
