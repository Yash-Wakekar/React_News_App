import { Button, Card, CardBody, CardFooter, Divider, Heading, Stack, Image,Text,AspectRatio,Link, Center } from '@chakra-ui/react'
import React from 'react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

export default function NewsItem(props) {

  return (
    <div>
      <Card p={3} m={4} borderTop='4px' borderColor='purple.500'>

        <CardBody display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <Image src={props.urlToImage} minH='170px' maxH='170px'/>
          <Center>
            <Stack>
                <Text fontSize='25px' style={{ fontWeight: 'bold' }} noOfLines={[3]} >{props.title}</Text>
                <Text noOfLines={[3]} align='justify' minH='72px'>{props.description}</Text>
            </Stack>
            </Center>   
        </CardBody>
        <Divider/>
        <CardFooter>
        <Button variant='solid' colorScheme='purple'  target="_blank">
            <Link href={props.newsUrl} isExternal>
            View More <ExternalLinkIcon mx='2px' />
          </Link>
            </Button>
        </CardFooter>
      </Card>
   
    </div>
  )
}
