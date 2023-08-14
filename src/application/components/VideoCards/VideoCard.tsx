import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Skeleton from "@mui/material/Skeleton";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const VideoCard = ({
  isLoading = false,
  cardHeaderAvatarAlt,
  cardHeaderAvatarSrc,
  cardHeaderTitle,
  cardHeaderSubTitle,
  cardMediaImage,
  cardMediaAlt,
  cardContentText,
}: {
  isLoading?: boolean;
  cardHeaderAvatarAlt?: string;
  cardHeaderAvatarSrc?: string;
  cardHeaderTitle?: string;
  cardHeaderSubTitle?: string;
  cardMediaImage?: string;
  cardMediaAlt?: string;
  cardContentText?: string;
}) => (
  <Card sx={{ maxWidth: 345, m: 2, textAlign: "left" }}>
    <CardHeader
      avatar={
        isLoading ? (
          <Skeleton
            animation="wave"
            variant="circular"
            width={40}
            height={40}
          />
        ) : (
          <Avatar alt={cardHeaderAvatarAlt} src={cardHeaderAvatarSrc} />
        )
      }
      {...(!isLoading && {
        action: (
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        ),
      })}
      title={
        isLoading ? (
          <Skeleton
            animation="wave"
            height={10}
            width="80%"
            style={{ marginBottom: 6 }}
          />
        ) : (
          cardHeaderTitle
        )
      }
      subheader={
        isLoading ? (
          <Skeleton animation="wave" height={10} width="40%" />
        ) : (
          cardHeaderSubTitle
        )
      }
    />
    {isLoading ? (
      <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
    ) : (
      <CardMedia
        component="img"
        height="140"
        image={cardMediaImage}
        alt={cardMediaAlt}
      />
    )}
    <CardContent>
      {isLoading ? (
        <>
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} width="80%" />
        </>
      ) : (
        <Typography variant="body2" color="text.secondary" component="p">
          {cardContentText}
        </Typography>
      )}
    </CardContent>
  </Card>
);

export default VideoCard;
