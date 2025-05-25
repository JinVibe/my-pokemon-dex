import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  padding: 1.5rem 1rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PokemonImage = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 1rem;
`;

const Name = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #333
`;

const Number = styled.div`
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 0.5rem;
`;

const AddButton = styled.button`
  background: #e74c3c;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  margin-top: 1rem;
  cursor: pointer;
`;

function PokemonCard({ id, name, image, onAdd }) {
   console.log('PokemonCard props:', { id, name, image });
  return (
    <Card>
      <PokemonImage src={image} alt={name} />
      <Name>{name}</Name>
      <Number>No. {String(id).padStart(3, '0')}</Number>
      <AddButton onClick={() => onAdd(id)}>추가</AddButton>
    </Card>
  );
}

export default PokemonCard;