import Link from 'next/link';
import {
  AddShoppingCart,
  Favorite,
  FavoriteBorder,
} from '@styled-icons/material-outlined';

import Button from 'components/Button';
import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon';
import * as S from './styles';

export type GameCardProps = {
  slug: string;
  title: string;
  developer: string;
  img: string;
  price: string;
  promotionalPrice?: string;
  ribbon?: React.ReactNode;
  ribbonColor?: RibbonColors;
  ribbonSize?: RibbonSizes;
  favorite?: boolean;
  onFavorite?: () => void;
};

const GameCard = ({
  slug,
  title,
  developer,
  img,
  price,
  promotionalPrice,
  ribbon,
  ribbonColor = 'primary',
  ribbonSize = 'small',
  favorite = false,
  onFavorite,
}: GameCardProps) => (
  <S.Wrapper>
    {!!ribbon && (
      <Ribbon color={ribbonColor} size={ribbonSize}>
        {ribbon}
      </Ribbon>
    )}

    <Link href={`game/${slug}`} passHref>
      <S.ImageBox>
        <img src={img} alt={title} />
      </S.ImageBox>
    </Link>

    <S.Content>
      <Link href={`game/${slug}`} passHref>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Developer>{developer}</S.Developer>
        </S.Info>
      </Link>

      <S.BuyBox>
        {!!promotionalPrice && <S.Price isPromotional>{price}</S.Price>}
        <S.Price>{promotionalPrice || price}</S.Price>

        <Button
          icon={<AddShoppingCart />}
          size="small"
          aria-label="Add to Cart"
        />
      </S.BuyBox>

      <S.FavoriteButton onClick={onFavorite}>
        {favorite ? (
          <Favorite aria-label="Remove from Wishlist" />
        ) : (
          <FavoriteBorder aria-label="Add to Wishlist" />
        )}
      </S.FavoriteButton>
    </S.Content>
  </S.Wrapper>
);

export default GameCard;
