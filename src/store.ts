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
    card: {
        numbers: "XXXX-XXXX-XXXX-XXXX",
        cardHolder: "XXXX XXXX",
        expiresMonth: "XX",
        expiresYear: "XX",
        cvv: "XXX",
        side: 'front'
    },
    setNumbers: (input: string) => {
        const numericInput = input.replace(/\D/g, '')

        const groupedNumbers = numericInput.match(/.{1,4}/g)

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
        const numericInput = input.replace(/\D/g, '')

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