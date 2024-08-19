import { Button, List } from "@mui/material";
import styles from "./style.module.css";
import Link from "next/link";
import { lists } from "./data";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import logo from "../../../public/logo.jpg";

const Navbar = () => {
  const user = false;
  return (
    <div className={styles.wrapper}>
      <nav className={styles.navbarContainer}>
        <Link href={"/"}>
          <h1 className={styles.logo}>
            <span className={styles.logoFirst}>Color</span>
            <span className={styles.logoSecond}>Space</span>
          </h1>
        </Link>

        <div className={styles.buttonContainer}>
          {/* <List className={styles.navList}>
            {lists.map((item, index) => (
              <li key={index}>
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </List> */}

          {!user ? (
            <>
              <Button variant="contained">Log In</Button>
              <Button variant="outlined">Sign Up</Button>
            </>
          ) : (
            <>
              <div className="flex items-center flex-col">
                <span>Yogi Maharaj</span>
              </div>
              <Image
                className={styles.logoImage}
                alt="Logo"
                height={40}
                width={40}
                src={logo}
              />
            </>
          )}
        </div>

        <div className={styles.iconContainer}>
          <MenuIcon fontSize="large" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
