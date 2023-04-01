import { useMultiStep } from './hook/useMultiStep';
import { Button, Image, Box } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react'
import { FormEvent } from 'react';
import { Domanda1 } from './componets/Domanda1';
import { Domanda2 } from './componets/Domanda2';
import { Domanda3 } from './componets/Domanda3';
import { Domanda4 } from './componets/Domanda4';
import { Domanda5 } from './componets/Domanda5';
import { Domanda6 } from './componets/Domanda6';
import { Fine } from './componets/Fine';
import Gommini from './img/Gommini.png';

function App() {
  const{steps, currentStepIndex, step, isFirstStep, back, next} = useMultiStep([
    <Domanda1/>,
    <Domanda2/>,
    <Domanda3/>,
    <Domanda4/>,
    <Domanda5/>,
    <Domanda6/>,
    <Fine/>
  ])

function onSubmit(e: FormEvent){
  e.preventDefault()
  next()
}

  return (
    <ChakraProvider>
    <div 
      style={{
        position: "relative",
        background: "white",
        border: "1px solid black",
        borderRadius: ".5rem",
        fontFamily: "Arial"
      }}
    >
      <Box maxH="20em">
        <Image src={Gommini} maxH="20em" objectFit="fill" width="100%"/>
      </Box>
      
      <form onSubmit={onSubmit}>
        <div style ={{position:"absolute", top: ".5rem", right:".5rem"}}>
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div style={{ marginTop:"1rem", display:"flex", gap:".5rem", justifyContent:"flex-end"}}>
          {isFirstStep && (
            <Button colorScheme='teal' size='sm' onClick={back} margin='2rem'>
              indietro
            </Button>
          )}
            <Button type="submit" colorScheme='teal' size='sm' margin='2rem'>
              avanti
            </Button>
        </div>
      </form>
    </div>
    </ChakraProvider>
  );
}

export default App;
