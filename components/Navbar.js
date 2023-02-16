import styles from "../styles/Navbar.module.scss";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";

const navigation = [
  { id: 1, title: "Sounds", path: "/sounds" },
  { id: 2, title: "Skills", path: "/skills" },
  { id: 3, title: "Plugins", path: "/plugins" },
  { id: 4, title: "Studio", path: "/studio" },
  { id: 5, title: "Community", path: "/community" },
  { id: 6, title: "Blog", path: "/blog" },
  { id: 7, title: "Pricing", path: "/pricing" },
];

const Navbar = () => {
  const { pathname } = useRouter();

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link href="/" className="logo">
          <Image src="/IMAGE.png" width={97} height={30} alt="logo" />
        </Link>
      </div>
      <div className={styles.links}>
        {navigation.map(({ id, title, path }) => (
          <Link
            key={id}
            href={path}
            className={`${styles.link_item} ${
              pathname === path ? styles.active : null
            }`}
          >
            {title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
