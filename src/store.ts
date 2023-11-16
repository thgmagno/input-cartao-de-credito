import { create } from 'zustand'

interface Card {
    numbers: string
    cardHolder: string
    expiresMonth: string
    expiresYear: string
    cvv: string
    side: 'front' | 'back'
}

interface cardState {
    card: Card
    setNumbers: (input: string) => void
    setCardHolder: (input: string) => void
    setExpiresMonth: (input: string) => void
    setExpiresYear: (input: string) => void
    setCVV: (input: string) => void
    flipCard: () => void
}

const useStore = create<cardState>((set) => ({
    // initial state
    card: {
        numbers: "XXXX-XXXX-XXXX-XXXX",
        cardHolder: "XXXX XXXX",
        expiresMonth: "XX",
        expiresYear: "XX",
        cvv: "XXX",
        side: 'front'
    },
    // methods for manipulating state
    setNumbers: (input: string) => {
        // Remove caracteres não numéricos
        const numericInput = input.replace(/\D/g, '')

        // Divide os números em grupos de 4
        const groupedNumbers = numericInput.match(/.{1,4}/g)

        // Adiciona hífens entre os grupos e limita o comprimento a 16 caracteres
        const formattedNumbers = groupedNumbers ? groupedNumbers.join('-').slice(0, 19) : ""

        set((state) => ({
            card: {
                ...state.card,
                numbers: formattedNumbers || "XXXX-XXXX-XXXX-XXXX"
            }
        }))
    },
    setCardHolder: (input: string) => {
        const formattedString = input.replace("XXXX XXXX", '').toUpperCase()
        set((state) => ({
            card: {
                ...state.card,
                cardHolder: formattedString || "XXXX XXXX"
            }
        }))
    },
    setExpiresMonth: (input: string) => {
        set((state) => ({
            card: {
                ...state.card,
                expiresMonth: input === "0" ? "XX" : input
            }
        }))
    },
    setExpiresYear: (input: string) => {
        set((state) => ({
            card: {
                ...state.card,
                expiresYear: input.slice(2) || "XX"
            }
        }))
    },
    setCVV: (input: string) => {
        // Remove caracteres não numéricos
        const numericInput = input.replace(/\D/g, '')

        // Limita o comprimento a 3 caracteres
        const formattedCVV = numericInput.slice(0, 3)

        set((state) => ({
            card: {
                ...state.card,
                cvv: formattedCVV || "XXX"
            }
        }))
    },
    flipCard: () => {
        set((state) => ({
            card: {
                ...state.card,
                side: state.card.side === 'front' ? 'back' : 'front'
            }
        }))
    }
}))

export default useStore