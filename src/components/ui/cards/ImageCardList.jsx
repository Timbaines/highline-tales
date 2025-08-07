import ImageCard from '@/components/ui/cards/ImageCard.jsx';

export default function ImageCardList({
      items,
      contentType
  }) {
    return (
        <>
            {items.map(item => (
                <ImageCard
                    key={item.id}
                    item={item}
                    contentType={contentType}
                />
            ))}
        </>
    );
}



