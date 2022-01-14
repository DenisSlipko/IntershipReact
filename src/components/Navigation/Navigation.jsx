import { Link } from 'react-router-dom';

import { PathsMap } from '../../constants/constants';

const NavigationList = [
  {
    path: PathsMap.COUNTRIES, 
    label: 'Countries'
  },
  {
    path: PathsMap.STATES, 
    label: 'States'
  },
  {
    path: PathsMap.CITIES, 
    label: 'Cities'
  },
  {
    path: PathsMap.CARDS, 
    label: 'Cards'
  },
  {
    path: PathsMap.LOGIN, 
    label: 'Login'
  },
]

const Navigation = () => (
  <nav className="navigation">
    <ul className="link-container">
      {NavigationList.map(({path, label}) => 
        <Link className="navigation-element" to={path} key={path}>
          {label}
        </Link>
      )}
    </ul>
  </nav>
);

export default Navigation;
