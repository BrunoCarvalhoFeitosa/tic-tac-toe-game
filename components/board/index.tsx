"use client"
import { Tile } from "@/components/tile"
import { Strike } from "@/components/strike"

interface TileProps {
    player: string
    tiles: Array<string>
    strikeClass: string
    handleTileClick: (index: string) => void
}

export const Board = ({ player, tiles, strikeClass, handleTileClick }: TileProps) => {
    return (
        <div className="flex flex-col justify-center items-center h-full">
            <div className="relative overflow-hidden">
                <div className="board">
                    <Tile
                        player={player}
                        value={tiles[0]}
                        className="right-border bottom-border"
                        onClick={() => handleTileClick("0")}
                    />
                    <Tile
                        player={player}
                        value={tiles[1]}
                        className="right-border bottom-border"
                        onClick={() => handleTileClick("1")}
                    />
                    <Tile
                        player={player}
                        value={tiles[2]}
                        className="bottom-border"
                        onClick={() => handleTileClick("2")}
                    />
                    <Tile
                        player={player}
                        value={tiles[3]}
                        className="right-border bottom-border"
                        onClick={() => handleTileClick("3")}
                    />
                    <Tile
                        player={player}
                        value={tiles[4]}
                        className="right-border bottom-border"
                        onClick={() => handleTileClick("4")}
                    />
                    <Tile
                        player={player}
                        value={tiles[5]}
                        className="bottom-border"
                        onClick={() => handleTileClick("5")}
                    />
                    <Tile
                        player={player}
                        value={tiles[6]}
                        className="right-border"
                        onClick={() => handleTileClick("6")}
                    />
                    <Tile
                        player={player}
                        value={tiles[7]}
                        className="right-border"
                        onClick={() => handleTileClick("7")}
                    />
                    <Tile
                        player={player}
                        value={tiles[8]}
                        onClick={() => handleTileClick("8")}
                    />
                </div>
                <div>
                    <Strike strikeClass={strikeClass} />
                </div>
            </div>
        </div>
    )
}