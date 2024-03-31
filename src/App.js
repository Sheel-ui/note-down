import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import NotFound from './components/NotFound/NotFound';
import Create from './components/Create/Create';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NoteDetails from './components/NoteDetails/NoteDetails';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/create'>
              <Create />
            </Route>
            <Route path='/notes/:id'>
              <NoteDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>

    </div>
    </Router>
  );
}

export default App;
