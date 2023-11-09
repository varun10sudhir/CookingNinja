import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch ,Route } from 'react-router-dom';
import Search from './pages/search/Search';
import Home from './pages/home/Home'
import Create from './pages/create/Create';
import Recipe from './pages/recipe/Recipe';
import Navbar from './components/Navbar/Nav';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/create">
            <Create />
          </Route>
          <Route exact path="/search">
            <Search/>
          </Route>
          <Route  path="/recipe/:id">
            <Recipe/>
          </Route>
        </Switch>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
