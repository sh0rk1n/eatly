import React from "react";
import { useNavigate } from "react-router-dom";
import { AccessTokenService } from "features/AuthByUsername/model/services/access-token";
import cls from "pages/Home/ui/HomePage.module.scss";
import { useAuthStore } from "app/providers/store/auth";
import { Navbar } from "widgets/Navbar";
import { MyButton } from "shared/ui/Button/Button";
import trustpilot from "shared/assets/images/trustpilot.svg";
import stars from "shared/assets/images/stars.svg";
import food from "shared/assets/images/hero-food.svg";
import graph from "shared/assets/images/graph.svg";
import notification from "shared/assets/images/hero-notification.svg";
import arrow from "shared/assets/images/arrow.svg";
import decoration_1 from "shared/assets/images/decor-1.svg";
import decoration_2 from "shared/assets/images/decor-2.svg";

export const HomePage = () => {
  /*const navigate = useNavigate();
  const { logout } = useAuthStore();

  const handleLogout = () => {
    AccessTokenService.remove();
    localStorage.removeItem("userName");
    logout();
    navigate("/login");
  };*/

  return (
    <main className="container">
      <section className={cls.hero}>
        <div className={cls.hero_container}>
          <div className={cls.header}>
            <p className={cls.subtitle}>OVER 1000 USERS</p>
            <h1>
              Enjoy Foods All Over The <span>World</span>
            </h1>
            <p className={cls.text}>
              Eatly help you set saving goals, earn cash back offers, Go to
              disclaimer for more details and get paychecks up to two days
              early. <span>Get a $20 bonus.</span>
            </p>
            <div className={cls.buttons}>
              <MyButton variant="contained" size="large" borderRadius="12px">
                Get Started
              </MyButton>
              <MyButton variant="outlined" size="large">
                Go Pro
              </MyButton>
            </div>
            <div className={cls.reviews}>
              <img src={trustpilot} alt="" />
              <img className={cls.stars} src={stars} alt="" />
              <p>4900+</p>
            </div>
          </div>

          <div className={cls.decor}>
            <img className={cls.food} src={food} alt="" />
            <div className={cls.notification}>
              <div className={cls.notificationItem}>
                <div className={cls.notificationImg}>
                  <img src={notification} alt="" />
                </div>
                <div className={cls.notificationInfo}>
                  <h2>Chicken Hell</h2>
                  <p>On The Way</p>
                  <div>3:09 PM</div>
                </div>
              </div>
            </div>
            <div className={cls.graph}>
              <div className={cls.graphItem}>
                <img src={graph} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
