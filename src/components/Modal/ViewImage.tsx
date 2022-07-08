import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
        <ModalContent maxW="900px">
          <ModalBody bg='pGray.900'>
            <Image src={imgUrl}
          alt=''
          maxH="600px"
          objectFit="cover"
          />
          </ModalBody>
          <ModalFooter bg='pGray.800' justifyContent="flex-start">
            <Link href={imgUrl} isExternal>
            Abrir original
            </Link>
          </ModalFooter>
        </ModalContent>
    </Modal>
  );
}
