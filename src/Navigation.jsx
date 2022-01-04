import { Link } from 'react-router-dom';

const Navigation = () => {

    const NavigationConfig = [
        {label: 'Country', link: '/'},
        {label: 'States', link: '/states'},
        {label: 'Cities', link: '/cities'},
        {label: 'Cards', link: '/cards'},
        {label: 'Login', link: '/login'},
    ]

  return (
        <nav className="navigation">
          <ul className="link-container">
                {NavigationConfig.map(nav => 
                    <Link className="navigation-element" to={nav.link} key={nav.label}>
                        {nav.label}
                    </Link>
                )}
          </ul>
        </nav>
  );
};

export default Navigation;