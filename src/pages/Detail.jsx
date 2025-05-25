import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import MOCK_DATA from '../data/mock';

const DetailContainer = styled.div`
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 2rem;
`;

const Card = styled.div`
  background: white;
  border-radius: 15px;
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
`;

const PokemonImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
  margin: 0 auto;
  display: block;
`;

const PokemonName = styled.h1`
  text-align: center;
  color: #333;
  margin: 1rem 0;
`;

const TypeContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  margin-bottom: 1rem;
`;

const Type = styled.span`
  background: #f0f0f0;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
`;

const Description = styled.p`
  color: #666;
  line-height: 1.6;
  text-align: center;
  margin: 1rem 0;
`;

const BackButton = styled.button`
  background: #ff6b6b;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 0.8rem 1.5rem;
  cursor: pointer;
  font-size: 1rem;
  display: block;
  margin: 1rem auto;

  &:hover {
    background: #ff5252;
  }
`;

function Detail() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const pokemonId = parseInt(searchParams.get('id'));
  
  const pokemon = MOCK_DATA.find((p) => p.id === pokemonId);

  if (!pokemon) {
    return (
      <DetailContainer>
        <Card>
          <h1>포켓몬을 찾을 수 없습니다.</h1>
          <BackButton onClick={() => navigate('/dex')}>뒤로 가기</BackButton>
        </Card>
      </DetailContainer>
    );
  }

  return (
    <DetailContainer>
      <Card>
        <PokemonImage src={pokemon.image} alt={pokemon.name} />
        <PokemonName>{pokemon.name}</PokemonName>
        <TypeContainer>
          {pokemon.types.map((type) => (
            <Type key={type}>{type}</Type>
          ))}
        </TypeContainer>
        <Description>{pokemon.description}</Description>
        <BackButton onClick={() => navigate('/dex')}>뒤로 가기</BackButton>
      </Card>
    </DetailContainer>
  );
}

export default Detail; 