import Heading from "./Heading";
import styles from "../styles/Navbar.module.scss";
import Link from "next/link";

const footerNavigation = [
  {
    id: 1,
    title: `© 2022 Splice.com All Rights Reserved`,
    path: "/",
  },
  { id: 2, title: "Terms of Use", path: "/" },
  { id: 3, title: "Privacy Policy", path: "/" },
  { id: 4, title: "Jobs", path: "/" },
  { id: 5, title: "Contact", path: "/" },
  { id: 6, title: "Help", path: "/" },
  { id: 7, title: "Facebook", path: "/" },
];

const Footer = () => {
  return (
    <>
      <footer>
        <div className={styles.nav}>
          <div className={styles.links}>
            {footerNavigation.map(({ id, title, path }) => (
              <Link key={id} href={path} className={styles.link_item}>
                {title}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
