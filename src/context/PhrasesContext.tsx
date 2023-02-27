import React, { createContext, useState } from "react"

interface PhrasesProviderProps {
    children: React.ReactNode
};

export interface IPhrase {
    id: number
    text: string
}

export interface PhrasesContextValue {
    phrases: IPhrase[]
    addPhrase: (text: string) => void
    removePhrase: (id: number) => void
}

export const PhrasesContext = createContext<PhrasesContextValue>({
    phrases: [],
    addPhrase: () => { },
    removePhrase: () => { },
})

export const PhrasesProvider: React.FC<{ children: React.ReactNode }> = ({ children }: PhrasesProviderProps) => {
    const [phrases, setPhrases] = useState<IPhrase[]>([])

    const addPhrase = (text: string) => {
        const newPhrase: IPhrase = { id: Date.now(), text }
        setPhrases([...phrases, newPhrase])
    }

    const removePhrase = (id: number) => {
        setPhrases(phrases.filter((phrase) => phrase.id !== id))
    }

    return (
        <PhrasesContext.Provider value={{ phrases, addPhrase, removePhrase }}>
            {children}
        </PhrasesContext.Provider>
    )
}