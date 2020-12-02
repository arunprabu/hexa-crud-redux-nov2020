import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReduxToastr from 'react-redux-toastr';
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
            {/* URL Param is in the following URL - postId is the URL Param */}
            <Route path='/posts/:postId' component={PostDetails} exact/> 
            <Route path='/about' component={About} exact/>
          </Switch>

          <ReduxToastr
            timeOut={4000}
            newestOnTop={false}
            preventDuplicates
            position="top-left"
            getState={(state) => state.toastr} // This is the default
            transitionIn="fadeIn"
            transitionOut="fadeOut"
            progressBar
            closeOnToastrClick/>

        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
