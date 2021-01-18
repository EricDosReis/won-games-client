import { Download } from '@styled-icons/boxicons-solid';
import Button from 'components/Button';

import * as S from './styles';

export type PaymentInfoProps = {
  number: string;
  flag: string;
  img: string;
  purchaseDate: string;
};

export type GameItemProps = {
  img: string;
  title: string;
  price: string;
  downloadLink?: string;
  paymentInfo?: PaymentInfoProps;
};

const GameItem = ({
  img,
  title,
  price,
  downloadLink,
  paymentInfo,
}: GameItemProps) => (
  <S.Wrapper>
    <S.GameContent>
      <S.ImageWrapper>
        <img src={img} alt={title} />
      </S.ImageWrapper>

      <S.GameInfo>
        <S.Title>
          {title}

          {!!downloadLink && (
            <S.DownloadWrapper>
              <Button
                icon={<Download size={22} />}
                size="small"
                as="a"
                href={downloadLink}
                target="_blank"
                aria-label={`Get ${title} here`}
              />
            </S.DownloadWrapper>
          )}
        </S.Title>

        <S.Price>{price}</S.Price>
      </S.GameInfo>
    </S.GameContent>

    {!!paymentInfo && (
      <S.PaymentContent>
        <p>{paymentInfo.purchaseDate}</p>

        <S.CardInfo>
          <span>{paymentInfo.number}</span>
          <img src={paymentInfo.img} alt={paymentInfo.flag} />
        </S.CardInfo>
      </S.PaymentContent>
    )}
  </S.Wrapper>
);

export default GameItem;
