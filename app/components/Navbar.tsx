// import {Link} from "react-router";
//
// const Navbar = () => {
//     return (
//         <nav className="navbar">
//             <Link to="/">
//                 <p className="text-2xl font-bold text-gradient">RESUMIND</p>
//             </Link>
//             <Link to="/upload" className="primary-button w-fit">
//                 Upload Resume
//             </Link>
//         </nav>
//     )
// }
// export default Navbar

/////////////////

// Navbar.tsx (updated with responsive classes)
import {Link} from "react-router";

const Navbar = () => {
    return (
        <nav className="navbar flex flex-col md:flex-row items-center justify-between p-4 gap-3 md:gap-0">
            <Link to="/">
                <p className="text-xl md:text-2xl font-bold text-gradient">RESUMIND</p>
            </Link>
            <Link to="/upload" className="primary-button w-full md:w-fit text-center py-2 px-4 text-sm md:text-base">
                Upload Resume
            </Link>
        </nav>
    )
}
export default Navbar