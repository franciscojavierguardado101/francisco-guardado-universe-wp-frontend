'use client'

import { Box, Container, Heading, Text, Stack } from '@chakra-ui/react'
import { useParams } from 'next/navigation'

export default function BlogPost() {
  const params = useParams()
  const slug = params?.slug as string

  return (
    <Container maxW="4xl" py={12}>
      <Stack gap={6}>
        <Heading as="h1" size="2xl">
          Blog Post: {slug}
        </Heading>
        <Text color="fg.muted" fontSize="sm">
          January 15, 2024
        </Text>
        <Box borderTop="1px" borderColor="border" pt={6}>
          <Text fontSize="lg" lineHeight="tall">
            This is a placeholder blog post. Soon, this will fetch content from your WordPress backend
            using GraphQL.
          </Text>
        </Box>
      </Stack>
    </Container>
  )
}
