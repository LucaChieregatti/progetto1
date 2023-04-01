import { Box, Text, VStack, Radio, RadioGroup } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react'
export function Domanda3(){
        return(
            <ChakraProvider>
                <Box marginTop= '2em'
                    marginBottom= '2em'
                    className='box1'>
                    <RadioGroup>
                    <VStack>
                        <Text color='black' fontSize='30px' >3. Come valuterebbe i seguenti servizi della nostra boutique online?</Text>
                        <Text color='black' fontSize='26px' >Descrizioni ed immagini di prodotto</Text>
                        <Radio value='1' size='md' name='3' colorScheme='gray' isRequired>
                            <Text color='black'>Pienamente Soddisfatto</Text>
                        </Radio>
                        <Radio value='2' size='md' name='3' colorScheme='gray'>
                            <Text color='black'>Soddisfatto</Text>
                        </Radio>
                        <Radio value='3' size='md' name='3' colorScheme='gray'>
                            <Text color='black'>Neutro</Text>
                        </Radio>
                        <Radio value='4' size='md' name='3' colorScheme='gray' >
                            <Text color='black'>Poco soddisfatto</Text>
                        </Radio>
                        <Radio value='5' size='md' name='3' colorScheme='gray' >
                            <Text color='black'>Per niente soddisfatto</Text>
                        </Radio>
                    </VStack>   
                    </RadioGroup>  
                </Box>
            </ChakraProvider>
    )
}