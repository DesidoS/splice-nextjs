import Image from "next/image";
import styles from "../styles/Home.module.scss";

const Hero = () => {
  return (
    <>
      <div
        style={{
          zIndex: -1,
          position: "fixed",
          width: "100vw",
          height: "100vh",
        }}
      >
        <Image
          src="/hero.jpg"
          sizes="100vw"
          fill
          objectFit="cover"
          alt="hero"
        />
      </div>
      <div className={styles.hero_title_block}>
        <h1 className={styles.hero_title}>
          Step into the
          <br />
          producer’s
          <br />
          playground"
        </h1>
        <p className={styles.hero_p}>
          Explore the world’s best sample library and an
          <br />
          unmatched marketplace of plugins and DAWs.
        </p>
      </div>
    </>
  );
};

export default Hero;
