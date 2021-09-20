import { memo, VFC } from 'react';
import { Button } from '@chakra-ui/react';
import { FaTwitter } from 'react-icons/fa';

type Props = {
  text: string;
}

export const TwitterButton: VFC<Props> = memo((props) => {
  const { text } = props;
  return (
    <Button colorScheme="twitter" leftIcon={<FaTwitter />} mb={6}>{text}</Button>
  )
});