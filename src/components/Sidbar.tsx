import { Box,Stack, Text, Link, Icon, IconButton } from "@chakra-ui/react"
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri"

export function SidBar(){
    return(
        <Box as="aside" w="84px"  bgColor="blue.600" h="100vh" position="fixed">
            <Stack spacing="12" align="flex-start">
                <Box alignSelf="center" >
                    <Stack mt="45vh" spacing="6">
                        <Icon as={RiContactsLine} color="white" children="Click"  />
                        <Icon as={RiContactsLine} color="white" children="Click" />
                        <Icon as={RiContactsLine} color="white" children="Click" />
                        <Icon as={RiContactsLine} color="white" children="Click" />
                    </Stack>
                </Box>
            </Stack>
        </Box>
    );
}