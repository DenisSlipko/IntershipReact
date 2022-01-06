import { Link } from 'react-router-dom';

import { PathMap } from './App';

const Navigation = () =>  (
  <nav className="navigation">
    <ul className="link-container">
      {Object.keys(PathMap).map((path) => 
        <Link className="navigation-element" to={PathMap[path]} key={path}>
          {path}
        </Link>
      )}
    </ul>
  </nav>
);

export default Navigation;