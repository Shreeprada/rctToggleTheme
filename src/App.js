
import './App.css';
import { useContext } from 'react';
import { ThemeContext } from './Context/ThemeContext';
import { Switch,Box,Avatar,Stack,VStack,StackDivider } from '@chakra-ui/react';
import { Progress } from '@chakra-ui/react';
function App() {
  const {isLight,toggleTheme}=useContext(ThemeContext);

  return (
    <div className={`App ${isLight? "light":"dark"}`}>
      <div style={{display:"flex",gap:"150px"}}>
     <h1 style={{fontSize:'24px',fontWeight:'500'}}>My Dashboard </h1> 
     <div style={{marginTop:'10px'}}>Dark Mode<Switch onChange={toggleTheme} /></div>
     </div>
      <Box maxW='sm' borderWidth='1px' borderRadius='10px' marginLeft='10px'>
        <h2 style={{fontWeight:"500"}}>Active Users</h2>
        <VStack
  divider={<StackDivider borderColor='gray.200' />}
  spacing={30}
  align='stretch'>
        <div style={{marginLeft:"10px"}}>
        <Stack direction='row'>
  <Avatar name='Oshigaki Kisame' src='https://bit.ly/dan-abramov' />
  <div><h3 style={{fontWeight:'500'}}>Nrupul Dev</h3>
  <p style={{color:"#a8b6c4"}}>Bangalore,India</p></div>
  </Stack>
  {<br/>}
  <Progress colorScheme='green' size='xs' value={80} borderRadius='10px' bgColor="#e5e9f2"/>
  <div style={{display:"flex",justifyContent:"space-between"}}>
  <p>Professional Level 15</p><p style={{fontWeight:"500"}}>4723 Points</p>
  </div>
        </div>
        
      
        <div style={{marginLeft:"10px"}}>
        <Stack direction='row'>
  <Avatar name='Oshigaki Kisame' src='https://bit.ly/kent-c-dodds' />
  <div><h3 style={{fontWeight:'500'}}>Sandy</h3>
  <p style={{color:"#a8b6c4"}}>Bangalore,India</p></div>
  </Stack>
  {<br/>}
  <Progress colorScheme='blue' size='xs' value={40} borderRadius='10px' backgroundColor='#e5e9f2'/>
  <div style={{display:"flex",justifyContent:"space-between"}}>
  <p>Professional Level 11</p><p style={{fontWeight:"500"}}>2339 Points</p>
  </div>
        </div>
        <div style={{marginLeft:"10px"}}>
        <Stack direction='row'>
  <Avatar name='Oshigaki Kisame' src='https://bit.ly/dan-abramov' />
  <div><h3 style={{fontWeight:'500'}}>Elon Tusk</h3>
  <p style={{color:"#a8b6c4"}}>California,USA</p></div>
  </Stack>
  {<br/>}
  <Progress colorScheme='purple' size='xs' value={35} borderRadius='10px' backgroundColor='#e5e9f2'/>
  <div style={{display:"flex",justifyContent:"space-between"}}>
  <p>Professional Level 6</p><p style={{fontWeight:"500"}}>1884 Points</p>
  </div>
        </div>
        </VStack>
     </Box>
    </div>
  );
}

export default App;