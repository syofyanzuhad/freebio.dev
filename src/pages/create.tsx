import { NextApiRequest, NextApiResponse, NextPage } from "next";
import Head from "next/head";
// import connectToDatabase from "../mongodb";
// import { COLLECTION_NAMES } from "../types";

export async function getServerSideProps(request: NextApiRequest) {
  const hash = request.query.hash as string;
  // const database = await connectToDatabase();
  // const campaign = await database
  //   .collection(COLLECTION_NAMES["url-info"])
  //   .findOne({ uid: hash });

  // if (campaign) {
    return {
      redirect: {
        destination:
          "https://github.com/syofyanzuhad/freebio.dev#getting-started",
        permanent: false,
      },
    };
  // }

  // return {
  //   props: {},
  // };
}

const HashPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Freebio Dev</title>
        <meta name="description" content="Create your own bio link page" />
      </Head>
      <h1>Requested link not found</h1>
    </div>
  );
};

export default HashPage;
