import React from "react";
import { Link } from 'react-router-dom'
import logo from "../assets/Logo.svg";
import {toast} from 'react-hot-toast';


const Navbar = (props) => {
    let isLoggedIn=props.isLoggedIn;
    let setIsLoggedIn=props.setIsLoggedIn;

    return (
        <div className='flex justify-evenly m-5'>
            <Link to="/">
                <img src={logo} alt="Logo" width={160} height={32} loading="lazy" />
            </Link>
            <nav>
                <ul className='flex gap-8 font-semibold'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                </ul>

            </nav>
            <div className='flex mr-4 gap-6 font-semibold'>
                { !isLoggedIn &&
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                }
                { !isLoggedIn &&
                    <Link to="/signup">
                        <button>Signup</button>
                    </Link>
                }
                {  isLoggedIn &&
                    <Link to="/">
                        <button onClick={()=>{
                            setIsLoggedIn(false);
                            toast.success("Logged Out");
                        }}>
                            Log Out</button>
                    </Link>
                }
                { isLoggedIn &&
                    <Link to="/deshboard">
                        <button>
                            Deshboard</button>
                    </Link>
                }
            </div>

        </div>
        
    )

}


export default Navbar;