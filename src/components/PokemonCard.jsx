import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Card = styled.div`
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.12);
  padding: 2rem 1.5rem 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: box-shadow 0.2s;
  cursor: pointer;
  &:hover {
    box-shadow: 0 4px 16px rgba(0,0,0,0.18);
  }
`;

const PokemonImage = styled.img`
  width: 110px;
  height: 110px;
  object-fit: contain;
  margin-bottom: 1rem;
`;

const Name = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.7rem;
  color: #222;
`;

const Number = styled.div`
  font-size: 1rem;
  color: #888;
  margin-bottom: 1.2rem;
`;

const AddButton = styled.button`
  background: #e74c3c;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.6rem 2.2rem;
  font-size: 1.1rem;
  margin-top: 1rem;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #c0392b;
  }
`;

function PokemonCard({ id, name, image, onAdd }) {
  const navigate = useNavigate();

  const handleCardClick = (e) => {
    // 버튼 클릭 시에는 상세 이동 막기
    if (e.target.tagName === 'BUTTON') return;
    navigate(`/detail/${id}`);
  };

  return (
    <Card onClick={handleCardClick}>
      <PokemonImage src={image} alt={name} />
      <Name>{name}</Name>
      <Number>No. {String(id).padStart(3, '0')}</Number>
      <AddButton onClick={() => onAdd(id)}>추가</AddButton>
    </Card>
  );
}

export default PokemonCard; 