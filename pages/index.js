import NextLink from 'next/link'
import {
    Button,
    Container,
    Box,
    Heading,
    Image,
    useColorModeValue,
    Link,
    List,
    ListItem,
    Icon,
} from "@chakra-ui/react"

import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from "../components/paragraph"
import { BioSection, BioYear } from '../components/bio'
import { IoLogoTwitter, IoLogoGithub } from 'react-icons/io5'

const Page = () => {
    return (
        <Layout>
            <Container>
                <Box
                    borderRadius="lg"
                    bg={useColorModeValue('whiteAlpha.500, whiteAlpha.200')}
                    p={3}
                    mb={6}
                    align="center"
                >
                    Hello, I&apos;m a FrontEnd developer in process based in Mexico!
                </Box>
                <Box display={{ md: 'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Paul Valladares
                        </Heading>
                        <p> Self-Taught Developer ( JS | React | Next | Python | SQL | PostgreSQL ) </p>
                    </Box>
                    <Box
                        flexShrink={0}
                        mt={{ base: 4, md: 0 }}
                        ml={{ md: 6 }}
                        align="center"
                    >
                        <Image
                            borderColor="whiteAlpha.800"
                            borderWidth={2}
                            borderStyle="solid"
                            maxWidth="100px"
                            display="inline-block"
                            borderRadius="full"
                            src="/images/paulv1.jpeg"
                            alt="Profile Image"
                        />
                    </Box>
                </Box>

                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Work
                    </Heading>
                    <Paragraph>
                        👋 &nbsp;Hi, I&apos;m Paul Valladares, I am a FrontEnd Developer.
                        👀 &nbsp;I&apos;m interested in
                        frontend, backend, data analysis, I&apos;m also a WEB3 enthusiast. 🌱 &nbsp;I&apos;m currently learning
                        React. 🤓 &nbsp;I&apos;m looking to collaborate on any web development
                        projects.
                    </Paragraph>
                    <Box aling="center" my={4}>
                        <NextLink href="/works" passHref>
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="orange">
                                My Portfolio
                            </Button>
                        </NextLink>
                    </Box>
                </Section>
                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>1992</BioYear>
                        Born in Acapulco, Mexico.
                    </BioSection>
                    <BioSection>
                        <BioYear>2015</BioYear>
                        Completed Bachelor&apos;s degree of civil engineering in the Graduate School of Engineering at National Autonomous University of Mexico.
                    </BioSection>
                    <BioSection>
                        <BioYear>2015</BioYear>
                        Worked as Construction Manager.
                    </BioSection>
                    <BioSection>
                        <BioYear>2021</BioYear>
                        Switched career paths to become a web developer.
                    </BioSection>
                </Section>
                <Section>
                    <Heading as="h3" variant="section-title">
                        I 💙
                    </Heading>
                    <Paragraph>
                        Art, Reading, Gaming, Music, Cooking, Making playlists, DeFi, Blockchain.
                    </Paragraph>
                </Section>
                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        Social Media
                    </Heading>
                    <List>
                        <ListItem>
                            <Link href="https://github.com/dreyfus92" target="_blank" passHref>
                                <Button variant="ghost" colorScheme="orange" leftIcon={<Icon as={IoLogoGithub} />}>
                                    @dreyfus92
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://twitter.com/soysarcasme" target="_blank" passHref>
                                <Button variant="ghost" colorScheme="orange" leftIcon={<Icon as={IoLogoTwitter} />}>
                                    @soysarcasme
                                </Button>
                            </Link>
                        </ListItem>
                    </List>
                </Section>
            </Container>
        </Layout >
    )
}

export default Page;