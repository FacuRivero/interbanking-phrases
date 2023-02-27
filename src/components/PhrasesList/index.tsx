
import { RemoveCircle } from '@mui/icons-material'
import { Grid, IconButton, ListItem, ListItemText } from '@mui/material'
import { IPhrase } from '../../context/PhrasesContext'
import './PhrasesList.css'

interface Props {
  phrasesToRender: IPhrase[],
  handleRemovePhrase: (id: number) => void
}

function PhrasesList({ phrasesToRender, handleRemovePhrase }: Props) {
  return <Grid container spacing={2}>    
    {
      phrasesToRender.map((phrase) => (
        <Grid item xs={12} sm={6} md={4} key={phrase.id}>
          <ListItem
            className="phrase-list-item"
            disableGutters
          >
            <ListItemText 
              primaryTypographyProps={{ className: 'list-item-text' }}
              primary={phrase.text}
            />
            <IconButton
              onClick={() => handleRemovePhrase(phrase.id)}
              aria-label="Remove phrase"
              className="delete-button"
              data-testid={`delete-button-${phrase.id}`}
            >
              <RemoveCircle />
            </IconButton>
          </ListItem>
        </Grid>
      ))
    }
  </Grid>
}

export default PhrasesList