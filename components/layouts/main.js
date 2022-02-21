import Head from 'next/head'
import Navbar from '../navbar'
import NoSsr from '../no-ssr'
import { Box, Container } from '@chakra-ui/react'
import VoxelRoom from '../voxel-room'

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-widht initial-scale=1" />
                <meta name="description" content="Paul's hompage" />
            </Head>
            <Navbar path={router.asPath} />
            <Container maxW="container.md" pt={14}>
                <NoSsr>
                    <VoxelRoom />
                </NoSsr>
                {children}
            </Container>
        </Box>
    )
}

export default Main