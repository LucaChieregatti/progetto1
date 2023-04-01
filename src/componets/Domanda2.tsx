import { Box, Text, VStack, Radio, RadioGroup } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react'
export function Domanda2(){
        return(
            <ChakraProvider>
                <Box marginTop= '2em'
                    marginBottom= '2em'
                    className='box1'>
                    <RadioGroup>
                    <VStack>
                        <Text color='black' fontSize='30px' >2. Come valuterebbe i seguenti servizi della nostra boutique online?</Text>
                        <Text color='black' fontSize='26px' >Velocità di navigazione</Text>
                        <Radio value='1' size='md' name='2' colorScheme='gray' isRequired>
                            <Text color='black'>Pienamente Soddisfatto</Text>
                        </Radio>
                        <Radio value='2' size='md' name='2' colorScheme='gray'>
                            <Text color='black'>Soddisfatto</Text>
                        </Radio>
                        <Radio value='3' size='md' name='2' colorScheme='gray'>
                            <Text color='black'>Neutro</Text>
                        </Radio>
                        <Radio value='4' size='md' name='2' colorScheme='gray' >
                            <Text color='black'>Poco soddisfatto</Text>
                        </Radio>
                        <Radio value='5' size='md' name='2' colorScheme='gray' >
                            <Text color='black'>Per niente soddisfatto</Text>
                        </Radio>
                    </VStack>   
                    </RadioGroup>  
                </Box>
            </ChakraProvider>
    )
}