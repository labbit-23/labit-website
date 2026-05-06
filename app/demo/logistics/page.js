"use client";

import { Box, Container, Grid, GridItem, Heading, SimpleGrid, Spinner, Stat, StatLabel, StatNumber, Table, Tbody, Td, Text, Th, Thead, Tr, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function LogisticsDemoPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/demo/logistics").then((r) => r.json()).then(setData).catch(() => setData({ metrics: [], routes: [], events: [] }));
  }, []);

  if (!data) return <Box minH="100vh" display="grid" placeItems="center" bg="#1B222A"><Spinner color="cyan.300" size="xl" /></Box>;

  return (
    <Box minH="100vh" bg="#111923" color="white" py={8}>
      <Container maxW="7xl">
        <Heading size="lg" mb={2}>Logistics Demo Dashboard</Heading>
        <Text color="whiteAlpha.700" mb={8}>Mock field operations board for route and visit execution.</Text>

        <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} spacing={4} mb={8}>
          {data.metrics.map((m) => (
            <Stat key={m.label} p={4} border="1px solid" borderColor="whiteAlpha.200" borderRadius="xl" bg="whiteAlpha.100">
              <StatLabel color="whiteAlpha.700">{m.label}</StatLabel>
              <StatNumber color="cyan.200">{m.value}</StatNumber>
              <Text fontSize="sm" color="green.300">{m.trend}</Text>
            </Stat>
          ))}
        </SimpleGrid>

        <Grid templateColumns={{ base: "1fr", xl: "1.2fr 0.8fr" }} gap={6}>
          <GridItem p={5} border="1px solid" borderColor="whiteAlpha.200" borderRadius="xl" bg="whiteAlpha.100">
            <Heading size="sm" mb={4}>Route Board</Heading>
            <Table size="sm" variant="simple">
              <Thead><Tr><Th color="whiteAlpha.700">Executive</Th><Th color="whiteAlpha.700">Zone</Th><Th color="whiteAlpha.700">Stops</Th><Th color="whiteAlpha.700">Status</Th><Th color="whiteAlpha.700">Completion</Th></Tr></Thead>
              <Tbody>
                {data.routes.map((r) => (
                  <Tr key={r.exec}><Td>{r.exec}</Td><Td>{r.zone}</Td><Td>{r.stops}</Td><Td>{r.status}</Td><Td>{r.completion}</Td></Tr>
                ))}
              </Tbody>
            </Table>
          </GridItem>

          <GridItem p={5} border="1px solid" borderColor="whiteAlpha.200" borderRadius="xl" bg="whiteAlpha.100">
            <Heading size="sm" mb={4}>Live Event Feed</Heading>
            <VStack align="stretch" spacing={3}>
              {data.events.map((e) => (
                <Box key={`${e.time}-${e.event}`} p={3} border="1px solid" borderColor={e.priority === "high" ? "red.300" : "whiteAlpha.200"} borderRadius="lg">
                  <Text color="cyan.200" fontSize="sm">{e.time}</Text>
                  <Text>{e.event}</Text>
                </Box>
              ))}
            </VStack>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}
