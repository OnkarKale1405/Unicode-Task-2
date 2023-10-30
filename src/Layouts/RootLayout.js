import { Outlet, NavLink } from "react-router-dom"
import Home from "../Pages/Home"

export default function RootLayout() {
    return (
        <div className="root-Layout bg-gray-100">
            <header>
                <nav className="flex justify-end bg-gray-200 border-b-2 border-gray-400 items-center">
                    <h1 className="mr-auto p-4 text-2xl ml-24 text-gray-800
                    cursor-pointer max-sm:ml-4">Your LOGO</h1>

                    <NavLink to="login" className={({isActive}) => `btn max-sm:m-0
                    ${isActive?"bg-orange-400":"bg-grey-100 text-white" }
                    `}>Login</NavLink>

                    <NavLink to="register" className={({isActive}) => `btn max-sm:m-0 max-sm:mr-1
                    ${isActive?"bg-orange-400":"bg-grey-100 text-white" }
                    `} >Register</NavLink>
                </nav>
            </header>

            <main>
                <Home />
                <Outlet />
            </main>
        </div>
    )
};
