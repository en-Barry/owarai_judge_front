import { memo, ReactNode, VFC } from 'react';
import { Button } from '@chakra-ui/react';

type Props = {
  children: ReactNode;
  loading?: boolean;
  onClick: () => void;
};

export const JudgementButton: VFC<Props> = memo((props) => {
  const { children, loading = false, onClick } = props;
  return (
    <Button w='80%' mt={4} mb={6} p={6} fontSize='lg' isLoading={loading} onClick={onClick}>{children}</Button>
  )
});