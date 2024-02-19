"use client"

interface TileProps {
    player: string
    value: string
    className?: string
    onClick: () => void
}

export const Tile = ({ player, value, className, onClick }: TileProps) => {
    let hoverPlayer = null

    if (value === null && player !== null) {
        hoverPlayer = `${player.toLocaleLowerCase()}-hover`
    }

    return (
        <div onClick={onClick} className={`tile ${className} ${hoverPlayer}`}>
            {value}
        </div>
    )
}