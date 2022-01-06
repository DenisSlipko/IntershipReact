import { Link } from 'react-router-dom';

import { PathMap } from './constants/constants';

const NavigationConfig = [
  {path: PathMap.COUNTRIES, label: "Countries"},
  {path: PathMap.STATES, label: "States"},
  {path: PathMap.CITIES, label: "Cities"},
  {path: PathMap.CARDS, label: "Posts"},
  {path: PathMap.LOGIN, label: "Login"},
]

const Navigation = () =>  (
  <nav className="navigation">
    <ul className="link-container">
      {NavigationConfig.map(({path, label}) => 
        <Link className="navigation-element" to={path} key={path}>
          {label}
        </Link>
      )}
    </ul>
  </nav>
);

export default Navigation;