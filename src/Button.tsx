import styled from '@emotion/styled';
import { ButtonHTMLAttributes } from 'react';
interface IButtonProps {
  text: string;
  bgColor: string;
  onCustomClick?: (val: { someData: string }) => void;
}

const StyledButton = styled.button<{ $bgColor: string }>`
  color: ${(props) => props.$bgColor};
  &:hover {
    background-color: blue;
  }
`;


export const CustomButton = ({ text, bgColor, onCustomClick, ...rest }: IButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
  const handleClick = () => {
    if (onCustomClick) {
      onCustomClick({ someData: '123' });
    }
    // onCustomClick && onCustomClick({ someData: '123' });
  }
  return (
    <StyledButton $bgColor={bgColor} onClick={handleClick} {...rest}>
      {text}
    </StyledButton>
  );
};