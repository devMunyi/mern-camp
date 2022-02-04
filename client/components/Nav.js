import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/index";
import { useRouter } from "next/router";
import Link from "next/link";
import { Avatar } from "antd";

const Nav = () => {
  const [currentPath, setCurrentPath] = useState("");
  const [state, setState] = useContext(UserContext);

  useEffect(() => {
    process.browser && setCurrentPath(window.location.pathname); //process.browser strictly check on client side
  }, [process.browser && window.location.pathname]);

  //console.log("Current Path => ", currentPath);
  const router = useRouter();

  const logout = () => {
    window.localStorage.removeItem("auth"); //delete user from local storage
    setState(null); //as well as context

    //redirect user to login page after they Logout
    router.push("/login");
  };

  return (
    <nav className="nav justify-content-between bg-primary">
      <Link href="/">
        <a
          className={`nav-link text-light logo ${
            currentPath === "/" && "active"
          }`}
        >
          <Avatar src="/images/logo/logo.png" /> MERNCAMP
        </a>
      </Link>

      {state === null ? (
        <>
          <Link href="/login">
            <a
              className={`nav-link text-light ${
                currentPath === "/login" && "active"
              }`}
            >
              Login
            </a>
          </Link>

          <Link href="/register">
            <a
              className={`nav-link text-light ${
                currentPath === "/register" && "active"
              }`}
            >
              Register
            </a>
          </Link>
        </>
      ) : (
        <>
          <div className="btn dropdown">
            <a
              className="dropdown-toggle text-light"
              role="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {state && state.user && state.user.name}
            </a>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <Link href="/user/dashboard">
                  <a
                    className={`nav-link dropdown-item  ${
                      currentPath === "/user/dashboard" && "active"
                    }`}
                  >
                    Dashboard
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/user/profile/update">
                  <a
                    className={`nav-link dropdown-item  ${
                      currentPath === "/user/profile/update" && "active"
                    }`}
                  >
                    Profile
                  </a>
                </Link>
              </li>
              <li>
                <a onClick={logout} className="nav-link dropdown-item ">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </>
      )}
    </nav>
  );
};

export default Nav;
