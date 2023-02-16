import Image from "next/image";
import styles from "../styles/Home.module.scss";

const Heading = ({ teg, text }) => {
  const Title = teg || "h1";
  return (
    <>
      <Title>{text}</Title>
    </>
  );
};

export default Heading;
