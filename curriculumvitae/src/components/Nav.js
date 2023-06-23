import { Link, useMatch, useResolvedPath } from "react-router-dom"
const Nav = ({ isNavExpanded, setIsNavExpanded }) => {

    return (
        <nav className="Nav">
            <ul className={isNavExpanded ? "top-nav responsive" : "top-nav"} >
                <CustomLink to="/" isNavExpanded={isNavExpanded} setIsNavExpanded={setIsNavExpanded} >about</CustomLink>
                <CustomLink to="/experience" isNavExpanded={isNavExpanded} setIsNavExpanded={setIsNavExpanded} >experience</CustomLink>
                <CustomLink to="/certificate" isNavExpanded={isNavExpanded} setIsNavExpanded={setIsNavExpanded} >certificates</CustomLink>
                <CustomLink to="/education" isNavExpanded={isNavExpanded} setIsNavExpanded={setIsNavExpanded} >education</CustomLink>
                <li className="icon">
                    <i className="fa fa-bars" onClick={() =>
                        setIsNavExpanded(!isNavExpanded)
                    }></i>
                </li>
            </ul>

        </nav>
    )
}

export default Nav

function CustomLink({ to, isNavExpanded, setIsNavExpanded, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props} onClick={() =>
                setIsNavExpanded(false)}>
                {children}
            </Link>
        </li>
    )
}