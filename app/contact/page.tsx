'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  VStack,
  Input,
  Textarea,
  Button,
  Field,
} from '@chakra-ui/react'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // TODO: Implement form submission logic
    alert('Thank you for your message! (Form submission not yet implemented)')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Box py={20}>
      <Container maxW="3xl">
        <Stack gap={12}>
          {/* Header */}
          <VStack gap={4} textAlign="center">
            <Heading as="h1" size="3xl">
              Get In Touch
            </Heading>
            <Text fontSize="xl" color="fg.muted">
              Have a question or want to work together? Send us a message!
            </Text>
          </VStack>

          {/* Contact Form */}
          <Box bg="bg.muted" p={8} borderRadius="xl">
            <form onSubmit={handleSubmit}>
              <Stack gap={6}>
                <Field.Root required>
                  <Field.Label>Name</Field.Label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    size="lg"
                  />
                </Field.Root>

                <Field.Root required>
                  <Field.Label>Email</Field.Label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    size="lg"
                  />
                </Field.Root>

                <Field.Root required>
                  <Field.Label>Message</Field.Label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us what you're thinking..."
                    rows={6}
                    size="lg"
                  />
                </Field.Root>

                <Button
                  type="submit"
                  colorScheme="blue"
                  size="lg"
                  w="full"
                  _hover={{
                    transform: 'translateY(-2px)',
                    shadow: 'lg',
                  }}
                  transition="all 0.2s"
                >
                  Send Message
                </Button>
              </Stack>
            </form>
          </Box>

          {/* Additional Contact Info */}
          <VStack gap={4} textAlign="center" color="fg.muted">
            <Text>Or reach out directly:</Text>
            <Text fontSize="lg" fontWeight="bold" color="blue.600">
              hello@universeWP.com
            </Text>
          </VStack>
        </Stack>
      </Container>
    </Box>
  )
}
