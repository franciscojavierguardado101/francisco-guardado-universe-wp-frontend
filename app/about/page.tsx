'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react'

export default function AboutPage() {
  return (
    <Box py={20}>
      <Container maxW="7xl">
        <Stack gap={12}>
          {/* Header */}
          <VStack gap={4} textAlign="center">
            <Heading as="h1" size="3xl">
              About Us
            </Heading>
            <Text fontSize="xl" color="fg.muted" maxW="3xl">
              We're building the future of web development with modern tools and technologies.
            </Text>
          </VStack>

          {/* Content */}
          <Box>
            <Text fontSize="lg" lineHeight="tall" color="fg.muted" mb={6}>
              This is a modern headless WordPress site built with Next.js, GraphQL, and Chakra UI.
              It demonstrates the power of decoupling the WordPress backend from the frontend,
              giving you complete freedom to build fast, beautiful, and SEO-friendly websites.
            </Text>
            <Text fontSize="lg" lineHeight="tall" color="fg.muted" mb={6}>
              By using WordPress as a headless CMS, we get the best of both worlds: the
              robust content management capabilities of WordPress combined with the performance
              and developer experience of modern JavaScript frameworks.
            </Text>
          </Box>

          {/* Tech Stack */}
          <Box bg="bg.muted" p={8} borderRadius="xl">
            <Heading as="h2" size="xl" mb={6}>
              Technology Stack
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
              <Box>
                <Heading as="h3" size="md" mb={2}>
                  Frontend
                </Heading>
                <Text color="fg.muted">
                  Next.js 15, React, TypeScript, Chakra UI v3
                </Text>
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2}>
                  Backend
                </Heading>
                <Text color="fg.muted">
                  WordPress, WPGraphQL, Custom Post Types
                </Text>
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2}>
                  Data Layer
                </Heading>
                <Text color="fg.muted">
                  GraphQL, Apollo Client
                </Text>
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2}>
                  Deployment
                </Heading>
                <Text color="fg.muted">
                  Vercel, Docker (DDEV for local development)
                </Text>
              </Box>
            </SimpleGrid>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
