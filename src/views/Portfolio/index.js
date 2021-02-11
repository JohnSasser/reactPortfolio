import React, { useState, useEffect } from 'react';
import {
  Link,
  useRouteMatch,
  useParams,
  Route,
  Switch,
} from 'react-router-dom';
import Footer from '../../components/Footer';

import './style.css';

const appObjects = {
  dataNexus: {
    name: 'Data Nexus',
    routeTitle: 'dataNexus',
    imagePath: '/images/dataNexus.png',
    backgroundColor: '#C1D9B8',
  },
  dataExplorer: {
    name: 'Atl Metro Housing Data Explorer',
    routeTitle: 'dataExplorer',
    imagePath: '/images/MAHS-data-explorer.png',
    backgroundColor: '#537a8e',
  },
  evictionTracker: {
    name: 'Atl Metro Housing Eviction Tracker',
    routeTitle: 'evictionTracker',
    imagePath: '/images/ATL-eviction-tracker.png',
    backgroundColor: '#7c2b28aa',
  },
};

const Portfolio = () => {
  let { path, url } = useRouteMatch();
  console.log('path', path, ' || url', url);
  const [clickedApp, setClickedApp] = useState([]);

  console.log('clickedApp: ', clickedApp);

  // function setApp(app) {
  //   console.log('app:', app);
  //   setClickedApp(app);
  // }

  function ProjectCard() {
    // The <Route> that rendered this component has a
    // path of `/topics/:topicId`. The `:topicId` portion
    // of the URL indicates a placeholder that we can
    // get from `useParams()`.
    const { topicId } = useParams();
    console.log(topicId);

    // names the app-link objects names after the route name so we can key in directly to the object and save some processing power on render;
    {
      // console.log(appObjects[topicId].imagePath);
      return (
        <>
          <div
            className="selected-project-card-container"
            style={{
              background: `linear-gradient(to bottom, ${clickedApp.backgroundColor}, #ffffff)`,
            }}
          >
            <img
              className="selected-project-image"
              alt=""
              src={process.env.PUBLIC_URL + `${appObjects[topicId].imagePath}`}
              target="blank"
              noreferrer="true"
            />
          </div>
          <img />
        </>
      );
    }
  }

  return (
    <>
      {/* {clickedApp.length === 0 ? ( */}
      <div id="portfolio-container">
        {Object.values(appObjects).map((x, idx) => {
          console.log(x);
          return (
            <Link
              to={`${url}/${x.routeTitle}`}
              key={x.imagePath[idx]}
              className="project-card-container"
              onClick={() => setClickedApp(x)}
            >
              <img
                key={x.imagePath[idx]}
                className="project-image"
                alt=""
                src={process.env.PUBLIC_URL + `${x.imagePath}`}
                target="blank"
                noreferrer="true"
              />
            </Link>
          );
        })}
        <Switch>
          <Route exact path={path}></Route>
          <Route path={`${path}/:topicId`}>
            <ProjectCard />
          </Route>
        </Switch>

        <Footer />
      </div>
    </>
  );
  {
    /* : (
        <>
          <div className="portflio-container">
            <div
              className="selected-project-card-container"
              style={{
                background: `linear-gradient(to bottom, ${clickedApp.backgroundColor}, #ffffff)`,
              }}
            >
              <img
                className="selected-project-image"
                alt=""
                src={dataExplorerImg + `${clickedApp.imagePath}`}
                target="blank"
                noreferrer="true"
              />
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  ); 
  */
  }
};

export default Portfolio;
