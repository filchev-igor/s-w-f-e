import VideoCard from "./VideoCard.tsx";
import { VIDEO_CARDS } from "./constants.ts";

const VideoCards = () => {
  return VIDEO_CARDS.map((card) => (
    <VideoCard
      key={card.id}
      cardHeaderAvatarAlt={card.cardHeaderAvatarAlt}
      cardHeaderAvatarSrc={card.cardHeaderAvatarSrc}
      cardHeaderTitle={card.cardHeaderTitle}
      cardHeaderSubTitle={card.cardHeaderSubTitle}
      cardMediaImage={card.cardMediaImage}
      cardMediaAlt={card.cardMediaAlt}
      cardContentText={card.cardContentText}
    />
  ));
};

export default VideoCards;
