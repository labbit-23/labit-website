"use client";

import { Box, Container, Grid, GridItem, Heading, SimpleGrid, Spinner, Stat, StatLabel, StatNumber, Table, Tbody, Td, Text, Th, Thead, Tr, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function CollectionCentreDemoPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/demo/collection-centre").then((r) => r.json()).then(setData).catch(() => setData({ metrics: [], pickups: [], notifications: [] }));
  }, []);

  if (!data) return <Box minH="100vh" display="grid" placeItems="center" bg="#1B222A"><Spinner color="cyan.300" size="xl" /></Box>;

  return (
    <Box minH="100vh" bg="#111923" color="white" py={8}>
      <Container maxW="7xl">
        <Heading size="lg" mb={2}>Collection Centre Demo Dashboard</Heading>
        <Text color="whiteAlpha.700" mb={8}>Mock center operations board for pickup and handover execution.</Text>

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
            <Heading size="sm" mb={4}>Pickup Board</Heading>
            <Table size="sm" variant="simple">
              <Thead><Tr><Th color="whiteAlpha.700">Centre</Th><Th color="whiteAlpha.700">Code</Th><Th color="whiteAlpha.700">Rider</Th><Th color="whiteAlpha.700">Status</Th><Th color="whiteAlpha.700">ETA</Th></Tr></Thead>
              <Tbody>
                {data.pickups.map((r) => (
                  <Tr key={r.code}><Td>{r.center}</Td><Td>{r.code}</Td><Td>{r.rider}</Td><Td>{r.status}</Td><Td>{r.eta}</Td></Tr>
                ))}
              </Tbody>
            </Table>
          </GridItem>

          <GridItem p={5} border="1px solid" borderColor="whiteAlpha.200" borderRadius="xl" bg="whiteAlpha.100">
            <Heading size="sm" mb={4}>Operational Notifications</Heading>
            <VStack align="stretch" spacing={3}>
              {data.notifications.map((n) => (
                <Box key={n} p={3} border="1px solid" borderColor="whiteAlpha.200" borderRadius="lg">
                  <Text color="whiteAlpha.900">{n}</Text>
                </Box>
              ))}
            </VStack>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}
