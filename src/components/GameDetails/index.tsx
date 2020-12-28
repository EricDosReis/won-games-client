import { Windows, Linux, Apple } from '@styled-icons/fa-brands';

import Heading from 'components/Heading';
import MediaMatch from 'components/MediaMatch';

import * as S from './styles';

type Platform = 'windows' | 'linux' | 'mac';

type Rating = 'BR0' | 'BR10' | 'BR12' | 'BR14' | 'BR16' | 'BR18';

export type GameDetailsProps = {
  developer: string;
  releaseDate: string;
  publisher: string;
  rating: Rating;
  genres: string[];
  platforms: Platform[];
};

const GameDetails = ({
  developer,
  releaseDate,
  publisher,
  rating,
  genres,
  platforms,
}: GameDetailsProps) => {
  const platformIcons = {
    windows: <Windows title="Windows" size={18} />,
    linux: <Linux title="Linux" size={18} />,
    mac: <Apple title="Mac" size={18} />,
  };

  return (
    <S.Wrapper>
      <MediaMatch greaterThan="small">
        <Heading lineColor="secondary" lineLeft>
          Game Details
        </Heading>
      </MediaMatch>

      <S.Content>
        <div>
          <S.Label>Developer</S.Label>
          <S.Description>{developer}</S.Description>
        </div>

        <div>
          <S.Label>Release Date</S.Label>
          <S.Description>
            {new Intl.DateTimeFormat('en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            }).format(new Date(releaseDate))}
          </S.Description>
        </div>

        <div>
          <S.Label>Platforms</S.Label>

          <S.IconsWrapper>
            {platforms.map((icon: Platform) => (
              <S.Icon key={icon}>{platformIcons[icon]}</S.Icon>
            ))}
          </S.IconsWrapper>
        </div>

        <div>
          <S.Label>Publisher</S.Label>
          <S.Description>{publisher}</S.Description>
        </div>

        <div>
          <S.Label>Rating</S.Label>
          <S.Description>
            {rating === 'BR0' ? 'FREE' : `${rating.replace('BR', '')}+`}
          </S.Description>
        </div>

        <div>
          <S.Label>Genres</S.Label>
          <S.Description>{genres.join(' / ')}</S.Description>
        </div>
      </S.Content>
    </S.Wrapper>
  );
};

export default GameDetails;
