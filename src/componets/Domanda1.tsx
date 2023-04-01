import { Box, Text, VStack, Radio, RadioGroup } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react'
export function Domanda1(){
        return(
            <ChakraProvider>
                <Box marginTop= '2em'
                    marginBottom= '2em'
                    className='box1'>
                    <RadioGroup>
                    <VStack >
                        <Text color='black' fontSize='30px' >1. Da quanto tempo è cliente Tod's?</Text>
                        <Radio value='1' size='md' name='1' colorScheme='gray' isRequired>
                            <Text color='black'>È il mio primo acquisto</Text>
                        </Radio>
                        <Radio value='2' size='md' name='1' colorScheme='gray'>
                            <Text color='black'>1 anno</Text>
                        </Radio>
                        <Radio value='3' size='md' name='1' colorScheme='gray'>
                            <Text color='black'>1-2 anni</Text>
                        </Radio>
                        <Radio value='4' size='md' name='1' colorScheme='gray' >
                            <Text color='black'>3-5 anni</Text>
                        </Radio>
                        <Radio value='5' size='md' name='1' colorScheme='gray' >
                            <Text color='black'>Più di 6 anni</Text>
                        </Radio>
                    </VStack>   
                    </RadioGroup>  
                </Box>
            </ChakraProvider>
    )
}