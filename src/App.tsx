import { ChakraProvider } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';

import { Router } from './router/Router';
import theme from './theme/theme';

export default function App() {
  return (
    <>
    <Helmet
      title={'オワライジャッジ.com'}
      meta={[
        { name: 'description', content: 'お笑い賞レースの審査員アプリ' },
        { property: 'og:title', content: 'オワライジャッジ.com'},
        { property: 'og:url', content: 'https://www.owarai-judge.com' },
        { property: 'og:image', content: `${process.env.PUBLIC_URL}/owarai-judge-ogp.jpg` },
        { property: 'og:description', content: 'お笑い賞レースの審査員アプリ' },
        { name: 'twitter:card', content: 'summary' }
      ]}
      link={[
        { 'rel': 'icon', 'type': 'image/jpg', 'href': ''}
      ]}
      >
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-HF2N44QBLF"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-HF2N44QBLF');
        `}
      </script>
    </Helmet>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider> 
    </>
  );
}


