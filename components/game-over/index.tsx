import { useEffect } from "react"
import { toast } from "react-toastify"
import { GameState } from "@/utils"

interface GameOverProps {
  gameState: GameState
}

export const GameOver: React.FC<GameOverProps> = ({ gameState }) => {
    useEffect(() => {
        switch (gameState) {
            case GameState.playerOWins:
                toast('O jogador "O" ganhou.')
                break
            case GameState.playerXWins:
                toast('O jogador "X" ganhou.')
                break
            case GameState.draw:
                toast('Empate.')
                break
            default:
                break
        }
    }, [gameState])

    return <></>
}