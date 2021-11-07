import './assets/styles/index.css';
import './assets/styles/nav.css';

import Happy from "./assets/images/happy.png"

import Header from "./components/header";
import Footer from "./components/footer";
import Quotes from "./Quotes";
import Navigation from "./components/Navigation";
import Affirmation from "./components/Affirmations";
import { Switch, Route } from 'react-router-dom';


const Home = () => (
  <div className=' fadeIn'>
    <div className="home">
      <h1 className="headline">Embrace the positivity within you!</h1>
      <p className="welcomeNote">
        Find the daily bunch of random good vibe here. <br />
        Let's take the first leap and be the person you want to see in others.<br />
        Never lose the ultimate faith in you. Anything is possible.<br />
        <span className="highlight">  You're only your limit.</span>

      </p>
      <img className="happyIcon" src={Happy} alt="happy picture" />
    </div>
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

      <Navigation />

      <Main />
      <Footer />

    </div>
  );
}

export default App;
