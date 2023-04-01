import { Box, Text, VStack, RadioGroup } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react'
export function Fine(){
        return(
            <ChakraProvider>
                <Box marginTop= '2em'
                    marginBottom= '2em'
                    className='box1'>
                    <RadioGroup>
                    <VStack>
                        <Text color='black' fontSize='30px' >Grazie per aver dedicato il tuo tempo a noi</Text>
                    </VStack>   
                    </RadioGroup>  
                </Box>
            </ChakraProvider>
    )
}