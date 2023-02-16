import Head from "next/head";
import Heading from "../components/Heading";
// import Socials from "../components/Socials";
import Hero from "../components/Hero";
import Hero_Sounds from "../components/Hero_Sounds";
import styles from "../styles/Home.module.scss";

export const getStaticProps = async () => {
  try {
    const response = await fetch(`http://localhost:3000/api/socials`);
    const data = await response.json();

    if (!data) {
      return {
        notFound: true,
      };
    }

    return {
      props: { socials: data },
    };
  } catch {
    return {
      props: { socials: null },
    };
  }
};

const Home = ({ socials }) => (
  <div className={styles.wrapper}>
    <Head>
      <title>Splice</title>
    </Head>
    {/* <Socials socials={socials} /> */}
    <Hero />
  </div>
);

export default Home;

// // import Image from "next/image";
// import styles from "@/styles/Home.module.scss";
// import Head from "next/head";
// import { Inter } from "@next/font/google";
// import Heading from "components/Heading";

// const inter = Inter({ subsets: ["latin"] });

// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>Home</title>
//         <meta name="description" content="Generated by create next app" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/favicon.ico" />
//         <link
//           href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap"
//           rel="stylesheet"
//         />
//       </Head>
//       <div className={styles.wrapper}>
//         <Heading text="NEXT" />
//       </div>
//     </>
//   );
// }

// <main className={styles.main}>
//   <div className={styles.description}>
//     <p>
//       Get started by editing&nbsp;
//       <code className={styles.code}>pages/index.js</code>
//     </p>
//     <div>
//       <a
//         href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         By{' '}
//         <Image
//           src="/vercel.svg"
//           alt="Vercel Logo"
//           className={styles.vercelLogo}
//           width={100}
//           height={24}
//           priority
//         />
//       </a>
//     </div>
//   </div>

//   <div className={styles.center}>
//     <Image
//       className={styles.logo}
//       src="/next.svg"
//       alt="Next.js Logo"
//       width={180}
//       height={37}
//       priority
//     />
//     <div className={styles.thirteen}>
//       <Image
//         src="/thirteen.svg"
//         alt="13"
//         width={40}
//         height={31}
//         priority
//       />
//     </div>
//   </div>

//   <div className={styles.grid}>
//     <a
//       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//       className={styles.card}
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <h2 className={inter.className}>
//         Docs <span>-&gt;</span>
//       </h2>
//       <p className={inter.className}>
//         Find in-depth information about Next.js features and&nbsp;API.
//       </p>
//     </a>

//     <a
//       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//       className={styles.card}
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <h2 className={inter.className}>
//         Learn <span>-&gt;</span>
//       </h2>
//       <p className={inter.className}>
//         Learn about Next.js in an interactive course with&nbsp;quizzes!
//       </p>
//     </a>

//     <a
//       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//       className={styles.card}
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <h2 className={inter.className}>
//         Templates <span>-&gt;</span>
//       </h2>
//       <p className={inter.className}>
//         Discover and deploy boilerplate example Next.js&nbsp;projects.
//       </p>
//     </a>

//     <a
//       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//       className={styles.card}
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <h2 className={inter.className}>
//         Deploy <span>-&gt;</span>
//       </h2>
//       <p className={inter.className}>
//         Instantly deploy your Next.js site to a shareable URL
//         with&nbsp;Vercel.
//       </p>
//     </a>
//   </div>
// </main>