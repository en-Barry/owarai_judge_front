import { memo, VFC } from "react";
import { Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay } from "@chakra-ui/react";

type Props = {
  onClose: () => void;
  isOpen: boolean;
}

export const MenuDrawer: VFC<Props> = memo((props) => {
  const { onClose, isOpen } = props;
  return (
    <Drawer placement='left' size='xs' onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg='gray.100'>
            <Button w='100%'>TOP</Button>
            <Button w='100%'>M-1グランプリ</Button>
            <Button w='100%'>キングオブコント</Button>
            <Button w='100%'>R-1グランプリ</Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>

  )
});