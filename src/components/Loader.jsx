import { VStack, Box, Spinner } from '@chakra-ui/react';
import React from 'react';

const Loader = () => {
  return (
    <VStack h="100vh" justifyContent="center">
      <Box transform="scale(3)">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="transparent"
          color="#00ff00"
          size="xl"
          style={{
            borderRadius: '50%',
            border: '4px solid #00ff00',
            borderTopColor: 'transparent',
            animation: 'spin 1s linear infinite',
          }}
        />
      </Box>
    </VStack>
  );
};

export default Loader;
