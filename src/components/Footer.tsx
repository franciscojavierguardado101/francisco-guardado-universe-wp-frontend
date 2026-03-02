'use client'

import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link as ChakraLink,
  Flex,
  Icon,
} from '@chakra-ui/react'
import Link from 'next/link'
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <Box bg="bg.muted" color="fg.muted">
      {/* Divider replacement */}
      <Box borderTop="1px" borderColor="border" />
      
      <Container as={Stack} maxW="6xl" py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} gap={8}>
          {/* Your footer content */}
        </SimpleGrid>
      </Container>
      
      {/* Another divider replacement */}
      <Box borderTop="1px" borderColor="border" />
      
      <Box py={6}>
        <Container maxW="6xl">
          <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center">
            <Text>© 2024 Your Company. All rights reserved</Text>
            <Stack direction="row" gap={6}>
              <ChakraLink href="#">
                <Icon as={FaTwitter} />
              </ChakraLink>
              <ChakraLink href="#">
                <Icon as={FaLinkedin} />
              </ChakraLink>
              <ChakraLink href="#">
                <Icon as={FaGithub} />
              </ChakraLink>
              <ChakraLink href="#">
                <Icon as={FaInstagram} />
              </ChakraLink>
            </Stack>
          </Flex>
        </Container>
      </Box>
    </Box>
  )
}
