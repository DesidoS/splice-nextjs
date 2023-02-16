import styles from "../styles/Navbar.module.scss";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const navigation = [
  { id: 1, title: "Login", path: "/login" },
  { id: 2, title: "Sign up", path: "/sign-up" },
];

const Auth = () => {
  const { pathname } = useRouter();

  return (
    <div className={styles.auth}>
      {navigation.map(({ id, title, path }) => (
        <Link
          key={id}
          href={path}
          className={`${styles.auth_item} ${
            pathname === path ? styles.active : null
          }`}
        >
          {title}
        </Link>
      ))}
    </div>
  );
};

export default Auth;