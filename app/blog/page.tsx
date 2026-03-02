'use client'

import { Box, Container, Heading, Text, SimpleGrid, Card, Stack } from '@chakra-ui/react'
import Link from 'next/link'

export default function BlogPage() {
  // Placeholder blog posts
  const posts = [
    {
      id: 1,
      title: 'Getting Started with Next.js',
      excerpt: 'Learn how to build modern web applications with Next.js and React.',
      slug: 'getting-started-nextjs',
      date: '2024-01-15'
    },
    {
      id: 2,
      title: 'Introduction to WordPress Headless CMS',
      excerpt: 'Discover the benefits of using WordPress as a headless CMS.',
      slug: 'wordpress-headless-cms',
      date: '2024-01-20'
    },
    {
      id: 3,
      title: 'Chakra UI Best Practices',
      excerpt: 'Tips and tricks for building beautiful UIs with Chakra UI.',
      slug: 'chakra-ui-best-practices',
      date: '2024-01-25'
    }
  ]

  return (
    <Container maxW="7xl" py={12}>
      <Stack spacing={8}>
        <Box>
          <Heading as="h1" size="2xl" mb={4}>
            Blog
          </Heading>
          <Text fontSize="lg" color="fg.muted">
            Latest articles and tutorials
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
          {posts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
              <Card.Root
                p={6}
                height="full"
                _hover={{ transform: 'translateY(-4px)', shadow: 'lg' }}
                transition="all 0.2s"
              >
                <Card.Body>
                  <Stack spacing={4}>
                    <Heading as="h2" size="lg">
                      {post.title}
                    </Heading>
                    <Text color="fg.muted" fontSize="sm">
                      {post.date}
                    </Text>
                    <Text color="fg.muted">
                      {post.excerpt}
                    </Text>
                  </Stack>
                </Card.Body>
              </Card.Root>
            </Link>
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  )
}
