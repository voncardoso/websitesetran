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
            {!!label && <FormLabel color="blue.500" htmlFor={name}>{label}</FormLabel>}

            <ChakraInput
                name={name}
                id={name}
                focusBorderColor="blue.500" // muda a cor do da borda ao clicar
                bgColor="gray.200"// muda ac or do background do input
                _hover={{
                    bgColor:"gray.200"
                  }}
                size="lg"
                {...rest}
                color="blue.500"
            />
        </FormControl>
    );
}