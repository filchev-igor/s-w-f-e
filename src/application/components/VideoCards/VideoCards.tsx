import VideoCard from "./VideoCard.tsx";

const VideoCards = () => {
  return (
    <div>
      <VideoCard isLoading />
      <VideoCard isLoading />
      <VideoCard
        cardHeaderAvatarAlt={"Ted talk"}
        cardHeaderAvatarSrc={
          "https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
        }
        cardHeaderTitle={"Ted"}
        cardHeaderSubTitle={"5 hours ago"}
        cardMediaImage={
          "https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512"
        }
        cardMediaAlt={"Nicola Sturgeon on a TED talk stage"}
        cardContentText={
          "Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure of a country's success:"
        }
      />
    </div>
  );
};

export default VideoCards;
