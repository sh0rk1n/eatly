import React from "react";
import { Link } from "react-router-dom";
import { Box, Container, Stack, Typography } from "@mui/material";
import { Slider } from "widgets/Slider";
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

export const HomePage = () => {
  /*const navigate = useNavigate();
  const { logout } = useAuthStore();

  const handleLogout = () => {
    AccessTokenService.remove();
    localStorage.removeItem("userName");
    logout();
    navigate("/login");
  };*/

  const featureItems = [
    {
      number: "10K+",
      text: "Satisfied Costumers \nAll Great Over The World",
    },
    {
      number: "4M",
      text: "Healthy Dishes Sold \nIncluding Milk Shakes Smooth",
    },
    {
      number: "99.99%",
      text: "Reliable Customer \nSupport We Provide Great Experiences",
    },
  ];

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
        <Container maxWidth="lg">
          <ul className={cls.list}>
            {featureItems.map((item, index) => (
              <li key={index}>
                <Typography variant="h3" className={cls.number}>
                  {item.number}
                </Typography>
                <Typography variant="body2" className={cls.text}>
                  {item.text}
                </Typography>
              </li>
            ))}
          </ul>
        </Container>
      </div>
      <section className={cls.download}>
        <Container
          maxWidth="lg"
          className={`container-padding ${cls.download_container}`}
        >
          <Box className={cls.image}>
            <img src={mobile} alt="" />
          </Box>
          <div className={cls.content}>
            <Typography variant="h2">
              Premium <span>Quality</span> For Your Health
            </Typography>
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
        </Container>
      </section>
      <section className={cls.restaurants}>
        <Container maxWidth="lg" className={`container-padding`}>
          <Typography variant="h2">
            Our Top <span>Restaurants</span>
          </Typography>
          <ul>
            <li className={cls.item}>
              <Box className={cls.res_img}>
                <img src={res_1} alt="" />
              </Box>
              <Box className={cls.info}>
                <Typography
                  variant="subtitle1"
                  className={`${cls.tag} ${cls.yellow}`}
                >
                  Healthy
                </Typography>
                <Typography variant="h3">The Chicken King</Typography>
                <Box className={cls.bottom}>
                  <Typography variant="body1" className={cls.time}>
                    24min •
                  </Typography>
                  <Typography variant="body2" className={cls.raiting}>
                    4.8
                  </Typography>
                  <button>
                    <img src={bookmark} alt="" />
                  </button>
                </Box>
              </Box>
            </li>
            <li className={cls.item}>
              <Box className={cls.res_img}>
                <img src={res_2} alt="" />
              </Box>
              <Box className={cls.info}>
                <Typography
                  variant="subtitle1"
                  className={`${cls.tag} ${cls.red}`}
                >
                  Trending
                </Typography>
                <Typography variant="h3">The Burger King</Typography>
                <Box className={cls.bottom}>
                  <Typography variant="body1" className={cls.time}>
                    24min •
                  </Typography>
                  <Typography variant="body2" className={cls.raiting}>
                    4.9
                  </Typography>
                  <button>
                    <img src={bookmark} alt="" />
                  </button>
                </Box>
              </Box>
            </li>
            <li className={cls.item}>
              <Box className={cls.res_img}>
                <img src={res_1} alt="" />
              </Box>
              <Box className={cls.info}>
                <Typography
                  variant="subtitle1"
                  className={`${cls.tag} ${cls.yellow}`}
                >
                  Healthy
                </Typography>
                <Typography variant="h3">The Chicken King</Typography>
                <Box className={cls.bottom}>
                  <Typography variant="body1" className={cls.time}>
                    24min •
                  </Typography>
                  <Typography variant="body2" className={cls.raiting}>
                    4.8
                  </Typography>
                  <button>
                    <img src={bookmark} alt="" />
                  </button>
                </Box>
              </Box>
            </li>
          </ul>
          <Box className={cls.view}>
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
          </Box>
        </Container>
      </section>
      <section className={cls.dishes}>
        <Container maxWidth="lg" className="container-padding">
          <Typography variant="h2">
            Our Top <span>Dishes</span>
          </Typography>
          <ul>
            <li>
              <Box className={cls.img}>
                <img src={food_1} />
              </Box>
              <Typography
                variant="subtitle1"
                className={`${cls.tag} ${cls.yellow}`}
              >
                Healthy
              </Typography>
              <Typography variant="h3">Chicken Hell</Typography>
              <Box className={cls.info}>
                <Typography variant="body1" className={cls.time}>
                  24min •
                </Typography>
                <Typography variant="body2" className={cls.raiting}>
                  4.9
                </Typography>
              </Box>
              <Box className={cls.bottom}>
                <Typography variant="body1" className={cls.price}>
                  $12.<span>99</span>
                </Typography>
                <button>
                  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.2818 9.36025H8.94222V15.7891H6.41234V9.36025H0.102539V7.06848H6.41234V0.609863H8.94222V7.06848H15.2818V9.36025Z"></path>
                  </svg>
                </button>
              </Box>
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
        </Container>
      </section>
      <section className={cls.purchase}>
        <Container
          maxWidth="lg"
          className={`container-padding ${cls.purchase_container}`}
        >
          <Box className={cls.header}>
            <Typography variant="h2">
              Control <span>Purchases</span> <br /> Via Dashboard
            </Typography>
            <ul>
              <li>
                <Box className={cls.img}>
                  <img src={food_1} />
                </Box>
                <Box className={cls.info}>
                  <Typography variant="h3">Chicken Hell</Typography>
                  <Typography variant="body1">On The Way</Typography>
                  <Typography variant="body2">3:09 PM</Typography>
                </Box>
              </li>
              <li>
                <Box className={cls.img}>
                  <img src={food_2} />
                </Box>
                <Box className={cls.info}>
                  <Typography variant="h3">Swe Dish</Typography>
                  <Typography variant="body1" className={cls.delivered}>
                    Delivered
                  </Typography>
                  <Typography variant="body2">Yesterday</Typography>
                </Box>
              </li>
              <li>
                <Box className={cls.img}>
                  <img src={food_3} />
                </Box>
                <Box className={cls.info}>
                  <Typography variant="h3">Fish Hell Veg</Typography>
                  <Typography variant="body1" className={cls.cancelled}>
                    Cancelled
                  </Typography>
                  <Typography variant="body2">Yesterday</Typography>
                </Box>
              </li>
            </ul>
          </Box>
          <Box className={cls.purchaseGraph}>
            <Box className={cls.header}>
              <Typography variant="h3">Purchases</Typography>
              <select name="timeline">
                <option value="mounth">This month</option>
                <option value="week">This week</option>
                <option value="year">This year</option>
              </select>
            </Box>
            <ul className={cls.info}>
              <li className={cls.graphPurple}>
                <Box className={cls.wrapper}>
                  <span className={cls.graphIcon}></span>
                  <Box className={cls.about}>
                    <Typography variant="h4">Expense</Typography>
                    <Typography variant="body1">Increased By 10%</Typography>
                  </Box>
                </Box>
                <Typography variant="body1" className={cls.price}>
                  $409.00
                </Typography>
              </li>
              <li className={cls.graphYellow}>
                <Box className={cls.wrapper}>
                  <span className={cls.graphIcon}></span>
                  <Box className={cls.about}>
                    <Typography variant="h4">Vocher Usage</Typography>
                    <Typography variant="body1">Increased By 5%</Typography>
                  </Box>
                </Box>
                <Typography variant="body1" className={cls.price}>
                  $45.78
                </Typography>
              </li>
            </ul>
          </Box>
        </Container>
      </section>
      <Slider />
      <div className={cls.subscribe}>
        <Container maxWidth="lg">
          <Box className={cls.wrapper}>
            <Typography variant="h2">Get 50%</Typography>
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
          </Box>
        </Container>
      </div>
      <footer className={cls.footer}>
        <Container maxWidth="lg">
          <Box className={cls.header}>
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
          </Box>
          <Box className={cls.bottom}>
            <Typography variant="body1">
              © 2024 EATLY All Rights Reserved.
            </Typography>
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
          </Box>
        </Container>
      </footer>
    </main>
  );
};
