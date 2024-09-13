import React from "react";
import { MyButton } from "shared/ui/Button/Button";
import trustpilot from "shared/assets/images/trustpilot.svg";
import stars from "shared/assets/images/stars.svg";
import food from "shared/assets/images/hero-food.svg";
import graph from "shared/assets/images/graph.svg";
import notification from "shared/assets/images/hero-notification.svg";
import mobile from "shared/assets/images/mobile.svg";
import button_arrow from "shared/assets/images/button-arrow.svg";
import res_1 from "shared/assets/images/res-1.svg";
import res_2 from "shared/assets/images/res-2.svg";
import bookmark from "shared/assets/images/bookmark.svg";
import cls from "pages/Home/ui/HomePage.module.scss";
import { Link } from "react-router-dom";

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
    <main className="">
      <section className={cls.hero}>
        <div className={`container ${cls.hero_container}`}>
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
      <div className={cls.features}>
        <div className="container">
          <ul className={cls.list}>
            <li>
              <div>10K+</div>
              <p>
                Satisfied Costumers <br />
                All Great Over The World
              </p>
            </li>
            <li>
              <div>4M</div>
              <p>
                Healthy Dishes Sold <br />
                Including Milk Shakes Smooth
              </p>
            </li>
            <li>
              <div>99.99%</div>
              <p>
                Reliable Customer <br />
                Support We Provide Great Experiences
              </p>
            </li>
          </ul>
        </div>
      </div>
      <section className={cls.download}>
        <div
          className={`container container-padding ${cls.download_container}`}
        >
          <div className={cls.image}>
            <img src={mobile} alt="" />
          </div>
          <div className={cls.content}>
            <h2>
              Premium <span>Quality</span> For Your Health
            </h2>
            <ul>
              <li>
                Premium quality food is made with ingredients that are packed
                with essential vitamins, minerals.
              </li>
              <li>
                These foods promote overall wellness by support healthy
                digestion and boosting immunity
              </li>
            </ul>
            <MyButton variant={"contained"} size={"large"}>
              Download <img src={button_arrow} alt="" />
            </MyButton>
          </div>
        </div>
      </section>
      <section className={cls.restaurants}>
        <div className={`container container-padding`}>
          <h2>
            Our Top <span>Restaurants</span>
          </h2>
          <ul>
            <li className={cls.item}>
              <div className={cls.res_img}>
                <img src={res_1} alt="" />
              </div>
              <div className={cls.info}>
                <div className={`${cls.tag} ${cls.yellow}`}>Healthy</div>
                <h3>The Chicken King</h3>
                <div className={cls.bottom}>
                  <div className={cls.time}>24min •</div>
                  <div className={cls.raiting}>4.8</div>
                  <button>
                    <img src={bookmark} alt="" />
                  </button>
                </div>
              </div>
            </li>
            <li className={cls.item}>
              <div className={cls.res_img}>
                <img src={res_2} alt="" />
              </div>
              <div className={cls.info}>
                <div className={`${cls.tag} ${cls.red}`}>Trending</div>
                <h3>The Burger King</h3>
                <div className={cls.bottom}>
                  <div className={cls.time}>24min •</div>
                  <div className={cls.raiting}>4.9</div>
                  <button>
                    <img src={bookmark} alt="" />
                  </button>
                </div>
              </div>
            </li>
            <li className={cls.item}>
              <div className={cls.res_img}>
                <img src={res_1} alt="" />
              </div>
              <div className={cls.info}>
                <div className={`${cls.tag} ${cls.yellow}`}>Healthy</div>
                <h3>The Chicken King</h3>
                <div className={cls.bottom}>
                  <div className={cls.time}>24min •</div>
                  <div className={cls.raiting}>4.8</div>
                  <button>
                    <img src={bookmark} alt="" />
                  </button>
                </div>
              </div>
            </li>
          </ul>
          <div className={cls.view}>
            <Link to={"/"}>
              View all{" "}
              <svg viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2 9.90186H17.8041"
                  stroke-width="2.25773"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M9.90234 2L17.8044 9.90206L9.90234 17.8041"
                  stroke-width="2.25773"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>
      <section className={cls.dishes}>
        <h2>Our Top Dishes</h2>
      </section>
    </main>
  );
};
