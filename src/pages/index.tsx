import { Flex, Button, Stack, Text  } from '@chakra-ui/react';
import { useEffect } from 'react'
import {Input} from '../components/Form/Input'
import firebase from 'firebase/compat/app'
import 'firebase/firestore';



export default function SigIn()  {

  useEffect(() =>{
    firebase.firestore().collection('siteConfig').get().then(
      (docs) => console.log(docs.docs.map((doc) => doc.data())))
  }, [])


  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        width="100%"
        maxWidth={560}
        bg="white"
        p="20"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing="6">
          <Text color="blue.500" fontSize="36" textAlign="center">
            Faça seu Login
          </Text>
            <Input name="users" type="users" label="Usuário" />
            <Input name="password" type="password" label="Senha" />
        </Stack>

        <Button type="submit" marginTop="6" colorScheme="blue" size="lg" fontSize="23">
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}

