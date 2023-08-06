import Head from 'next/head';

const AppScripts = () => {
  return (
    <Head>
      <title>공적인사적모임</title>
      <meta
        name="description"
        content="사적인 느슨한 연대로 국제개발협력 분야의 공적인 문제를 해결합니다."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:image" content="/images/meta_image.png" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff"></meta>
    </Head>
  );
};

export default AppScripts;
