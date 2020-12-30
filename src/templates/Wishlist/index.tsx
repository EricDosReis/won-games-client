import Base from 'templates/Base';
import Container from 'components/Container';
import Section from 'components/Section';
import Grid from 'components/Grid';
import Heading from 'components/Heading';
import Divider from 'components/Divider';
import GameCard, { GameCardProps } from 'components/GameCard';
import { HighlightProps } from 'components/Highlight';
import Showcase from 'components/Showcase';
import Empty from 'components/Empty';

export type WishlistTemplateProps = {
  games?: GameCardProps[];
  recommendedGames: GameCardProps[];
  recommendedHighlight: HighlightProps;
};

const Wishlist = ({
  games = [],
  recommendedGames,
  recommendedHighlight,
}: WishlistTemplateProps) => (
  <Base>
    <Container>
      <Heading lineColor="secondary" lineLeft>
        Wishlist
      </Heading>

      <Section>
        {games.length ? (
          <Grid>
            {games.map((game, index) => (
              <GameCard key={`wishlist-${index}`} {...game} />
            ))}
          </Grid>
        ) : (
          <Empty
            title="Your wishlist is empty"
            description="Games added to your wishlist will appear here"
            hasLink
          />
        )}
      </Section>

      <Divider />

      <Showcase
        title="You may like these games"
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Container>
  </Base>
);

export default Wishlist;
