import type { NextPage } from "next";
import Head from "../components/Head";
import Footer from "../components/Footer";
import Avatar from "../components/Avatar";
import TextLink from "../components/TextLink";
import SocialLink from "../components/SocialLink";
import userData from "../data/default.json";
import GitHubButton from "react-github-btn";

const container = "md:container md:mx-auto lg:max-w-4xl px-4";

const name = userData.name;
const avatar_url = userData.avatar_url;
const description = userData.description;
const bio = userData.bio;
const socials = userData.socials;
const links = userData.links;
// console.log(userData);

const Home: NextPage = () => {
  return (
    <div className="bg-cover bg-center bg-no-repeat bg-fixed bg-[url('/neon.jpeg')] h-full min-h-screen text-[#CEEDFF]">
      <Head
        title={`${name} | Bio Link`}
        description={`${description} | Free Bio Link`}
        keywords={`Freebio, ${name.split("")[0]}, ${name}, Instagram`}
        author={name}
        image={avatar_url}
      />

      <main className={container}>
        <section className="flex flex-col items-center pt-16">
          <div>
            <Avatar url={avatar_url} alt="avatar" />
          </div>
          <h1 className="uppercase tracking-wide font-bold">{name}</h1>
          <p>{bio}</p>
          <div className="flex gap-2 mt-2 items-center justify-center flex-wrap align-middle">
            {socials?.map(({ icon, href }) => (
              <SocialLink key={icon} icon={icon} href={href} />
            ))}
            {/* <!-- Place this tag where you want the button to render. --> */}
            <div className="mt-2">
            <GitHubButton href="https://github.com/syofyanzuhad/freebio.dev" data-color-scheme="no-preference: light; light: light; dark: dark;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star syofyanzuhad/freebio.dev on GitHub">Star</GitHubButton>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center my-8">
          {links?.map(({ id, title, href }) => (
            <TextLink key={id} title={title} href={href} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
