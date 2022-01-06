import { Link } from 'react-router-dom';

import { RouteConfig } from './App'

const Navigation = () =>  (
  <nav className="navigation">
    <ul className="link-container">
      {RouteConfig.map(({path, label}) => 
        <Link className="navigation-element" to={path} key={label}>
          {label}
        </Link>
      )}
    </ul>
  </nav>
);

export default Navigation;