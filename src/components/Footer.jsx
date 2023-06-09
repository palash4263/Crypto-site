import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <Box
      bgColor="black"
      w="full"
      p="2rem"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.8, color: "#FF0000" }}
        animate={{ opacity: 1, y: 0, scale: 1, color: "#00FF00" }}
        transition={{
          delay: 0.5,
          duration: 1,
          type: "spring",
          stiffness: 100,
        }}
        whileHover={{
          scale: 1.1,
          color: "#FF00FF",
          rotate: [0, 5, -5, 0],
          transition: { duration: 0.5 },
        }}
        whileTap={{ scale: 0.9 }}
        drag
        dragElastic={0.1}
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      >
        <Text
          fontSize="lg"
          fontWeight="bold"
          color="#FFFF00"
          textAlign="center"
        >
          &copy; {new Date().getFullYear()} Palash. All rights reserved.
        </Text>
      </motion.div>
    </Box>
  );
};

export default Footer;
