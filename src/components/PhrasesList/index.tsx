
import { RemoveCircle } from '@mui/icons-material'
import { IconButton, ListItem, ListItemText } from '@mui/material'
import { IPhrase } from '../../context/PhrasesContext'
import './PhrasesList.css'

interface Props {
  phrasesToRender: IPhrase[],
  handleRemovePhrase: (id: number) => void
}

function PhrasesList({ phrasesToRender, handleRemovePhrase }: Props) {
  return <>    
    {
      phrasesToRender.map((phrase) => (
        <ListItem
          key={phrase.id}
          className="phrase-list-item"
          disableGutters
        >
          <ListItemText primary={phrase.text} />
          <IconButton
            onClick={() => handleRemovePhrase(phrase.id)}
            aria-label="Remove phrase"
            className="delete-button"
            data-testid={`delete-button-${phrase.id}`}
          >
            <RemoveCircle />
          </IconButton>
        </ListItem>
      ))
    }
  </>
}

export default PhrasesList