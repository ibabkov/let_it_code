import Head from 'next/head'
import Layout from '../../components/layout/layout'
import Demo from '../../components/demo/demo';

export default function DemoPage({ userAgent }) {
  return (
    <Layout>
      <Head>
        <title>
          Demo page
        </title>
      </Head>
      <Demo userAgent={userAgent} />
    </Layout>
  )
}

DemoPage.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  // console.log(pathname, query, asPath, req, res, err);

  return { userAgent }
};
