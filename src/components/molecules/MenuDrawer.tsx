import { memo, VFC } from "react";
import { Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay } from "@chakra-ui/react";

type Props = {
  onClose: () => void;
  isOpen: boolean;
  onClickTop: () => void;
  onClickM1: () => void;
  onClickKing: () => void;
  onClickR1: () => void;
};

export const MenuDrawer: VFC<Props> = memo((props) => {
  const { onClose, isOpen, onClickTop, onClickM1, onClickKing, onClickR1 } = props;
  return (
    <Drawer placement='left' size='xs' onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg='gray.100'>
            <Button w='100%' onClick={onClickTop}>TOP</Button>
            <Button w='100%' onClick={onClickM1}>M-1グランプリ</Button>
            <Button w='100%' onClick={onClickKing}>キングオブコント</Button>
            <Button w='100%' onClick={onClickR1}>R-1グランプリ</Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>

  )
});