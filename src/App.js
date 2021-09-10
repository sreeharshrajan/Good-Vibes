import './assets/styles/index.css';
import './assets/styles/nav.css';

import Header from "./components/header";
import Footer from "./components/footer";
import Quotes from "./Quotes";
import Affirmation from "./Affirmations";
import { NavLink, Switch, Route } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <ul>
      <li><NavLink exact activeClassName="current" to='/'>Home</NavLink></li>
      <li><NavLink exact activeClassName="current" to='/secrets'>Secrets </NavLink></li>
      <li><NavLink exact activeClassName="current" to='/quotes'>Quotes</NavLink></li>
      <li><NavLink exact activeClassName="current" to='/affirmations'>Affirmations</NavLink></li>
    </ul>
  </nav>
);
const Home = () => (
  <div className='home fadeIn'>
    <h1 className="headline">Embrace the positivity within you!</h1>
    <p className="welcomeNote"> 
    Find the daily bunch of random good vibe here. <br/> 
    This app is develeoped for helping you'll to save from the negativities around you.<br/> 
    Let's take the first leap and be the person you want to see in others.<br/> 
    Never lose the ultimate faith in you. Anything is possible.<br/> 
  <span className="highlight">  You're only your limit.</span>
    </p>

  </div>
);

const Affirmations = () => (
  <div className='affirmations'>
    <Affirmation />
  </div>
);


const Secrets = () => (
  <div className='secrets'>
    <Header />
  </div>
);

const Quote = () => (
  <div className='quotes'>
    <Quotes />
  </div>
);


const Main = () => (
  <Switch>
    <Route exact path='/' component={Home}></Route>
    <Route exact path='/secrets' component={Secrets}></Route>
    <Route exact path='/quotes' component={Quote}></Route>
    <Route exact path='/affirmations' component={Affirmations}></Route>
    
  </Switch>
);


function App() {
  return (
    <div className="App">
      <h1 class="logo">Good Vibes</h1>
      <Navigation />

      <Main />
      <Footer />

    </div>
  );
}

export default App;
