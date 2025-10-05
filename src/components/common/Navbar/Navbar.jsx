import React from "react";
import styles from "./Navbar.module.css";
import { FaArrowDown } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaravan } from "react-icons/fa";
import { BsList } from "react-icons/bs";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Close } from "@mui/icons-material";
import Navbarlg from "./Navbarlg";

const Navbar = () => {
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <Box sx={{ bgcolor: "#0c1b33" }}>
      <Container dir="rtl" className={styles.containerNav}>
        {useMediaQuery("(min-width:1100px)") && (
          <div className={styles.logo}>
            <h1>الكابتن</h1>

            <div className={styles.categories}>
              <div
                style={{
                  display: "flex",
                  gap: "10",
                  marginRight: "20px",
                  marginLeft: "10px",
                }}
              >
                <h3>منتجاتنا</h3>
                <div>
                  <FaArrowDown
                    style={{
                      fontSize: "13px",
                      marginRight: "7px",
                      marginTop: "8px",
                    }}
                  />
                </div>
              </div>
              <ul className={styles.ourCategories}>
                <li>مواد بناء</li>
                <li>صناعات كيمياوية</li>
                <li>صناعات دوائية</li>
                <li>صناعات هندسية</li>
              </ul>
            </div>
          </div>
        )}
        {useMediaQuery("(max-width:1100px)") && (
          <Box sx={{ marginRight: "20px" }}>
            <div className={styles.logo}>
              <div className={styles.categories}>
                <div
                  style={{
                    display: "flex",
                    gap: "10",
                    marginRight: "20px",
                    marginLeft: "10px",
                  }}
                >
                  <h3>منتجاتنا</h3>
                  <div>
                    <FaArrowDown
                      style={{
                        fontSize: "13px",
                        marginRight: "7px",
                        marginTop: "8px",
                      }}
                    />
                  </div>
                </div>
                <ul className={styles.ourCategories}>
                  <li>مواد بناء</li>
                  <li>صناعات كيمياوية</li>
                  <li>صناعات دوائية</li>
                  <li>صناعات هندسية</li>
                </ul>
              </div>
              <h1>الكابتن</h1>
            </div>
          </Box>
        )}
        {useMediaQuery("(min-width:1100px)") && <Navbarlg />}

        {useMediaQuery("(max-width:1100px)") && (
          <IconButton
            sx={{ color: "#f6f6f6", marginLeft: "20px" }}
            onClick={toggleDrawer("top", true)}
          >
            <MenuIcon />
          </IconButton>
        )}

        <Drawer
          anchor={"top"}
          open={state["top"]}
          onClose={toggleDrawer("top", false)}
          sx={{
            ".css-1vq2j8x-MuiPaper-root-MuiDrawer-paper": {
              height: "75%",
              bgcolor: "#0c1b33",
              color: "#f6f6f6",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "300px",
              mx: "auto",
              mt: "60px",
              position: "relative",
            }}
          >
            <IconButton
              sx={{
                ":hover": {
                  rotate: "180deg",
                  transition: "0.3s",
                  color: "red",
                },
                position: "absolute",
                top: "-10px",
                right: "-7px",
                color: "#fff",
              }}
            >
              <Close onClick={toggleDrawer("top", false)} />
            </IconButton>
            {[
              { link: "home", mainText: "الصفحة الرئيسية" },
              { link: "services", mainText: " خدمتنا" },
              { link: "about", mainText: "من نحن " },
              { link: "partner", mainText: "شركائنا" },
              { link: "contact", mainText: "اتصل بنا" },
            ].map((item, idx) => {
              return (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Link to={item.link}>
                    <Typography
                      key={idx}
                      sx={{
                        margin: "12px",
                        color: "#f6f6f6",
                        fontWeight: "700",
                        fontSize: "20",
                        ":hover": { color: "#f0a30b", cursor: "pointer" },
                      }}
                    >
                      {item.mainText}
                    </Typography>
                  </Link>
                </Box>
              );
            })}
            <Box sx={{ margin: "30px" }}>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
              >
                <IconButton
                  sx={{
                    fontSize: "25px",
                    color: "#fff",
                    ":hover": { color: "#f0a30b", cursor: "pointer" },
                  }}
                >
                  <FaCartShopping />
                </IconButton>
                <IconButton
                  sx={{
                    fontSize: "25px",
                    color: "#fff",
                    ":hover": { color: "#f0a30b", cursor: "pointer" },
                  }}
                >
                  <FaCaravan />
                </IconButton>
              </div>
              <Link to="/login">
                <Button
                  sx={{
                    padding: "10px 25px",
                    borderRadius: "15px",
                    border: "1px solid #f0a30b",
                    bgcolor: "initial",
                    fontSize: "20px",
                    color: " #f6f6f6",
                    "&:hover": { bgcolor: "#f0a30b", cursor: "pointer" },
                  }}
                >
                  تسجيل الدخول
                </Button>
              </Link>{" "}
            </Box>
          </Box>
        </Drawer>
        {/* <div>
        <nav>
          <ul>
            <li> <Link className={styles.links} to="/home">الصفحةالرئيسية</Link></li>
            <li><Link  className={styles.links} to="/services"> خدمتنا</Link></li>
            <li><Link className={styles.links} to="/about"> من نحن</Link> </li>
            <li><Link  className={styles.links} to="/partner"> شركائنا</Link></li>
            <li><Link className={styles.links} to="/contact">اتصل بنا</Link></li>
          </ul>
        </nav>
      </div> */}
        {/* ************************ */}
        {/* <div className={styles.login}>
          <div className={styles.icons}>
            <a>
              <FaCartShopping />
            </a>
            <a>
              <FaCaravan />
            </a>
          </div>
          <Link to="/login">
            <button>تسجيل الدخول</button>
          </Link>
        </div> */}
      </Container>
    </Box>
  );
};

export default Navbar;
