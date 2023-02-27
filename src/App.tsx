import { useContext, useState } from 'react'
import { Container, TextField, Typography } from '@mui/material'
import { IPhrase, PhrasesContext } from './context/PhrasesContext'

import PhrasesList from './components/PhrasesList'
import AddPhrase from './components/AddPhrase'
import './App.css' 

function App() {
  const { phrases, addPhrase, removePhrase } = useContext(PhrasesContext)
  const [ searchText, setSearchText] = useState<string>('')

  const filterPhrases = (phrase: IPhrase) =>{
    return phrase.text.toLowerCase().includes(searchText.toLowerCase())
  }

  const phrasesToRender = searchText ? phrases.filter(filterPhrases) : phrases

  return (
    <Container>
      <Typography
        className="title"
        component="h1"
        sx={{
          fontSize: '3rem',
          fontWeight: 'bold',
          margin: '2rem 0',
        }}>
        INTERBANKING PHRASES
      </Typography>

      <AddPhrase addPhrase={addPhrase} setSearchText={setSearchText} />

      <TextField
        label="Search phrases"
        variant="outlined"
        margin="normal"
        className="search-field"
        onChange={(e) => setSearchText(e.target.value)}
      />

      {
        phrasesToRender.length > 0 &&
        <PhrasesList phrasesToRender={phrasesToRender} handleRemovePhrase={removePhrase} />
      }

      { 
        phrases.length === 0 &&
        <Typography className="no-phrases">No phrases added yet.</Typography>
      }

    </Container>
  )
}

export default App
