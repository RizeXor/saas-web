import { Link, useRouteMatch } from 'react-router-dom';

function NavbarLink({ label, to, activeOnlyWhenExact }: { label: string, to: string, activeOnlyWhenExact: true }) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  });

  return (
    <li className={match ? "nav-item active" : "nav-item"}>
      <Link to={to} className="nav-link">{label}</Link>
    </li>
  );
}

export default NavbarLink;
