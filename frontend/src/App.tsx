import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import QuestPage from './QuestPage';
import ErrorPage from './ErrorPage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/ProjetoEscolha" />} />
      <Route path="/ProjetoEscolha" element={<QuestPage initialQuestId="A000" />} />
      <Route path="/ProjetoEscolha/error" element={<ErrorPage />} />
      <Route path="*" element={<Navigate to="/ProjetoEscolha" />} />
    </Routes>
  );
};

export default App;
