import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../images/Logo.svg";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";

const Header = () => {

  // optional
  const [user] = useAuthState(auth)

  const handleSignOut = () =>{
    signOut(auth)
  }

  return (
    <div>
      <nav>
        <Link to="/">
          {" "}
          <img src={logo} alt="" />{" "}
        </Link>
        <div className="anchor-style">
          {/* anchor link */}
          {/* <a href="/shop">Shop</a>
          <a href="/orders">Orders</a>
          <a href="/inventory">Inventory</a>
          <a href="/about">About</a>

           */}
          {/* router link */}
          {/* <Link to="/shop">Shop</Link>
           <Link to="/orders">Orders</Link>
           <Link to="/inventory">Inventory</Link>
           <Link to="/about">About</Link>
            */}

          {/* Custom Router Link */}
          <CustomLink to="/shop">Shop</CustomLink>
          <CustomLink to="/orders">Orders</CustomLink>
          <CustomLink to="/inventory">Inventory</CustomLink>
          <CustomLink to="/about">About</CustomLink>
          {user?.uid && <span className="text-white ms-4">{user?.email}</span>}
        {user?.uid ? <button className="ms-4 btn btn-danger" onClick={handleSignOut}>Sign Out</button> :<CustomLink to="/login">Login</CustomLink>}
        </div>
      </nav>
    </div>
  );
};

export default Header;
<nav>
  <img src="" alt="" />
</nav>;
