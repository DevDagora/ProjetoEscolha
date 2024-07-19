import React, { useState } from 'react';
import { Box, Button, Image, Text, VStack, HStack } from '@chakra-ui/react';
import questData from './assets/quests.json';
import { Quest, QuestData } from './types';

const fetchQuest = (id: string, data: QuestData): Quest => {
  return data.quest[id];
};

function App() {
  const [currentQuest, setCurrentQuest] = useState<Quest>(fetchQuest('A000', questData as QuestData));

  const handleAnswerClick = (idCaminho: string) => {
    setCurrentQuest(fetchQuest(idCaminho, questData as QuestData));
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
}

export default App;
