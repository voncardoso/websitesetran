import { 
    Box, 
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Icon,
    Button,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel,
    Tfoot,
    TableCaption
} from '@chakra-ui/react';
import { AiOutlineEyeInvisible } from  "react-icons/ai";



export function BoxContracts(){
    return(
        <Box 
            align="center" 
            justifyContent="center"
            alignSelf="center" 
            maxWidth={880}
            ml="auto"
            mr="auto"
            mt="15vh"
            pt="10"
         >
    
    <Table variant="simple">
  <TableCaption>Imperial to metric conversion factors</TableCaption>
  <Thead>
    <Tr>
      <Th>To convert</Th>
      <Th>into</Th>
      <Th isNumeric>multiply by</Th>
    </Tr>
  </Thead>
  <Tbody>
    <Tr>
      <Td>inches</Td>
      <Td>millimetres (mm)</Td>
      <Td isNumeric>25.4</Td>
    </Tr>
    <Tr>
      <Td>feet</Td>
      <Td>centimetres (cm)</Td>
      <Td isNumeric>30.48</Td>
    </Tr>
    <Tr>
      <Td>yards</Td>
      <Td>metres (m)</Td>
      <Td isNumeric>0.91444</Td>
    </Tr>
  </Tbody>
  <Tfoot>
    <Tr>
      <Th>To convert</Th>
      <Th>into</Th>
      <Th isNumeric>multiply by</Th>
    </Tr>
  </Tfoot>
</Table>
            </Box>
    );
}