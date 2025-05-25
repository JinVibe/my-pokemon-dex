import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import MOCK_DATA from '../data/mock';

const DetailContainer = styled.div`
  min-height: 100vh;
  background-color: #ffe4b8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PokemonImage = styled.img`
  width: 180px;
  height: 180px;
  object-fit: contain;
  margin-bottom: 2rem;
`;

const PokemonName = styled.h1`
  color: #e74c3c;
  font-size: 2rem;
  margin-bottom: 1.2rem;
  text-align: center;
`;

const Type = styled.div`
  font-size: 1.1rem;
  color: #222;
  margin-bottom: 1.2rem;
  text-align: center;
`;

const Description = styled.p`
  color: #222;
  font-size: 1.1rem;
  line-height: 1.6;
  text-align: center;
  margin-bottom: 2rem;
`;

const BackButton = styled.button`
  background: #222;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.8rem 2.2rem;
  font-size: 1.1rem;
  cursor: pointer;
  margin: 0 auto;
  display: block;
  transition: background 0.2s;
  &:hover {
    background: #444;
  }
`;

function Detail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const pokemonId = parseInt(id);
  const pokemon = MOCK_DATA.find((p) => p.id === pokemonId);

  if (!pokemon) {
    return (
      <DetailContainer>
        <PokemonName>포켓몬을 찾을 수 없습니다.</PokemonName>
        <BackButton onClick={() => navigate('/dex')}>뒤로 가기</BackButton>
      </DetailContainer>
    );
  }

  return (
    <DetailContainer>
      <PokemonImage src={pokemon.img_url} alt={pokemon.korean_name} />
      <PokemonName>{pokemon.korean_name}</PokemonName>
      <Type>타입: {pokemon.types.join(', ')}</Type>
      <Description>{pokemon.description}</Description>
      <BackButton onClick={() => navigate('/dex')}>뒤로 가기</BackButton>
    </DetailContainer>
  );
}

export default Detail; 