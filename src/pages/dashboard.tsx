import {Flex, SimpleGrid, Box, Text, theme} from '@chakra-ui/react';
import { SidBar } from '../components/Sidbar';
import { Header } from '../components/Header';

export default function  Dashboard(){
    return(
        <Flex>
            <SidBar />
            <Header />

            <Box bg="tomato" w="100%" p={4} color="white">
                This is the Box
            </Box>
        </Flex>
    )
}