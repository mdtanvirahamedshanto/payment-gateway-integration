import{useState} from "react";
import {IoIosSearch} from "react-icons/io";
import {CiMenuFries} from "react-icons/ci";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

    return (
        <nav
            className="flex items-center justify-between w-full relative bg-white rounded-full px-[10px] py-[8px]">

            {/* logo */}
            <img src="https://mdtanvirahamedshanto.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.28655c3b.png&w=96&q=75" alt="logo" className="w-[55px] h-12 "/>

            {/* nav links */}
            <ul className="items-center gap-[20px] text-[1rem] text-[#424242] md:flex hidden">

                <Link to={"/"} className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">home</Link>

                <Link to={"/features"} className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">features</Link>

                <Link to={"/blogs"} className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">blogs</Link>

                <Link to={"/shop"} className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">shop</Link>
            </ul>

            {/* action buttons */}
            <div className="items-center gap-[10px] flex">
                <Link to={"/login"}
                    className="py-[7px] text-[1rem] px-[16px] rounded-full capitalize hover:text-[#3B9DF8] transition-all duration-300 sm:flex hidden">Sign
                    in
                </Link>
                <Link to={"/register"}
                    className="py-[7px] text-[1rem] px-[16px] rounded-full capitalize bg-[#3B9DF8] text-white hover:bg-blue-400 transition-all duration-300 sm:flex hidden">Sign
                    up
                </Link>

                <CiMenuFries
                    className="text-[1.8rem] mr-1 text-[#424242]c cursor-pointer md:hidden flex"
                    onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}/>
            </div>

            {/* mobile sidebar */}
            <aside
                className={` ${mobileSidebarOpen ? "translate-x-0 opacity-100 z-20" : "translate-x-[200px] opacity-0 z-[-1]"} md:hidden bg-white p-4 text-center absolute top-[65px] right-0 w-full sm:w-[50%] rounded-md transition-all duration-300`}>
                <div className="relative mb-5">
                    <input
                        className="py-1.5 pr-4 w-full pl-10 rounded-full border border-gray-200 outline-none focus:border-[#3B9DF8]"
                        placeholder="Search..."/>
                    <IoIosSearch className="absolute top-[8px] left-3 text-gray-500 text-[1.3rem]"/>
                </div>
                <ul className="items-center gap-[20px] text-[1rem] text-gray-600 flex flex-col">

                    <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">home</li>

                    <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">features</li>

                    <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">blogs</li>

                    <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">shop</li>

                </ul>
            </aside>
        </nav>
    );
};

export default Navbar;
          