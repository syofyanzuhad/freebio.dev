import Head from "next/head";

const Avatar = ({
  title,
  description,
  keywords,
  author,
  image,
}: {
  title: string;
  description: string;
  keywords: string;
  author: string;
  image: string;
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta property="og:image" content={image} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Avatar;
