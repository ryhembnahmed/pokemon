import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import List from "./Components/List";
import CostumNavBar from "./Components/CostumNavBar";
import "./styles.css";
//import Pokemons from "./data.json";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TeamPokemone from "./Components/TeamPokemone";
import Details from "./Components/Details";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";

function App() {
  const [pokeData, setPokeData] = useState([]);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        setLoading(false);
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        // console.log(res.data.results)
        getPokemon(res.data.results);
      })
      .catch((err) => {
        console.log("Error!");
      });
  }, [url]);

  const getPokemon = async (res) => {
    res.map(async (item) => {
      const result = await axios.get(item.url);
      setPokeData((state) => {
        state = [...state, result.data];
        state.sort((a, b) => (a.id > b.id ? 1 : -1));
        return state;
      });
    });
  };

  return (
    <div>
      <BrowserRouter>
        <CostumNavBar />
        <br />
        {loading && <Spinner animation="border" style={{ marginLeft: "45%", marginTop: "10%", width:"100px", height:"100px" }} />}
        <Routes>
          <Route
            path="/"
            element={
              <List
                pokemones={pokeData}
                setUrl={setUrl}
                nextUrl={nextUrl}
                prevUrl={prevUrl}
                setPokeData={setPokeData}
              />
            }
          ></Route>
          <Route path="/team" element={<TeamPokemone />}></Route>
          <Route
            path="/details/:id"
            element={<Details pokemones={pokeData} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
