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
  if (Object.keys(stateProps.clubInfo).length > 0) {
    ReactDOM.render(
      <Head 
        title={stateProps.clubInfo.clubName}
        favicon={stateProps.clubInfo.options.favicon}
        mainColor={stateProps.clubInfo.options.principal_color_web}
      />,
      document.getElementById('title')
    );
    return (
      <Router>
        <div className="container">
          <header>
            <Menu clubInfo={stateProps.clubInfo} />
          </header>
          <main>
            <div className="page-body">
              <Route exact path="/" component={() => <Home {...stateProps} />} />
              <Route path="/equipos" component={() => <Teams {...stateProps} />} />
              <Route path="/noticias/:id?" component={() => <News {...stateProps} />} />
            </div>
          </main>
          <footer>
            <Footer {...stateProps} />
          </footer>
        </div>
      </Router>
    );
  }
  return ('');
}
export default connect(state => state)(App);