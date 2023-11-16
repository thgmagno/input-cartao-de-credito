'use client'

import useStore from "@/store"
import BackCard from "./CardSides/Back"
import FrontCard from "./CardSides/Front"

export default function CreditCard() {
    const { card } = useStore()

    return (
        <div className="[perspective:1000px]">
            <div className={`[transform-style:preserve-3d] transition-all duration-300 ${card.side === "front" ? '[transform:rotateY(0)]' : '[transform:rotateY(180deg)]'}`}>
                {card.side === "front" ? (
                    <div className="inset-0">
                        <FrontCard />
                    </div>
                ) : (
                    <div className="inset-0">
                        <BackCard />
                    </div>
                )}
            </div>
        </div>
    )
}