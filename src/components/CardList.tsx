import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const {isOpen, onOpen,  onClose} = useDisclosure();
  const [imageURL, setImageURL] = useState('');

  const viewImageHandler = (url: string): void => {
    setImageURL(url)
    onOpen();
  }

  return (
    <>
      <SimpleGrid  spacing='40px' minChildWidth='180px' mb={4}>
        {cards.map(({id, ...cardContent}) => {
          return <Card key={id} data={cardContent} viewImage={viewImageHandler}/>
        })}
      </SimpleGrid>

      {isOpen && <ModalViewImage isOpen={isOpen} onClose={onClose} imgUrl={imageURL} />}
    </>
  );
}
