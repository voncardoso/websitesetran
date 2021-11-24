import {Flex, Avatar, Box, Text, Icon} from '@chakra-ui/react';
import { RiSearchLine, RiNotificationLine, RiUserAddLine } from 'react-icons/ri'

export function Header(){
    return(
        <Flex
            as="header"
            w="100%"
            h="20"
            maxWidth={1480}
            mx="auto"
            bg="grey.200"
            borderBottom="2px" borderColor="white"
        >
            <Flex>
                <Avatar alignSelf="center" ml="4" size="md" borderColor="pink" name="Von Harrison" bg="blue.500"/>
                <Box ml="5" alignSelf="center">
                    <Text> Von Harrison </Text>
                    <Text color="gray.300" fontSize="small">Fiscal</Text>
                </Box>
            </Flex>
            <Flex 
                align="center"
                marginLeft="auto"
                paddingRight="20"
            >
                    <Icon as={RiUserAddLine}/>
                </Flex>
        </Flex>
    );
}