import React from 'react';
import { Box, Button, Text, VStack } from '@chakra-ui/react';

const ErrorPage: React.FC = () => {
  const handleGoHome = () => {
    window.location.href = '/';
  };

  return (
    <Box textAlign="center" p={4} height="100vh" display="flex" alignItems="center" justifyContent="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Caminho em construção</Text>
        <Button colorScheme="teal" onClick={handleGoHome}>
          Voltar ao início
        </Button>
      </VStack>
    </Box>
  );
};

export default ErrorPage;
