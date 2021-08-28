import { Button, ChakraProvider } from '@chakra-ui/react';
import theme from './theme/theme';

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <p>どの審査員になる？</p>
      <Button>ボタン</Button>
    </ChakraProvider> 
  );
}


