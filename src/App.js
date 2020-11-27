import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Footer from './components/shared/Footer/Footer';
import Header from './components/shared/Header/Header';
import Posts from './components/Posts/Posts';
import PostForm from './containers/Posts/PostForm';
import PostDetails from './containers/Posts/PostDetails';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />

        <div className="mt-5">
          <Switch>
            <Route path='/' component={Home} exact/>
            <Route path='/posts' component={Posts} exact/>
            <Route path='/posts/new' component={PostForm} exact/>
            <Route path='/posts/1' component={PostDetails} exact/>
            <Route path='/about' component={About} exact/>
          </Switch>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
