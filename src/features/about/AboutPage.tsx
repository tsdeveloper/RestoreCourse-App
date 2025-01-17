import { Alert, AlertTitle, Button, ButtonGroup, Container, ListItem, ListItemText, Typography } from '@mui/material'
import agent from '../../app/api/agent'
import { useState } from 'react'

export default function AboutPage() {
  const [validationErrors, setValidationErrors] = useState<string[]>([])

  function getValidationError(){
    agent.TestError.getValidationError()
    .then(() => console.log('should not see this'))
    .catch(error => setValidationErrors(error))
  }

return (
  <Container>
    <Typography gutterBottom variant='h2'></Typography>
    <ButtonGroup fullWidth>
    <Button variant='contained' onClick={() => agent.TestError.get400Error().catch(error => console.log(error))}>Test 400 Error</Button>
    <Button variant='contained' onClick={() => agent.TestError.get401Error().catch(error => console.log(error))}>Test 401 Error</Button>
    <Button variant='contained' onClick={() => agent.TestError.get404Error().catch(error => console.log(error))}>Test 404 Error</Button>
    <Button variant='contained' onClick={() => agent.TestError.get500Error().catch(error => console.log(error))}>Test 500 Error</Button>
    <Button variant='contained' onClick={getValidationError}>Test Validation Error</Button>
    </ButtonGroup>
 {validationErrors && 
    <Alert severity='error'>
      <AlertTitle>Validation Error</AlertTitle>
    {validationErrors.map(error => (
      <ListItem key={error}>
        <ListItemText>{error}</ListItemText>
      </ListItem>
    ))}
    </Alert>
    }
   
  </Container>
)}
