import { Box, Card, Button, HStack, Image, Text, VStack, Radio, RadioGroup } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react'



export const CompTest = ()=>{
    return(
        <ChakraProvider>
            <Text 
                fontSize='50px' 
                textAlign='center'
                marginBottom= '0.3em'
                marginTop= '0.3em'>TOD'S D:</Text>
        <Card
            minH="900px"
            minW="200rm"
            borderRadius= '15px'
            backgroundColor= '#FFFAFA'>
            <Box marginTop= '2em'
                marginBottom= '2em'
                className='box1'>
                <RadioGroup>
                <VStack>
                    <Text color='black' fontSize='30px' >1. Quanto sei test da 1 a 6????</Text>
                    <Radio value='1' size='md' name='1' colorScheme='gray'>
                        <Text color='black'>1 Test risposta 1 aaaaaaaaaaaaa</Text>
                    </Radio>
                    <Radio value='2' size='md' name='1' colorScheme='gray'>
                        <Text color='black'>2 Test risposta 2 aaaaaaaaaaaaa</Text>
                    </Radio>
                    <Radio value='3' size='md' name='1' colorScheme='gray'>
                        <Text color='black'>3 Test risposta 3 aaaaaaaaaaaaa</Text>
                    </Radio>
                    <Radio value='4' size='md' name='1' colorScheme='gray' >
                        <Text color='black'>4 Test risposta 4 aaaaaaaaaaaaa</Text>
                    </Radio>
                    <HStack>
                        <Button colorScheme='teal' size='sm' variant='outline'>
                            Indietro
                        </Button>
                        <Button colorScheme='teal' size='sm' variant='solid'>
                            Avanti
                        </Button>
                    </HStack>
                </VStack>   
                </RadioGroup>  
            </Box>
            <Box>
                <RadioGroup>
                <VStack>
                    <Text color='black' fontSize='30px' >2. Quanto sei test da 1 a 6????</Text>
                    <Radio value='1' size='md' name='1' colorScheme='gray'>
                        <Text color='black'>1 Test risposta 1 aaaaaaaaaaaaa</Text>
                    </Radio>
                    <Radio value='2' size='md' name='1' colorScheme='gray'>
                        <Text color='black'>2 Test risposta 2 aaaaaaaaaaaaa</Text>
                    </Radio>
                    <Radio value='3' size='md' name='1' colorScheme='gray'>
                        <Text color='black'>3 Test risposta 3 aaaaaaaaaaaaa</Text>
                    </Radio>
                    <Radio value='4' size='md' name='1' colorScheme='gray'>
                        <Text color='black'>4 Test risposta 4 aaaaaaaaaaaaa</Text>
                    </Radio>
                    <HStack>
                        <Button colorScheme='teal' size='sm' variant='outline'>
                            Indietro
                        </Button>
                        <Button colorScheme='teal' size='sm' variant='solid'>
                            Avanti
                        </Button>
                    </HStack>
                </VStack>
                </RadioGroup>
            </Box>
        </Card>
        </ChakraProvider>
    )
}



