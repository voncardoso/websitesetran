import {Flex, SimpleGrid, Box, Text, theme} from '@chakra-ui/react';
import { SidBar } from '../components/Sidbar';
import { Header } from '../components/Header';
import { BoxContracts } from '../components/BoxContracts';


export default function  Dashboard(){
    return(
        <Flex>
            <SidBar />
            <Flex flexDirection="column" width="100%">
            <Header />
                <Box>
                    <BoxContracts />
                </Box>
            </Flex>
        </Flex>
    )
}