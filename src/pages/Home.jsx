import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
`;

const StartButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1.2rem;
  background-color: #ff6b6b;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff5252;
  }
`;

function Home() {
  const navigate = useNavigate();

  return (
    <HomeContainer>
      <Title>포켓몬 도감</Title>
      <StartButton onClick={() => navigate('/dex')}>
        포켓몬 도감 시작하기
      </StartButton>
    </HomeContainer>
  );
}

export default Home; 