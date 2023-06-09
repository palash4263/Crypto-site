import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import btcSrc from "../assets/btc.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box
      bgColor="blackAlpha.900"
      w="full"
      h="85vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <motion.div
        style={{
          width: "300px",
          height: "300px",
          marginBottom: "2rem",
          perspective: "500px",
        }}
      >
        <motion.div
          style={{
            width: "100%",
            height: "100%",
            rotateX: "30deg",
            rotateY: "-30deg",
          }}
          animate={{
            rotateX: "0deg",
            rotateY: "0deg",
            rotateZ: "360deg",
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.img
            src={btcSrc}
            alt="Bitcoin"
            w="full"
            h="full"
            objectFit="contain"
            filter="grayscale(1)"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <Text
          fontSize="6xl"
          textAlign="center"
          fontWeight="thin"
          color="whiteAlpha.700"
          mt="-20"
        >
          X - Crypto
        </Text>

        <Text
          fontSize="xl"
          textAlign="center"
          fontWeight="thin"
          color="whiteAlpha.700"
          mt="2rem"
        >
          Welcome to the world of cryptocurrencies!
        </Text>
      </motion.div>
    </Box>
  );
};

export default Home;
