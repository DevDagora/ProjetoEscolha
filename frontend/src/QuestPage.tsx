import React, { useState, useEffect } from 'react';
import { Box, Button, Text, VStack, HStack } from '@chakra-ui/react';
import questData from './assets/quests.json';
import { Quest, QuestData } from './types';

const fetchQuest = (id: string, data: QuestData): Quest | null => {
  return data.quest[id] || null;
};

const QuestPage: React.FC<{ initialQuestId: string }> = ({ initialQuestId }) => {
  const [currentQuest, setCurrentQuest] = useState<Quest | null>(fetchQuest(initialQuestId, questData as QuestData));
  const [questHistory, setQuestHistory] = useState<string[]>([initialQuestId]);

  useEffect(() => {
    const quest = fetchQuest(initialQuestId, questData as QuestData);
    if (quest === null) {
      window.location.href = '/ProjetoEscolha/error';
    } else {
      setCurrentQuest(quest);
    }
  }, [initialQuestId]);

  const handleAnswerClick = (idCaminho: string) => {
    const quest = fetchQuest(idCaminho, questData as QuestData);
    if (quest === null) {
      window.location.href = '/ProjetoEscolha/error';
    } else {
      setCurrentQuest(quest);
      setQuestHistory([...questHistory, idCaminho]);
    }
  };

  const getImagePath = (imageName: string) => {
    return new URL(`./assets/images/${imageName}`, import.meta.url).href;
  };

  if (!currentQuest) {
    return null;
  }

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

export default QuestPage;
