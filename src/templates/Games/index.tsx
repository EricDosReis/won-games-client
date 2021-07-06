import Base from 'templates/Base';
import Container from 'components/Container';
import Grid from 'components/Grid';
import GameCard, { GameCardProps } from 'components/GameCard';
import ExploreSidebar, {
  ExploreSiderbarItemProps,
} from 'components/ExploreSidebar';
import ShowMore from 'components/ShowMore';

export type GamesTemplateProps = {
  games?: GameCardProps[];
  filterItems: ExploreSiderbarItemProps[];
};

const Games = ({ filterItems, games = [] }: GamesTemplateProps) => {
  const handleFilter = () => {
    return;
  };

  const handleShowMore = () => {
    return;
  };

  return (
    <Base>
      <Container>
        <Grid sm={1} custom="26rem 1fr">
          <ExploreSidebar
            items={filterItems}
            onFilter={() => console.log('filter')}
          />

          <section>
            <Grid sm={1} md={2} columns={3}>
              {games.map(item => (
                <GameCard key={item.title} {...item} />
              ))}
            </Grid>

            <ShowMore onClick={handleShowMore} />
          </section>
        </Grid>
      </Container>
    </Base>
  );
};

export default Games;
