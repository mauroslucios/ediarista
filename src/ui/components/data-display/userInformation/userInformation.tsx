import React from 'react';
import {
  UserInformtionContainer,
  UserName,
  UserDescription,
  AvatarStyled,
  RatingStyled,
} from './userInformation.style';

interface UserInformationProps {
  picture: string;
  name: string;
  rating: number;
  description?: string;
}

const UserInformation: React.FC<UserInformationProps> = ({
  name,
  picture,
  rating,
  description,
}) => {
  return (
    <UserInformtionContainer>
      <AvatarStyled src={picture}>{name[0]}</AvatarStyled>
      <UserName>{name}</UserName>
      <RatingStyled readOnly value={rating} />
      <UserDescription>{description}</UserDescription>
    </UserInformtionContainer>
  );
};

export default UserInformation;
