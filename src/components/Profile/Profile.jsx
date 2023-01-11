import PropTypes from 'prop-types';
import { Container, DescBox, ImgAvatar, Label, Quantity, StatsItem, StatsList, Tag, UserName, Location } from './Profile.styled';

export const Profile = ({
  user: {
    avatar,
    username,
    tag,
    location,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <Container>
      <DescBox>
        <ImgAvatar src={avatar} alt="User avatar"/>
        <UserName>{username}</UserName>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </DescBox>

      <StatsList>
        <StatsItem>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </StatsItem>
      </StatsList>
    </Container>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};
