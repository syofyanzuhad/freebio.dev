import type { NextPage } from "next";
import Head from "../components/Head";
import Footer from "../components/Footer";
import Avatar from "../components/Avatar";
import TextLink from "../components/TextLink";
import SocialLink from "../components/SocialLink";
import userData from "../data/default.json";
import GitHubButton from "react-github-btn";
import Navbar from "../components/Navbar";
import Offline from "../components/Offline";
import useOfflineStatus from "../hooks/useOfflineStatus";
import splitbee from "@splitbee/web";

splitbee.init()
const container = "md:container md:mx-auto lg:max-w-4xl px-4";

const name = userData.name;
const avatar_url = userData.avatar_url;
const description = userData.description;
const bio = userData.bio;
const socials = userData.socials;
const links = userData.links;
// console.log(userData);

const Home: NextPage = () => {
  const offlineStatus = useOfflineStatus();

  const container = "md:container md:mx-auto lg:max-w-4xl px-4";
  const mainClass = `bg-cover bg-center bg-no-repeat bg-fixed bg-[url('/neon.jpeg')] h-full min-h-screen text-[#CEEDFF]`;
  // let styleText = theme.styleText ?? "indigo";
  // switch (theme.style) {
	// 	case "shadow":
	// 		styleText = "shadow-link-s";
	// 		break;
	// 	case "gradient":
	// 		styleText = "bg-gradient-to-r from-green-400 to-blue-500";
	// 		break;
	// 	default:
	// 		styleText = `bg-${theme.styleColor}-500`;
	// 		break;
	// }
  const navClass = `bg-white bg-opacity-10 backdrop-blur-md backdrop-filter w-full rounded-full sticky top-10 z-10 transition-all duration-300 ease-in-out`;
	const textClass = `my-4 p-4 flex justify-center cursor-pointer items-center shadow-link-s backdrop-blur-3xl w-full min-h-12 opacity-80 rounded-full md:hover:-translate-y-0 md:hover:scale-110 duration-700 ease-in-out`;

  return (
    <div className={mainClass}>
      <Head
        title={`${name} | Bio Link`}
        description={`${description} | Free Bio Link`}
        keywords={`Freebio, ${name.split("")[0]}, ${name}, Instagram`}
        author={name}
        image={avatar_url}
      />

      <main className={container}>
        {offlineStatus && <Offline />}
        <section className="flex flex-col items-center pt-16">
          <Navbar name={name} username={name} backgroundColor="white" textColor="#CEEDFF" rounded="full" navClass={navClass} textClass={textClass} />
          <div className="mt-3">
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
              <GitHubButton
                href="https://github.com/syofyanzuhad/freebio.dev"
                data-color-scheme="no-preference: light; light: light; dark: dark;"
                data-icon="octicon-star"
                data-size="large"
                data-show-count="true"
                aria-label="Star syofyanzuhad/freebio.dev on GitHub"
              >
                Star
              </GitHubButton>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center my-5">
          {links?.map(({ id, title, href }) => (
            <TextLink key={id} title={title} href={href} textClass={textClass} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
