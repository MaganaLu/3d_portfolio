import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <header className="header">
            <NavLink to="/" className="items-center justify-center flex font-bold shadow-md">
                <p className="text-white">LM</p>
            </NavLink>
            <nav className="flex text-base gap-7 font-light ">
                <NavLink to="/about" className={({isActive}) => !isActive ? 'text-white ' : 'text-green-300'}>
                    <p>About_Me.TXT</p>
                </NavLink>
                <NavLink to="/projects" className={({isActive}) => !isActive ? 'text-white' : 'text-green-300'}>
                    <p>My_Projects.TXT</p>
                </NavLink>
            </nav>
        </header>
    )
}

export default Navbar