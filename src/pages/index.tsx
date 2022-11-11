import type { NextPage } from "next";
import Head from "next/head";
import Avatar from "../components/Avatar";
import Image from "next/image";
import TextLink from "../components/TextLink";
import SocialLink from "../components/SocialLink";
import Link from "next/link";
import userData from "../data/syofyanzuhad.json";

const container = "md:container md:mx-auto lg:max-w-4xl px-4";

const name = userData.name;
const imgURL = userData.avatar_url;
const description = userData.description;

// const getLinkById = (id: string) => {
//   	return userData?.links.find(({ id: itemId }) => itemId === id)?.href ?? "";
// };

const Home: NextPage = () => {
  return (
    <div className="bg-cover bg-center bg-no-repeat bg-fixed bg-[url('/neon.jpeg')] h-full min-h-screen text-[#CEEDFF]">
      <Head>
        <title>{name} | Bio Link</title>
        <meta name="description" content={`${description} | Free Bio Link`} />
        <meta
          name="keywords"
          content={`Freebio, ${name.split("")[0]}, ${name}, Instagram`}
        />
        <meta name="author" content={name} />
        <meta property="og:image" content={imgURL} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={container}>
        <section className="flex flex-col items-center pt-16">
          <div>
            <Avatar url={imgURL} alt="" />
          </div>
          <h1 className="uppercase tracking-wide">{name}</h1>
          <div className="flex gap-2 mt-2 items-center">
            {userData.socials?.map(({ id, ...rest }) => (
              <SocialLink key={id} {...rest} />
            ))}
          </div>
        </section>
        <section className="flex flex-col items-center my-8">
          {userData.links?.map(({ id, ...rest }) => (
            <TextLink key={id} {...rest} />
          ))}
        </section>
      </main>
      <footer>
        <div className="p-4 flex justify-center items-center gap-2">
          <span className="flex items-center gap-2">Made By</span>
          <Link href="https://www.linkedin.com/in/syofyan-zuhad/" passHref>
            <a
              className="text-sky-500 cursor-pointer hover:-translate-y-0 hover:scale-110 duration-700 ease-in-out"
              target="_blank"
            >
              <Image
                src="/bio-512x512.png"
                alt="FreeBio"
                width={24}
                height={24}
              />
            </a>
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Home;
