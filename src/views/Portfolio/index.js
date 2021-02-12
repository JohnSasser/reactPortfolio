import React, { useState } from 'react';
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
  dataExplorer: {
    name: 'Atl Metro Housing Data Explorer',
    routeTitle: 'dataExplorer',
    imagePath: '/images/MAHS-data-explorer.png',
    backgroundColor: '#537a8e',
  },
  dataNexus: {
    name: 'Data Nexus',
    routeTitle: 'dataNexus',
    imagePath: '/images/dataNexus.png',
    backgroundColor: '#41674764',
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
  const [clickedApp, setClickedApp] = useState(false);
  console.log('clickedApp: ', clickedApp);

  function ProjectCard() {
    // The <Route> that rendered this component has a
    // path of `/topics/:projectID`. The `:projectID` portion
    // of the URL indicates a placeholder that we can
    // get from `useParams()`.
    const { projectID } = useParams();
    console.log(projectID);
    // setClickedApp(false);
    // names the app-link objects names after the route name so,
    // we can key directly into the object;

    // console.log(appObjects[projectID].imagePath);
    return (
      <>
        <div
          className="selected-project-card-container"
          style={{
            background: `linear-gradient(to bottom, ${appObjects[projectID].backgroundColor}, #ffffff)`,
          }}
        >
          <img
            className="selected-project-image"
            alt={appObjects[projectID].name}
            src={process.env.PUBLIC_URL + `${appObjects[projectID].imagePath}`}
            target="blank"
            noreferrer="true"
          />
        </div>
      </>
    );
  }

  return (
    <>
      <div id="portfolio-container">
        {Object.values(appObjects).map((x, idx) => {
          // let index = x[idx];
          return (
            <Link
              to={`${url}/${x.routeTitle}`}
              key={x.imagePath[idx]}
              className={`project-card-container ${
                clickedApp ? 'hidden' : 'visible'
              }`}
              onClick={() => setClickedApp(true)}
            >
              <img
                key={x.imagePath[idx]}
                className={`project-card-container ${
                  clickedApp ? 'hidden' : 'visible'
                }`}
                alt={x.name}
                src={process.env.PUBLIC_URL + `${x.imagePath}`}
                target="blank"
                noreferrer="true"
              />
            </Link>
          );
        })}
        <Switch>
          <Route exact path={path}></Route>
          <Route path={`${path}/:projectID`}>
            <ProjectCard />
          </Route>
        </Switch>

        <Footer />
      </div>
    </>
  );
};

export default Portfolio;
