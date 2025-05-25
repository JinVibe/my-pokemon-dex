import React from 'react';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  background: white;
  border-radius: 20px;
  margin: 2.5rem auto 2rem auto;
  padding: 2.5rem 2rem;
  max-width: 1200px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
`;

const PokeballSlots = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

const PokeballImg = styled.img`
  width: 70px;
  height: 70px;
  opacity: 0.7;
  border: 2px dashed #ccc;
  border-radius: 50%;
  background: #fff;
`;

function Dashboard({ selectedPokemons }) {
  const emptySlots = 6 - selectedPokemons.length;
  return (
    <DashboardContainer>
      <PokeballSlots>
        {selectedPokemons.map((pokemon) => (
          <PokeballImg
            key={pokemon.id}
            src={pokemon.img_url}
            alt={pokemon.korean_name}
            style={{ border: 'none', opacity: 1, background: '#fff' }}
          />
        ))}
        {[...Array(emptySlots)].map((_, idx) => (
          <PokeballImg
            key={idx}
            src="https://react-6-pokemon.vercel.app/assets/pokeball-13iwdk7Y.png"
            alt="빈 슬롯"
          />
        ))}
      </PokeballSlots>
    </DashboardContainer>
  );
}

export default Dashboard; 