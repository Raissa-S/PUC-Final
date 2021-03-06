import {BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import Homepage from './components/hompage'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Courses from './components/courses'
import PostGrad from './components/postgraduate'
import Admission from './components/admission'
import TABLE from './components/TABLE'
import About from './components/about'
import Contact from './components/contact';
import Login from './components/courseRegistration';


function App() {
  return (
    <div className="App">
      
      <Router>
          <Navbar></Navbar>
        <Switch>
          <Route  exact path="/"> <Homepage></Homepage> </Route>
          
          <Route  path="/admission"><Admission title='Admission'></Admission></Route>
          <Route  path="/courseRegistration"> <Login></Login> </Route>
          <Route  path="/programmes"> <Courses title='Undergraduate Programmes'></Courses> </Route>
          <Route  path="/professionalSite"></Route>
          <Route  path="/postgraduate"><PostGrad title="Postgraduate Programmes"></PostGrad></Route>
          <Route  path= "/about"><About title='About'></About></Route>
          <Route  path="/contact"><Contact title='Contact'></Contact></Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
