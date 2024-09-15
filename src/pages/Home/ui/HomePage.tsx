import React from "react";
import { MyButton } from "shared/ui/Button/Button";
import logo from "shared/assets/images/logo.svg";
import vk from "shared/assets/images/vk-logo.png";
import trustpilot from "shared/assets/images/trustpilot.svg";
import stars from "shared/assets/images/stars.svg";
import food from "shared/assets/images/hero-food.svg";
import graph from "shared/assets/images/graph.svg";
import notification from "shared/assets/images/hero-notification.svg";
import mobile from "shared/assets/images/mobile.svg";
import button_arrow from "shared/assets/images/button-arrow.svg";
import res_1 from "shared/assets/images/res-1.svg";
import res_2 from "shared/assets/images/res-2.svg";
import food_1 from "shared/assets/images/food-1.svg";
import food_2 from "shared/assets/images/food-2.svg";
import food_3 from "shared/assets/images/food-3.svg";
import bookmark from "shared/assets/images/bookmark.svg";
import cls from "pages/Home/ui/HomePage.module.scss";
import { Link } from "react-router-dom";
import { Slider } from "widgets/Slider";
import { Box, Container, Stack, Typography, useTheme } from "@mui/material";

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
        <Container maxWidth="lg" className={cls.hero_container}>
          <Box className={cls.header}>
            <Typography variant="h6" className={cls.subtitle}>
              OVER 1000 USERS
            </Typography>
            <Typography variant="h1">
              Enjoy Foods All Over The
              <span>World</span>
            </Typography>
            <Typography variant="body1" className={cls.text}>
              Eatly help you set saving goals, earn cash back offers, Go to
              disclaimer for more details and get paychecks up to two days
              early.
              <span>Get a $20 bonus.</span>
            </Typography>
            <Stack direction="row" spacing={2}>
              <MyButton variant="contained" size="large" borderRadius="12px">
                Get Started
              </MyButton>
              <MyButton variant="outlined" size="large">
                Go Pro
              </MyButton>
            </Stack>
            <Box className={cls.reviews}>
              <img src={trustpilot} alt="Trustpilot" />
              <img className={cls.stars} src={stars} alt="Stars" />
              <Typography variant="body2">4900+</Typography>
            </Box>
          </Box>
          <Box className={cls.decor}>
            <img className={cls.food} src={food} alt="Food" />
            <Box className={cls.notification}>
              <Box className={cls.notificationItem}>
                <Box className={cls.notificationImg}>
                  <img src={notification} alt="Notification" />
                </Box>
                <Box className={cls.notificationInfo}>
                  <Typography variant="h6">Chicken Hell</Typography>
                  <Typography variant="body2">On The Way</Typography>
                  <Typography variant={"caption"}>3:09 PM</Typography>
                </Box>
              </Box>
            </Box>
            <Box className={cls.graph}>
              <Box className={cls.graphItem}>
                <img src={graph} alt="Graph" />
              </Box>
            </Box>
          </Box>
        </Container>
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
        <div className="container container-padding">
          <h2>
            Our Top <span>Dishes</span>
          </h2>
          <ul>
            <li>
              <div className={cls.img}>
                <img src={food_1} />
              </div>
              <div className={`${cls.tag} ${cls.yellow}`}>Healthy</div>
              <h3>Chicken Hell</h3>
              <div className={cls.info}>
                <div className={cls.time}>24min •</div>
                <div className={cls.raiting}>4.9</div>
              </div>
              <div className={cls.bottom}>
                <div className={cls.price}>
                  $12.<span>99</span>
                </div>
                <button>
                  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.2818 9.36025H8.94222V15.7891H6.41234V9.36025H0.102539V7.06848H6.41234V0.609863H8.94222V7.06848H15.2818V9.36025Z"></path>
                  </svg>
                </button>
              </div>
            </li>
            <li>
              <div className={cls.img}>
                <img src={food_2} />
              </div>
              <div className={`${cls.tag} ${cls.red}`}>Trending</div>
              <h3>Swe Dish</h3>
              <div className={cls.info}>
                <div className={cls.time}>34min •</div>
                <div className={cls.raiting}>4.9</div>
              </div>
              <div className={cls.bottom}>
                <div className={cls.price}>
                  $19.<span>99</span>
                </div>
                <button>
                  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.2818 9.36025H8.94222V15.7891H6.41234V9.36025H0.102539V7.06848H6.41234V0.609863H8.94222V7.06848H15.2818V9.36025Z"></path>
                  </svg>
                </button>
              </div>
            </li>
            <li>
              <div className={cls.img}>
                <img src={food_3} />
              </div>
              <div className={`${cls.tag} ${cls.green}`}>Supreme</div>
              <h3>Swe Dish</h3>
              <div className={cls.info}>
                <div className={cls.time}>34min •</div>
                <div className={cls.raiting}>4.9</div>
              </div>
              <div className={cls.bottom}>
                <div className={cls.price}>
                  $12.<span>99</span>
                </div>
                <button>
                  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.2818 9.36025H8.94222V15.7891H6.41234V9.36025H0.102539V7.06848H6.41234V0.609863H8.94222V7.06848H15.2818V9.36025Z"></path>
                  </svg>
                </button>
              </div>
            </li>
            <li>
              <div className={cls.img}>
                <img src={food_1} />
              </div>
              <div className={`${cls.tag} ${cls.yellow}`}>Healthy</div>
              <h3>Chicken Hell</h3>
              <div className={cls.info}>
                <div className={cls.time}>24min •</div>
                <div className={cls.raiting}>4.9</div>
              </div>
              <div className={cls.bottom}>
                <div className={cls.price}>
                  $12.<span>99</span>
                </div>
                <button>
                  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.2818 9.36025H8.94222V15.7891H6.41234V9.36025H0.102539V7.06848H6.41234V0.609863H8.94222V7.06848H15.2818V9.36025Z"></path>
                  </svg>
                </button>
              </div>
            </li>
            <li>
              <div className={cls.img}>
                <img src={food_2} />
              </div>
              <div className={`${cls.tag} ${cls.red}`}>Trending</div>
              <h3>Swe Dish</h3>
              <div className={cls.info}>
                <div className={cls.time}>34min •</div>
                <div className={cls.raiting}>4.9</div>
              </div>
              <div className={cls.bottom}>
                <div className={cls.price}>
                  $19.<span>99</span>
                </div>
                <button>
                  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.2818 9.36025H8.94222V15.7891H6.41234V9.36025H0.102539V7.06848H6.41234V0.609863H8.94222V7.06848H15.2818V9.36025Z"></path>
                  </svg>
                </button>
              </div>
            </li>
          </ul>
          <div className={cls.view}>
            <Link to={"/"}>
              View all
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
      <section className={cls.purchase}>
        <div
          className={`container container-padding ${cls.purchase_container}`}
        >
          <div className={cls.header}>
            <h2>
              Control <span>Purchases</span> <br /> Via Dashboard
            </h2>
            <ul>
              <li>
                <div className={cls.img}>
                  <img src={food_1} />
                </div>
                <div className={cls.info}>
                  <h3>Chicken Hell</h3>
                  <p>On The Way</p>
                  <div>3:09 PM</div>
                </div>
              </li>
              <li>
                <div className={cls.img}>
                  <img src={food_2} />
                </div>
                <div className={cls.info}>
                  <h3>Swe Dish</h3>
                  <p className={cls.delivered}>Delivered</p>
                  <div>Yesterday</div>
                </div>
              </li>
              <li>
                <div className={cls.img}>
                  <img src={food_3} />
                </div>
                <div className={cls.info}>
                  <h3>Fish Hell Veg</h3>
                  <p className={cls.cancelled}>Cancelled</p>
                  <div>Yesterday</div>
                </div>
              </li>
            </ul>
          </div>
          <div className={cls.purchaseGraph}>
            <div className={cls.header}>
              <h3>Purchases</h3>
              <select name="timeline">
                <option value="mounth">This month</option>
                <option value="week">This week</option>
                <option value="year">This year</option>
              </select>
            </div>
            <ul className={cls.info}>
              <li className={cls.graphPurple}>
                <div className={cls.wrapper}>
                  <span className={cls.graphIcon}></span>
                  <div className={cls.about}>
                    <h4>Expense</h4>
                    <p>Increased By 10%</p>
                  </div>
                </div>
                <div className={cls.price}>$409.00</div>
              </li>
              <li className={cls.graphYellow}>
                <div className={cls.wrapper}>
                  <span className={cls.graphIcon}></span>
                  <div className={cls.about}>
                    <h4>Vocher Usage</h4>
                    <p>Increased By 5%</p>
                  </div>
                </div>
                <div className={cls.price}>$45.78</div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Slider />
      <div className={cls.subscribe}>
        <div className="container">
          <div className={cls.wrapper}>
            <h2>Get 50%</h2>
            <form action="#">
              <input type="email" placeholder="Enter Your Email Address" />
              <div>
                <MyButton
                  variant={"contained"}
                  size={"medium"}
                  borderRadius={"11px"}
                >
                  SUBSCRIBE
                </MyButton>
              </div>
            </form>
          </div>
        </div>
      </div>
      <footer className={cls.footer}>
        <div className="container">
          <div className={cls.header}>
            <Link to={"/"}>
              <img src={logo} alt="" />
              <span>eatly</span>
            </Link>
            <ul>
              <li>
                <Link to={"/"}>Blog</Link>
              </li>
              <li>
                <Link to={"/"}>Pricing</Link>
              </li>
              <li>
                <Link to={"/"}>About Us</Link>
              </li>
              <li>
                <Link to={"/"}>Contacts</Link>
              </li>
            </ul>
          </div>
          <div className={cls.bottom}>
            <p>© 2024 EATLY All Rights Reserved.</p>
            <ul>
              <li>
                <Link to={"/"}>
                  <img src={vk} alt="" height={22} width={22} />
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <img src={vk} alt="" height={22} width={22} />
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <img src={vk} alt="" height={22} width={22} />
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <img src={vk} alt="" height={22} width={22} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
};
