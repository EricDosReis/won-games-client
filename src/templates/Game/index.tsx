import Base from 'templates/Base';
import Container from 'components/Container';
import Section from 'components/Section';
import GameInfo, { GameInfoProps } from 'components/GameInfo';
import GalleryImage, { GalleryImageProps } from 'components/Gallery';
import GameDetails, { GameDetailsProps } from 'components/GameDetails';
import { GameCardProps } from 'components/GameCard';
import { HighlightProps } from 'components/Highlight';
import TextContent from 'components/TextContent';
import Showcase from 'components/Showcase';

import * as S from './styles';
import Divider from 'components/Divider';

export type GameTemplateProps = {
  cover: string;
  gameInfo: GameInfoProps;
  gallery?: GalleryImageProps[];
  description: string;
  details: GameDetailsProps;
  upcomingGames: GameCardProps[];
  upcomingHighlight: HighlightProps;
  recommendedGames: GameCardProps[];
};

const Game = ({
  cover,
  gameInfo,
  gallery,
  description,
  details,
  upcomingGames,
  upcomingHighlight,
  recommendedGames,
}: GameTemplateProps) => (
  <Base>
    <S.Cover src={cover} role="img" aria-label="cover" />

    <S.Content>
      <Container>
        <Section>
          <GameInfo {...gameInfo} />
        </Section>

        {!!gallery && (
          <Section>
            <GalleryImage items={gallery} />
          </Section>
        )}

        <Section>
          <TextContent title="Description" content={description} />
        </Section>

        <Section>
          <GameDetails {...details} />
        </Section>

        <Divider />

        <Showcase
          title="Upcoming"
          games={upcomingGames}
          highlight={upcomingHighlight}
        />

        <Showcase title="You may like these games" games={recommendedGames} />
      </Container>
    </S.Content>
  </Base>
);

export default Game;
