import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './styles/main.css';

/* Mock Data */
import clubData from './mocks/clubData.js';

/* Custom Components*/
import Head from './components/head.js';
import Menu from './components/menu.js';
import Footer from './components/footer.js';

/* Views */
import Home from './views/home.js';
import Teams from './views/teams.js';
import News from './views/news.js';


ReactDOM.render(
  <Head 
    title={clubData.title}
    favicon={clubData.favicon}
    mainColor={clubData.mainColor}
  />,
  document.getElementById('title')
);

function App() {
  return (
    <Router>
      <div>
        <Menu
          shield={clubData.shield}
          links={clubData.links}
          color={clubData.mainColor} />
        <div className="page-body">
          <Route exact path="/" component={Home} />
          <Route path="/equipos" component={Teams} />
          <Route path="/noticias/:id?" component={News} />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;