import type { InstructionPair, Instruction, Heading } from './input-layer-types'
import { INSTRUCTIONS,HEADINGS } from './input-layer-types'
import { parseInstructionPair } from './parse-input'

const readline = require('node:readline');


export async function getUserInput(): Promise<InstructionPair[]> {
    const instructsArr: InstructionPair[] = [];
    let input: String|null = '';
        const currentInstructs: string[] = [];
        input = await promptUser('Type X to execute, Q to quit');
        if (input != 'Q') {
            if (input != 'X') {
                input = await promptUser('Input landing details: ');
                if (input) {currentInstructs.push(input.toString())};
                if (input != 'Q') {
                    input = await promptUser('Input rover instructions: ');
                    if (input && input != 'Q') {
                        currentInstructs.push(input.toString());
                        try {
                            instructsArr.push(parseInstructionPair(currentInstructs))
                        } catch {
                            console.error(`Invalid instructions: ${currentInstructs}`)
                        }
                    }
                }
            } else {
                return instructsArr
            }
        }

    return instructsArr; // Should actually be quit
}

// export function compileInstructions(candidateInstructs:any[]): InstructionPair {
//     try {
//         const instructsOut: InstructionPair = {
//             landing: candidateInstructs[0],
//             instructionLine: candidateInstructs[1] 
//         };
//         return instructsOut;
//     } catch {
//         throw Error;
//     }
// };

export async function promptUser(message:string): Promise<string|null> {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    return new Promise(resolve => rl.question(message,
        (i:string|null) => {
            rl.close();
            resolve(i)
        }))
}
