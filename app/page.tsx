'use client'

import {
  Container, Stack, Flex, Box, Heading, Text, Button, SimpleGrid, Icon,
} from '@chakra-ui/react'
import Link from 'next/link'
import { FaRocket, FaCode, FaMobile } from 'react-icons/fa'
import HomeCarousels from '@/components/HomeCarousels'
import HomeSections from '@/components/HomeSections'

const features = [
  { icon: FaRocket, title: 'Lightning Fast', description: 'Built with Next.js for optimal performance and SEO' },
  { icon: FaCode, title: 'Modern Stack', description: 'React, TypeScript, and Chakra UI for the best DX' },
  { icon: FaMobile, title: 'Fully Responsive', description: 'Beautiful on any device, from mobile to desktop' },
]

export default function Home() {
  return (
    <>
      <Container maxW="container.xl" py={20}>
        <Stack align="center" gap={{ base: 8, md: 10 }} py={{ base: 10, md: 20 }} direction={{ base: 'column', md: 'row' }}>
          <Stack flex={1} gap={{ base: 5, md: 8 }}>
            <Heading lineHeight={1.1} fontWeight={700} fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
              <Text as="span" position="relative">Build Amazing</Text>
              <br />
              <Text as="span" color="blue.500">Websites with WordPress</Text>
            </Heading>
            <Text color="fg.muted" fontSize={{ base: 'md', lg: 'lg' }}>
              A modern headless WordPress setup with Next.js, GraphQL, and Chakra UI. Fast, flexible, and beautiful.
            </Text>
            <Stack gap={4} direction={{ base: 'column', sm: 'row' }}>
              <Button as={Link} href="/blog" rounded="full" size="lg" fontWeight="bold" px={8} colorScheme="blue" _hover={{ transform: 'translateY(-2px)', shadow: 'lg' }} transition="all 0.2s">View Blog</Button>
              <Button as={Link} href="/about" rounded="full" size="lg" fontWeight="bold" px={8} variant="outline" colorScheme="blue" _hover={{ bg: 'blue.50' }}>Learn More</Button>
            </Stack>
          </Stack>
          <Flex flex={1} justify="center" align="center" position="relative" w="full">
            <Box position="relative" height="300px" width="full" overflow="hidden" borderRadius="2xl" bg="blue.100" display="flex" alignItems="center" justifyContent="center">
              <Text fontSize="6xl">🚀</Text>
            </Box>
          </Flex>
        </Stack>
      </Container>

      <HomeSections />
      <HomeCarousels />

      <Box bg="bg.muted" py={20}>
        <Container maxW="container.xl">
          <Stack gap={10}>
            <Stack gap={4} textAlign="center">
              <Heading fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>Why Choose This Stack?</Heading>
              <Text color="fg.muted" fontSize="lg" maxW="2xl" mx="auto">Everything you need to build modern, fast, and beautiful websites</Text>
            </Stack>
            <SimpleGrid columns={{ base: 1, md: 3 }} gap={10}>
              {features.map((feature, index) => (
                <Stack key={index} p={8} bg="white" borderRadius="xl" shadow="md" gap={4} align="center" textAlign="center" _hover={{ shadow: 'xl', transform: 'translateY(-4px)' }} transition="all 0.3s">
                  <Icon boxSize={12} color="blue.500"><feature.icon /></Icon>
                  <Heading fontSize="xl">{feature.title}</Heading>
                  <Text color="fg.muted">{feature.description}</Text>
                </Stack>
              ))}
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>
    </>
  )
}
