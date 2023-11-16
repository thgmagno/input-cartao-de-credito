'use client'

import useStore from "@/store"
import { brand } from "../../../public/images/brand"

export default function FrontCard() {
    const { card } = useStore()

    return (
        <section className="credit-card flex flex-col justify-between rounded-xl p-2 shadow-lg w-[280px] h-[176px] bg-gradient-to-r from-neutral-600 to-neutral-950" style={{ userSelect: "none" }}>
            {brand}
            <div className="flex mx-6 ring-2 ring-indigo-500 rounded-md">
                <span defaultValue={card.numbers} className="text-white p-1 w-full text-center">
                    {card.numbers}
                </span>
            </div>
            <div className="grid grid-cols-2 text-xs md:text-sm overflow-hidden text-white">
                <label className="overflow-hidden">
                    <p className="font-bold">Cardholder</p>
                    <span className="truncate">
                        {card.cardHolder}
                    </span>
                </label>
                <label className="text-end">
                    <p className="font-bold">Expires</p>
                    <span className="text-end w-full">
                        {card.expiresMonth}/{card.expiresYear}
                    </span>
                </label>
            </div>
        </section>
    )
}