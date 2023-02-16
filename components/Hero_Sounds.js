import Image from "next/image";
import styles from "../styles/Home.module.scss";

const Hero_Sounds = () => {
  return (
    <>
      <div
        style={{
          zIndex: -1,
          position: "fixed",
          width: "100vw",
          height: "100vh",
          marginLeft: "40%",
        }}
      >
        <Image
          // className="sound_img"
          object-fit="cover"
          src="/sounds_hero.png"
          // sizes="100vw"
          fill
          alt="hero"
        />
      </div>
      <div className={styles.hero_title_block}>
        <h1 className={styles.hero_title}>
          The world’s <br />
          best sample
          <br />
          library
        </h1>
        <p className={styles.hero_p}>
          Our premier catalog of royalty-free sounds
          <br />
          connects directly to your DAW with an
          <br />
          intuitive drag-and-drop experience. Try free
          <br />
          for 14 days.
        </p>
      </div>
    </>
  );
};

export default Hero_Sounds;
