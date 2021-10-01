import { ChakraProvider } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';

import { Router } from './router/Router';
import theme from './theme/theme';

export default function App() {
  return (
    <>
    <Helmet>
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


