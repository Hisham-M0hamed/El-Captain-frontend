import React from "react";
import Navbar from "../../components/common/Navbar/Navbar";
import Footer from "../../components/common/Footer/Footer";
import styles from "./Home.module.css";
const Home = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <Footer />
    </div>
  );
};

export default Home;
