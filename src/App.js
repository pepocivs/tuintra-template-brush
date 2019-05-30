import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from 'react-redux';
import './styles/main.css';

/* Custom Components*/
import Head from './components/head.js';
import Menu from './components/menu.js';
import Footer from './components/footer.js';

/* Views */
import Home from './views/home.js';
import Teams from './views/teams.js';
import News from './views/news.js';

function App(stateProps) {
  if (stateProps.clubInfo && stateProps.clubInfo.length > 0) {
    const clubInfo = stateProps.clubInfo[0];
    ReactDOM.render(
      <Head 
        title={clubInfo.clubName}
        favicon={clubInfo.options.favicon}
        mainColor={clubInfo.options.principal_color_web}
      />,
      document.getElementById('title')
    );
    return (
      <Router>
        <div>
          <Menu clubInfo={clubInfo} />
          <div className="page-body">
            <Route exact path="/" component={() => <Home {...stateProps} />} />
            <Route path="/equipos" component={() => <Teams {...stateProps} />} />
            <Route path="/noticias/:id?" component={() => <News {...stateProps} />} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
  return ('');
}
export default connect(state => state)(App);