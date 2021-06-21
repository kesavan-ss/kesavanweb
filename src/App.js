import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import { TodoList } from './TodoList'
import { CreateTodo } from './CreateTodo'
import { EditTodo } from './EditTodo'
import './App.css';
//import logo from './logo.svg';


function App() {
  return (
    <div>
    <nav className="header">
      <h1 className="top">Kesavan.S</h1>  
    </nav>
    <nav className="navbar bg-light navbar-expand-lg navbar-light">
    <ul className="navbar-nav mr-auto">
      <li className="navbar-item">
      <Link to="/" className="nav-link">Home</Link>
      </li>
      <li>
      <Link to="/create" className="nav-link">About</Link>
      </li>
      <li>
      <Link to="/edit/.id" className="nav-link">Contact</Link>
      </li>

    </ul>
    </nav>
    <nav className="view">
    
    <Switch>
      <Route exact path="/" component={TodoList}/>
      <Route path="/create" component={CreateTodo}/>
      <Route path="/edit/.id" component={EditTodo}/>
    </Switch>
    </nav>
    </div>
    
  );
}

export default App;
