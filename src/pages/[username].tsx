import Head from "../components/Head";
import Footer from "../components/Footer";
import Avatar from "../components/Avatar";
import TextLink from "../components/TextLink";
import SocialLink from "../components/SocialLink";
import { getAllUsers, getByUsername, getUserTheme } from "../utils/api";
import Navbar from "../components/Navbar";
// import defaultTheme from "../themes/my-theme.json";

export default function UserBio({ user }: any) {
  const { theme, username, name, avatar_url, bio, description, socials, links } = user;
  // console.log(theme, "theme");

  const container = "md:container md:mx-auto lg:max-w-4xl px-4";
  const mainClass = `bg-cover bg-center bg-no-repeat bg-fixed bg-[url('${theme.background ?? theme.backgroundUrl}')] h-full min-h-screen text-[${theme.textColor ?? '#CEEDFF'}]`;
  let styleText = theme.styleText ?? "indigo";
  switch (theme.style) {
		case "shadow":
			styleText = "shadow-link-s";
			break;
		case "gradient":
			styleText = "bg-gradient-to-r from-green-400 to-blue-500";
			break;
		default:
			styleText = `bg-${theme.styleColor}-500`;
			break;
	}
  const navClass = `bg-${theme.backgroundColor} bg-opacity-10 backdrop-blur-md backdrop-filter w-full rounded-${theme.rounded} sticky top-10 z-10 transition-all duration-300 ease-in-out`;
	const textClass = `my-4 p-4 flex justify-center cursor-pointer items-center ${styleText} backdrop-blur-3xl w-full min-h-12 opacity-80 rounded-${theme.rounded} md:hover:-translate-y-0 md:hover:scale-110 duration-700 ease-in-out`;

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
        <section className="flex flex-col items-center pt-16">
          <Navbar name={name} username={username} backgroundColor={theme.backgroundColor} textColor={theme.textColor} rounded={theme.rounded} navClass={navClass} textClass={textClass} />
          <div className="mt-3">
            <Avatar url={avatar_url} alt="avatar" />
          </div>
          <h1 className="uppercase tracking-wide font-bold">{name}</h1>
          <p>{bio}</p>
          <div className="flex gap-2 mt-2 items-center">
            <SocialLink
              key="gh"
              icon="gh"
              href={`https://github.com/${username}`}
            />
            {socials?.map(({ icon, href }: any) => (
              <SocialLink key={icon} icon={icon} href={href} />
            ))}
          </div>
        </section>
        <section className="flex flex-col items-center my-5">
          {links?.map(({ id, title, href }: any) => (
            <TextLink key={id} title={title} href={href} textClass={textClass} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps({ params }: any) {
  let user = getByUsername(params.username, [
    "theme",
    "username",
    "name",
    "bio",
    "description",
    "avatar_url",
    "socials",
    "links",
  ]);
  // console.log(user, "user");

  // get theme json from file
  user.theme = getUserTheme(user.theme);
  // console.log(user.theme, "userTheme");


  if (!user?.name) return {};
  return {
    props: { user },
  };
}

export async function getStaticPaths() {
  const users = getAllUsers(["username"]);
  // console.log(users, "users");

  return {
    paths: users.map((user) => {
      return {
        params: { ...user },
      };
    }),
    fallback: false,
  };
}
