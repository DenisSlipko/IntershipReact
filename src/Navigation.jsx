import { Link } from 'react-router-dom';

const Navigation = ({navigationConfig}) =>  (
  <nav className="navigation">
    <ul className="link-container">
      {navigationConfig.map(({path, label}) => 
        <Link className="navigation-element" to={path} key={label}>
          {label}
        </Link>
      )}
    </ul>
  </nav>
);

export default Navigation;