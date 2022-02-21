import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import thumbReactWebApp from '../public/images/works/thumbReactWebApp.png'
import thumbPokedex from '../public/images/works/thumbPokedex.png'

const Works = () => {
    return (
        <Layout title="Works">
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Works
                </Heading>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section delay={0.3}>
                        <WorkGridItem
                            id="ReactWebApp"
                            title="React Movie Web App"
                            thumbnail={thumbReactWebApp}
                        >
                            A movie web app developed with React and Styled Components.
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.3}>
                        <WorkGridItem
                            id="ReactPokedex"
                            title="Pokedex Web App"
                            thumbnail={thumbPokedex}
                        >
                            A web app developed with React and Material UI.
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works
