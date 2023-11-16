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
        if (!input) {
            set((state) => ({
                card: {
                    ...state.card,
                    numbers: "XXXX-XXXX-XXXX-XXXX"
                }
            }))
        } else {
            set((state) => ({
                card: {
                    ...state.card,
                    numbers: input
                }
            }))
        }
    },
    setCardHolder: (input: string) => {
        if (!input) {
            set((state) => ({
                card: {
                    ...state.card,
                    cardHolder: "XXXX XXXX"
                }
            }))
        } else {
            set((state) => ({
                card: {
                    ...state.card,
                    cardHolder: input
                }
            }))
        }
    },
    setExpiresMonth: (input: string) => {
        if (input == "0") {
            set((state) => ({
                card: {
                    ...state.card,
                    expiresMonth: "XX"
                }
            }))
        } else {
            set((state) => ({
                card: {
                    ...state.card,
                    expiresMonth: input
                }
            }))
        }
    },
    setExpiresYear: (input: string) => {
        if (input == "0") {
            set((state) => ({
                card: {
                    ...state.card,
                    expiresYear: "XX"
                }
            }))
        } else {
            set((state) => ({
                card: {
                    ...state.card,
                    expiresYear: input.slice(2)
                }
            }))
        }
    },
    setCVV: (input: string) => {
        if (!input) {
            set((state) => ({
                card: {
                    ...state.card,
                    cvv: "XXX"
                }
            }))
        } else {
            set((state) => ({
                card: {
                    ...state.card,
                    cvv: input
                }
            }))
        }
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