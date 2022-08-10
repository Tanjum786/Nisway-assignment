import { useEffect } from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { getdata } from "./Apicall/getdata";
import "./App.css";
import { ArticleDetailes, ArticleHeading, NavBar } from "./components";

function App() {
  const [data, setdata] = useState([]);
  const [singleNewsData, setSingleNewsData] = useState({});
  const [loading, setloading] = useState(false);

  useEffect(() => () => getdata(setdata, setloading), []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <ArticleHeading
              data={data}
              setSingleNewsData={setSingleNewsData}
              setloading={setloading}
              loading={loading}
            />
          }
        />
        <Route
          path="/articledetail/:articlename"
          element={<ArticleDetailes singleNewsData={singleNewsData} />}
        />
      </Routes>
    </>
  );
}

export default App;
