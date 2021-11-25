import {Flex, Avatar, Box, Text, Icon} from '@chakra-ui/react';
import { RiSearchLine, RiNotificationLine, RiUserAddLine } from 'react-icons/ri'

export function Header(){
    return(
        <Flex
            as="header"
            w="100%"
            h="20"
            maxWidth={1680}
            mx="auto"
            borderBottom="2px" borderColor="white"
            position="absolute"
        >
            <Flex >
                <Avatar alignSelf="center" ml="4" size="md" borderColor="pink" name="Von Harrison" bg="gray.200" color="blue.600"/>
                <Box ml="8" alignSelf="center">
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