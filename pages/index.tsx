import { GetStaticProps } from "next";
import Head from "next/head";
import { FC } from "react";

import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData, Post } from "../lib/posts";
import utilStyles from "../styles/utils.module.css";

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return { props: { allPostsData } };
};

const Home: FC<{ allPostsData: Post[] }> = ({ allPostsData }) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa a
          ducimus ut expedita atque numquam quam ea fugit necessitatibus
          perspiciatis?
        </p>

        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default Home;
