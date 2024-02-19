"use client"
import { useEffect, useState } from "react"
import { GameState } from "@/utils"
import { Board } from "@/components/board"
import { GameOver } from "@/components/game-over"
import { Reset } from "@/components/reset"

const PLAYER_X = "X"
const PLAYER_O = "O"

const winningCombinations = [
    {combo: [0, 1, 2], strikeClass: "strike-row-1"},
    {combo: [3, 4, 5], strikeClass: "strike-row-2"},
    {combo: [6, 7, 8], strikeClass: "strike-row-3"},
    
    {combo: [0, 3, 6], strikeClass: "strike-column-1"},
    {combo: [1, 4, 7], strikeClass: "strike-column-2"},
    {combo: [2, 5, 8], strikeClass: "strike-column-3"},
    
    {combo: [0, 4, 8], strikeClass: "strike-diagonal-1"},
    {combo: [2, 4, 6], strikeClass: "strike-diagonal-2"},
]

export const Controller = () => {
    const [tiles, setTiles] = useState<Array<string>>(Array(9).fill(null))
    const [player, setPlayer] = useState<string>(PLAYER_X)
    const [gameState, setGameState] = useState(GameState.inProgress)
    const [strikeClass, setStrikeClass] = useState<string>("")

    const handleTileClick = (index: number) => {
        if (gameState !== GameState.inProgress) {
            return
        }

        if (tiles[index] !== null) {
            return
        } 
 
        const newTiles = [...tiles]
        newTiles[index] = player

        setTiles(newTiles)

        if (player === PLAYER_X) {
            setPlayer(PLAYER_O)
        } else {
            setPlayer(PLAYER_X)
        }
    }

    const handleReset = () => {
        setGameState(GameState.inProgress)
        setTiles(Array(9).fill(null))
        setPlayer(PLAYER_X)
        setStrikeClass("")
    }

    const checkWinner = (
        tiles: Array<string>,
        setStrikeClass: (strikeClass: string) => void,
        setGameState: (gameState: GameState) => void
    ) => {
        for (const { combo, strikeClass } of winningCombinations) {
            const tileValue1 = tiles[combo[0]]
            const tileValue2 = tiles[combo[1]]
            const tileValue3 = tiles[combo[2]]

            if (tileValue1 !== null && tileValue1 === tileValue2 && tileValue1 === tileValue3) {
                setStrikeClass(strikeClass)

                if (tileValue1 === PLAYER_X) {
                    setGameState(GameState.playerXWins)
                } else {
                    setGameState(GameState.playerOWins)
                }

                return
            }
        }

        const areAllTilesFilledIn = tiles.every((tile) => tile !== null)

        if (areAllTilesFilledIn) {
            setGameState(GameState.draw)
        }
    }

    useEffect(() => {
        checkWinner(tiles, setStrikeClass, setGameState)
    }, [tiles, gameState])

    return (
        <div className="flex flex-col justify-center items-center h-full">
            <Board
                player={player}
                tiles={tiles}
                strikeClass={strikeClass}
                handleTileClick={handleTileClick}
            />
            <GameOver
                gameState={gameState}
            />
            <Reset
                gameState={gameState}
                handleReset={handleReset}
            />
        </div>
    )
}