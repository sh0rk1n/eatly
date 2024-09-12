import React from "react";
import cls from "./Navbar.module.scss";
import logo from "shared/assets/images/logo.svg";
import { MyButton } from "shared/ui/Button/Button";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className={cls.Navbar}>
      <div className="container">
        <div className={cls.body}>
          <Link to={"/"} className={cls.logo}>
            <img src={logo} alt="" />
            <p>eatly</p>
          </Link>

          <nav>
            <Link to={"/"}>Menu</Link>
            <Link to={"/"}>Blog</Link>
            <Link to={"/"}>Pricing</Link>
            <Link to={"/"}>Contacts</Link>
          </nav>

          <div>
            <MyButton size={"large"} variant="text" bold={true}>
              Login
            </MyButton>
            <MyButton
              size="large"
              variant="contained"
              bold={true}
              className={cls.Button}
            >
              Sign Up
            </MyButton>
          </div>
        </div>
      </div>
    </header>
  );
};
