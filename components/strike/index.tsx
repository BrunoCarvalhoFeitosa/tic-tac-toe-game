"use client"

interface StrikeProps {
    strikeClass: string
}

export const Strike = ({ strikeClass }: StrikeProps) => {
    return (
        <div className={`strike ${strikeClass}`} />
    )
}