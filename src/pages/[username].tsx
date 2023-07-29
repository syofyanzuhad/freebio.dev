import Head from "../components/Head";
import Footer from "../components/Footer";
import Avatar from "../components/Avatar";
import TextLink from "../components/TextLink";
import SocialLink from "../components/SocialLink";
import { getAllUsers, getByUsername } from "../utils/api";
import Navbar from "../components/Navbar";

export default function UserBio({ user }: any) {
  const { username, name, avatar_url, bio, description, socials, links } = user;
  console.log(user);

  const container = "md:container md:mx-auto lg:max-w-4xl px-4";

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
          <Navbar name={name} username={username} />
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
            <TextLink key={id} title={title} href={href} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps({ params }: any) {
  const user = getByUsername(params.username, [
    "username",
    "name",
    "bio",
    "description",
    "avatar_url",
    "socials",
    "links",
  ]);

  if (!user?.name) return {};
  return {
    props: { user },
  };
}

export async function getStaticPaths() {
  const users = getAllUsers(["username"]);
  //   console.log(users, "users");

  return {
    paths: users.map((user) => {
      return {
        params: { ...user },
      };
    }),
    fallback: false,
  };
}
