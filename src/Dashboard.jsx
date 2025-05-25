import React from 'react';

const Dashboard = ({ selected, onRemove }) => {
  return (
    <div>
      <h2>선택된 포켓몬</h2>
      {selected.map(p => (
        <div key={p.id}>
          <span>{p.name}</span>
          <button onClick={() => onRemove(p.id)}>삭제</button>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
