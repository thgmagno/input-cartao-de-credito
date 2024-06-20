'use client'

import useStore from "@/store"
import { getMonths, getYears } from "@/utils"

export default function Form() {
    const { card, setNumbers, setCardHolder, setExpiresMonth, setExpiresYear, setCVV, flipCard } = useStore()
    const arrMonths = getMonths()
    const arrYears = getYears()

    return (
        <form className="form w-full">
            <h1 className="text-xl font-bold">Digite os dados do seu cartão</h1>
            <label htmlFor="number">
                <p>Número do cartão</p>
                <input
                    type="text"
                    value={card.numbers}
                    className={`${card.numbers.includes("XXXX") ? 'text-zinc-300' : ''}`}
                    onChange={(ev) => setNumbers(ev.target.value)}
                />
            </label>
            <label htmlFor="cardHolder">
                <p>Nome impresso no cartão</p>
                <input
                    type="text"
                    id="cardHolder"
                    value={card.cardHolder}
                    className={`${card.cardHolder === "XXXX XXXX" ? 'text-zinc-300' : ''}`}
                    onChange={(ev) => setCardHolder(ev.target.value)}
                />
            </label>
            <label htmlFor="month" className="grid grid-cols-2 gap-2">
                <p className="col-span-2">Validade</p>
                <select id="month" onChange={(ev) => setExpiresMonth(ev.target.value)}>
                    <option value="0">mm</option>
                    {
                        arrMonths.map((month) => (
                            <option value={month} key={month}>
                                {String(month).padStart(2, "0")}
                            </option>
                        ))
                    }
                </select>
                <select onChange={(ev) => setExpiresYear(ev.target.value)}>
                    <option value="0">yy</option>
                    {
                        arrYears.map((year) => (
                            <option value={year} key={year}>
                                {String(year).padStart(2, "0")}
                            </option>
                        ))
                    }
                </select>
            </label>
            <label htmlFor="cvv">
                <p>Código de verificação</p>
                <input
                    type="text"
                    id="cvv"
                    onFocus={() => flipCard()}
                    onBlur={() => flipCard()}
                    value={card.cvv}
                    className={`${card.cvv.includes("XXX") ? 'text-zinc-300' : ''}`}
                    onChange={(ev) => setCVV(ev.target.value)}
                />
            </label>
        </form>
    )
}