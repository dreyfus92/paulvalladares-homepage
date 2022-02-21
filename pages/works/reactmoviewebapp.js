import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Works = () => {
    return (
        <Layout title="Works">
            <Container>
                <Title>
                    React Movie Web App <Badge>2021</Badge>
                </Title>
                <P>
                    This a Movie Web app made with The Movie Data Base API to
                    search for movies and consult basic information about them.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='https://sad-golick-5febd7.netlify.app/'>
                            https://sad-golick-5febd7.netlify.app/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    )
}

export default Works