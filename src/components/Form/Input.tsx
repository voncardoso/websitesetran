import { 
    Input as ChakraInput,
     FormLabel, 
     FormControl, 
     InputProps as ChakraInputProps 
} from '@chakra-ui/react';

interface InputProps extends ChakraInputProps{
    name: string,
    label?: string, // ? significa que é opcional
}

export function Input({name, label, ...rest}: InputProps){
    return(
        <FormControl>
            {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

            <ChakraInput
                name={name}
                id={name}
                focusBorderColor="blue.500" // muda a cor do da borda ao clicar
                bgColor="gray.200"// muda ac or do background do input
                variant="filled" // tipo de input
                _hover={{
                    bgColor:"gray.200"
                  }}
                size="lg"
                {...rest}
            />
        </FormControl>
    );
}