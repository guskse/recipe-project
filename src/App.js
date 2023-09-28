import { BrowserRouter, Switch, Route } from "react-router-dom";

//page components
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import Recipe from "./pages/recipe/Recipe";
import Create from "./pages/create/Create";

//other components
import Navbar from "./components/Navbar"

//styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Navbar />

        <Switch>
          <Route exact path="/"> <Home /> </Route>
          <Route exact path="/create"> <Create /> </Route>
          <Route exact path="/search"> <Search /> </Route>
          <Route exact path="/recipes/:id"> <Recipe /> </Route>
        </Switch>


      </BrowserRouter>
    </div>
  );
}

export default App;
