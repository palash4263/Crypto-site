import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from '../index';
import { Container, HStack, VStack, Image, Heading, Text } from "@chakra-ui/react";
import Loader from "./Loader";
import ErrorComponent from "./ErrorComponent";
import { motion } from "framer-motion";

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`);
        setExchanges(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchExchanges();
  }, []);

  if (error) return <ErrorComponent message={"Error While Fetching Exchanges"} />;

  return (
    <Container maxW="container.xl">
      {loading ? (
        <Loader />
      ) : (
        <HStack wrap="wrap" justifyContent="space-evenly">
          {exchanges.map((exchange) => (
            <ExchangeCard
              key={exchange.id}
              name={exchange.name}
              img={exchange.image}
              rank={exchange.trust_score_rank}
              url={exchange.url}
            />
          ))}
        </HStack>
      )}
    </Container>
  );
};

const ExchangeCard = ({ name, img, rank, url }) => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    <motion.div
      whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0], transition: { duration: 0.5, yoyo: Infinity } }}
      whileTap={{ scale: 0.9 }}
      style={{
        width: "200px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        borderRadius: "8px",
        padding: "1rem",
        margin: "1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
        background: "linear-gradient(45deg, #ED1D24, #FF3900)",
      }}
    >
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <Image
          src={img}
          w="40px"
          h="40px"
          objectFit="contain"
          alt="Exchange"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <Heading
          size="md"
          noOfLines={1}
          color="white"
          textAlign="center"
          mt="1rem"
        >
          {rank}
        </Heading>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <Text noOfLines={1} color="white" mt="0.5rem" fontSize="sm">
          {name}
        </Text>
      </motion.div>
    </motion.div>
  </a>
);

export default Exchanges;
