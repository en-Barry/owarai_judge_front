import { memo, VFC } from 'react';
import { Button } from '@chakra-ui/react';
import { FaTwitter } from 'react-icons/fa';
import { TwitterShareButton } from 'react-share';

type Props = {
  text: string;
}

export const TwitterButton: VFC<Props> = memo((props) => {
  const { text } = props;
  return (
    <TwitterShareButton url={'https://www.owarai-judge.com'} title={'\n\nお笑い賞レースの審査員になりきろう！\n#M1グランプリ\n#キングオブコント\n#R1グランプリ'}>
      <Button colorScheme="twitter" leftIcon={<FaTwitter />} mb={6}>{text}</Button>
    </TwitterShareButton>
  )
});