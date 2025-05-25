import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100vw;
  background-color: #ffe4b8;
`;

const Logo = styled.img`
  width: 600px;
  height: 200px;
  object-fit: contain;
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
  margin-top: 2rem;

  &:hover {
    background-color: #ff5252;
  }
`;

function Home() {
  const navigate = useNavigate();

  return (
    <HomeContainer>
      <Logo src="https://react-w2-proj.vercel.app/assets/landingPageLogo-RN0wntMB.png" alt="Pokemon Logo" />
      <StartButton onClick={() => navigate('/dex')}>
        포켓몬 도감 시작하기
      </StartButton>
    </HomeContainer>
  );
}

export default Home;