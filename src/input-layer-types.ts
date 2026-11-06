
export const INSTRUCTIONS = ['L','R','M'] as const;

export const HEADINGS = ['N','E','S','W'] as const;

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

export function isValidPosition(candidate:any):candidate is Position {
    const candKeys = []
    if (Object.keys(candidate).length > 0) {
        for (const k of Object.keys(candidate)) {
            candKeys.push(k);
            console.log(candKeys)
        };
    };
    if (candKeys.includes('x') && candKeys.includes('y') && candKeys.includes('heading')) {
        if (Number.isInteger(parseInt(candidate.x)) && Number.isInteger(parseInt(candidate.y))) {
            if (HEADINGS.includes(candidate.heading.toUpperCase())) {
                return true;
            };
        };
    };
    return false;
}