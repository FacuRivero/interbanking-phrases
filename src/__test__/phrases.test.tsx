import { fireEvent, render, screen } from '@testing-library/react'
import App from '../App'
import { PhrasesProvider } from '../context/PhrasesContext'
import AddPhrase from '../components/AddPhrase'
import PhrasesList from '../components/PhrasesList'

describe('Phrases', () => {
    test('renders the app header', () => {
        render(<App />)
        const headerElement = screen.getByRole('heading', { name: 'INTERBANKING PHRASES' })
        expect(headerElement).toBeInTheDocument()
    })

    test('AddPhrase component adds a new phrase when submitting the form', () => {
        const addPhrase = jest.fn()
        const setSearchText = jest.fn()

        render(
            <AddPhrase addPhrase={addPhrase} setSearchText={setSearchText} />
        )

        // eslint-disable-next-line testing-library/no-node-access
        const input = screen.getByTestId('add-phrase-input').querySelector('input')
        const button = screen.getByTestId('add-phrase-button')
        if(input) fireEvent.change(input, { target: { value: 'Hello world' } })
        fireEvent.click(button)

        expect(addPhrase).toHaveBeenCalledWith('Hello world')
    })

    test('PhrasesList component removes a phrase when clicking the Delete button', () => {
        const mockHandleRemovePhrase = jest.fn();
    
        const phrasesToRender = [
            { id: 1, text: 'phrase 1' },
            { id: 2, text: 'phrase 2' },
            { id: 3, text: 'phrase 3' },
        ];
        render(
            <PhrasesList phrasesToRender={phrasesToRender} handleRemovePhrase={mockHandleRemovePhrase} />
        );
        const deleteButton = screen.getByTestId('delete-button-2');
        fireEvent.click(deleteButton);
        expect(mockHandleRemovePhrase).toHaveBeenCalledWith(2);
    });

    test('App component renders a message when no phrases have been added yet', () => {
        render(<App />)
        expect(screen.getByText(/No phrases added yet/i)).toBeInTheDocument()
    })

    test('App component renders a list of phrases when at least one has been added', () => {
        render(<PhrasesProvider>
            <App />
        </PhrasesProvider>)

        // eslint-disable-next-line testing-library/no-node-access
        const input = screen.getByTestId('add-phrase-input').querySelector('input')
        const addButton = screen.getByTestId('add-phrase-button')

        if (input) fireEvent.change(input, { target: { value: 'Hello world' } })
        fireEvent.click(addButton)
        const phrase = screen.getByText(/Hello world/i)
        expect(phrase).toBeInTheDocument()
    })
})