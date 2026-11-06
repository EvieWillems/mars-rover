
export const INSTRUCTIONS = ['L','R','M'] as const;

export const HEADINGS = ['N','S','E','W'] as const;

export type Instruction = (typeof INSTRUCTIONS)[number]

export type Heading = (typeof HEADINGS)[number]

export interface Position {
    x: number,
    y: number,
    heading: Heading
}

export interface PlateauBoundary {
    x: number,
    y: number
}

export interface InstructionPair {
    landing: Position
    instructionLine: Instruction[]
}