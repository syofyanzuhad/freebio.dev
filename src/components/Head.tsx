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

      <meta property="og:title" content={title} />
      <meta property="og:image" content={image} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://freebio.dev" />
      <meta property="og:image" content="https://freebio.dev/icons/icon-57x57.png" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content="https://freebio.dev" />
      <meta name="twitter:site" content="@syofyanzuhad" />
      <meta name="twitter:creator" content="@syofyanzuhad" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta name="theme-color" content="#010125" />
      <meta name="msapplication-TileColor" content="#010125" />
      <meta name="msapplication-TileImage" content="/icons/icon-144x144.png" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="application-name" content="FreeBio" />
      <meta name="apple-mobile-web-app-title" content="FreeBio" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="format-detection" content="telephone=no" />
      <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'/>

      <link rel="apple-touch-icon" sizes="57x57" href="/icons/icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/icons/icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/icons/icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/icons/icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/icons/icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/icons/icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/icons/icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/icons/icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/icons/icon-180x180.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/icons/icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/icons/icon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/icons/icon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/icons/icon-16x16.png" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#010125" />
      <link rel="shortcut icon" href="/icons/favicon.ico" />

      <link rel="apple-touch-icon" href="/icons/icon-57x57.png" />
      <link rel="icon" href="/icons/favicon.ico" />
    </Head>
  );
};

export default Avatar;
