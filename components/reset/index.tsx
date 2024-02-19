"use client"
import { GameState } from "@/utils"

interface ResetProps {
    gameState: GameState
    handleReset: () => void
}

export const Reset = ({ gameState, handleReset }: ResetProps) => {
    if (gameState === GameState.inProgress) {
        return null
    }

    return (
        <button onClick={handleReset} className="reset-button">
            Recomeçar
        </button>
    )
}