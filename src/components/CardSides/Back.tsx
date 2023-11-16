'use client'

import useStore from "@/store"
import { brand } from "../../../public/images/brand"

export default function BackCard() {
    const { card } = useStore()

    return (
        <section className="credit-card flex flex-col justify-between rounded-xl shadow-lg w-[280px] h-[176px] bg-gradient-to-r from-neutral-600 to-neutral-950 [transform:rotateY(180deg)]">
            <div className="bg-neutral-400 h-10 mt-8" />
            <span className="ring-2 ring-indigo-500 rounded-md w-14 p-1 text-white self-end mr-6 text-center">{card.cvv}</span>
            <div className="[transform:rotateY(180deg)] mb-4">
                {brand}
            </div>
        </section>
    )
}