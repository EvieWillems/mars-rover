import type { InstructionPair, Position, Instruction, Heading } from './input-layer-types'
import { INSTRUCTIONS, HEADINGS, isValidPosition } from './input-layer-types'


export function parseInstructionPair(candidate:string[]): InstructionPair {

    const landing: any[] = candidate[0].split(' ')
    const instructs: any[] = candidate[1].split('')
    let landingOut: any = {x:landing[0],y:landing[1],heading:landing[2]}
    if (isValidPosition(landingOut)) {
            landingOut.x = parseInt(landing[0]);
            landingOut.y = parseInt(landing[1]);
            landingOut.heading = landing[2].toUpperCase();
        } else {
            {throw('Invalid landing coords/heading')};
        };
    
    const instructsOut: Instruction[] = instructs.filter((i) => {
        if (INSTRUCTIONS.includes(i)) {return true} else {throw('Invalid instructions')};
    })

    return {
        landing: landingOut,
        instructionLine: instructsOut
    }

}

