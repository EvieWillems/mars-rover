
export const INSTRUCTIONS = ['L','R','M']

export const HEADINGS = ['N','S','E','W']

export type Instruction = (typeof INSTRUCTIONS)[number]

export type Heading = (typeof HEADINGS)[number]