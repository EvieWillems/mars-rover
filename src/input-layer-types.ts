
export const INSTRUCTIONS = ['L','R','M']

export const HEADINGS = ['N','S','E','W']

export type Instruction = (typeof INSTRUCTIONS)[number]

export type Heading = (typeof HEADINGS)[number]

export interface Position {
    readonly x: number,
    readonly y: number,
    readonly heading: Heading
}

export interface PlateauBoundary {
    readonly x: number,
    readonly y: number
}

