import { useState } from 'react';
import * as S from './styles';

export type DropdownProps = {
  title: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
};

const Dropdown = ({ title, size = 'md', children }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Wrapper isOpen={isOpen} size={size}>
      <S.Title role="button" onClick={() => setIsOpen(!isOpen)}>
        {title}
      </S.Title>

      <S.Content aria-hidden={!isOpen}>{children}</S.Content>
    </S.Wrapper>
  );
};

export default Dropdown;
