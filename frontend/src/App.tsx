import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Box, Button, Image, Text, VStack, HStack } from '@chakra-ui/react';
import questData from './assets/quests.json';
import { Quest, QuestData } from './types';
import ErrorPage from './ErrorPage';

const fetchQuest = (id: string, data: QuestData): Quest | null => {
  return data.quest[id] || null;
};

const QuestPage: React.FC<{ questId: string }> = ({ questId }) => {
  const navigate = useNavigate();
  const [currentQuest, setCurrentQuest] = useState<Quest | null>(fetchQuest(questId, questData as QuestData));

  React.useEffect(() => {
    const quest = fetchQuest(questId, questData as QuestData);
    if (quest === null) {
      navigate('/error');
    } else {
      setCurrentQuest(quest);
    }
  }, [questId]);

  if (!currentQuest) {
    return null;
  }

  const handleAnswerClick = (idCaminho: string) => {
    const quest = fetchQuest(idCaminho, questData as QuestData);
    if (quest === null) {
      navigate('/error');
    } else {
      setCurrentQuest(quest);
      navigate(`/quest/${idCaminho}`);
    }
  };

  const getImagePath = (imageName: string) => {
    return new URL(`./assets/images/${imageName}`, import.meta.url).href;
  };

  return (
    <Box
      height="100vh"
      width="100vw"
      backgroundImage={`url(${getImagePath(currentQuest.PlanoDeFundo)})`}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <VStack
        height="100%"
        justify="space-between"
        p={4}
        color="white"
        textShadow="1px 1px 2px black"
      >
        <Text fontSize="2xl" mt={4}>{currentQuest.TextoQuest}</Text>
        <HStack spacing={4} mb={4}>
          {Object.keys(currentQuest.Respostas).map((key) => {
            const resposta = currentQuest.Respostas[key];
            return (
              <Button
                key={key}
                onClick={() => handleAnswerClick(resposta.ID_Caminho)}
                colorScheme="teal"
                variant="solid"
              >
                {resposta.texto}
              </Button>
            );
          })}
        </HStack>
      </VStack>
    </Box>
  );
};

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<QuestPage questId="A000" />} />
      <Route path="/quest/:id" element={<QuestPage questId="A000" />} />
      <Route path="/error" element={<ErrorPage />} />
    </Routes>
  );
};

export default App;
