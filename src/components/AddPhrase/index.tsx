import {
  AddCircleOutlined
} from '@mui/icons-material'
import { Dispatch, KeyboardEvent, SetStateAction, useState } from 'react'
import { TextField, Box } from '@mui/material'
import './AddPhrase.css';

interface Props {
  addPhrase: (text: string) => void,
  setSearchText: Dispatch<SetStateAction<string>>
}

function AddPhrase({ addPhrase, setSearchText }: Props) {
  const [text, setText] = useState<string>('')

  const handleAddPhrase = () => {
    if (text && text.trim() !== '') {
      addPhrase(text.trim())
      setText('')
      setSearchText('')
    }
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement> | undefined) => {
    if (event?.key === 'Enter') {
      handleAddPhrase()
    }
  }

  return <>
    <Box display="flex" alignItems="center">
      <TextField
        data-testid="add-phrase-input"
        label="Add phrase"
        variant="outlined"
        margin="normal"
        className="add-phrase-input"
        inputProps={{ maxLength: 100 }}
        required
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        id="add-phrase-input"
      />
      <label htmlFor="add-phrase-input">
        <AddCircleOutlined data-testid="add-phrase-button" 
          onClick={handleAddPhrase} 
          className="add-phrase-button"
          aria-label="Add phrase"
        />
      </label>
    </Box>
  </>
}

export default AddPhrase