'use client'

import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  Container,
  Text,
} from '@chakra-ui/react'
import Link from 'next/link'

interface NavItem {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const { open: isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box 
      bg="white" 
      px={4} 
      shadow="sm" 
      position="sticky" 
      top={0} 
      zIndex={1000}
      borderBottom="1px"
      borderColor="gray.200"
    >
      <Container maxW="container.xl">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none' }}>
            <Text
              fontSize="2xl"
              fontWeight="bold"
              bgGradient="linear(to-r, blue.600, blue.400)"
              bgClip="text"
              _hover={{ transform: 'scale(1.05)' }}
              transition="all 0.2s"
            >
              UniverseWP
            </Text>
          </Link>

          {/* Desktop Navigation */}
          <HStack gap={8} display={{ base: 'none', md: 'flex' }}>
            {navItems.map((item) => (
              <Box
                key={item.label}
                as={Link}
                href={item.href}
                px={3}
                py={2}
                rounded="md"
                fontSize="md"
                fontWeight="500"
                color="gray.700"
                _hover={{
                  textDecoration: 'none',
                  bg: 'blue.50',
                  color: 'blue.600',
                }}
                transition="all 0.2s"
              >
                {item.label}
              </Box>
            ))}
          </HStack>

          {/* CTA Button (Desktop) */}
          <HStack gap={4} display={{ base: 'none', md: 'flex' }}>
            <Link href="/contact">
              <Button
                colorScheme="blue"
                size="md"
                rounded="full"
                px={6}
                _hover={{
                  transform: 'translateY(-2px)',
                  shadow: 'lg',
                }}
                transition="all 0.2s"
              >
                Get Started
              </Button>
            </Link>
          </HStack>

          {/* Mobile menu button */}
          <IconButton
            size="md"
            aria-label="Open Menu"
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            variant="ghost"
          >
            {isOpen ? '✕' : '☰'}
          </IconButton>
        </Flex>

        {/* Mobile Navigation */}
        {isOpen && (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as="nav" gap={2}>
              {navItems.map((item) => (
                <Box
                  key={item.label}
                  as={Link}
                  href={item.href}
                  px={3}
                  py={2}
                  rounded="md"
                  fontSize="md"
                  fontWeight="500"
                  color="gray.700"
                  display="block"
                  _hover={{
                    textDecoration: 'none',
                    bg: 'blue.50',
                    color: 'blue.600',
                  }}
                  onClick={onClose}
                >
                  {item.label}
                </Box>
              ))}
              <Link href="/contact">
                <Button
                  colorScheme="blue"
                  size="md"
                  rounded="full"
                  w="full"
                  mt={2}
                >
                  Get Started
                </Button>
              </Link>
            </Stack>
          </Box>
        )}
      </Container>
    </Box>
  )
}
