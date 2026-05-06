"use client";

import { Box, Container, Grid, GridItem, Heading, HStack, SimpleGrid, Spinner, Stat, StatLabel, StatNumber, Table, Tbody, Td, Text, Th, Thead, Tr, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function LabAdminDemoPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/demo/lab-admin").then((r) => r.json()).then(setData).catch(() => setData({ metrics: [], queue: [], automations: [] }));
  }, []);

  if (!data) return <Box minH="100vh" display="grid" placeItems="center" bg="#1B222A"><Spinner color="cyan.300" size="xl" /></Box>;

  return (
    <Box minH="100vh" bg="#111923" color="white" py={8}>
      <Container maxW="7xl">
        <Heading size="lg" mb={2}>Lab Admin Demo Dashboard</Heading>
        <Text color="whiteAlpha.700" mb={8}>Mock operations view for bookings, reports, and automation control.</Text>

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
            <Heading size="sm" mb={4}>Active Processing Queue</Heading>
            <Table size="sm" variant="simple">
              <Thead><Tr><Th color="whiteAlpha.700">Patient</Th><Th color="whiteAlpha.700">Test</Th><Th color="whiteAlpha.700">Status</Th><Th color="whiteAlpha.700">ETA</Th></Tr></Thead>
              <Tbody>
                {data.queue.map((r) => (
                  <Tr key={r.patient}><Td>{r.patient}</Td><Td>{r.test}</Td><Td>{r.status}</Td><Td>{r.eta}</Td></Tr>
                ))}
              </Tbody>
            </Table>
          </GridItem>

          <GridItem p={5} border="1px solid" borderColor="whiteAlpha.200" borderRadius="xl" bg="whiteAlpha.100">
            <Heading size="sm" mb={4}>Automation Health</Heading>
            <VStack align="stretch" spacing={3}>
              {data.automations.map((a) => (
                <Box key={a.name} p={3} border="1px solid" borderColor="whiteAlpha.200" borderRadius="lg">
                  <Text fontWeight="semibold">{a.name}</Text>
                  <HStack justify="space-between" mt={1} color="whiteAlpha.800" fontSize="sm"><Text>Runs: {a.runs}</Text><Text>Success: {a.success}</Text></HStack>
                </Box>
              ))}
            </VStack>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}
