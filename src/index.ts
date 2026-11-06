import type { InstructionPair, Instruction, Heading } from './input-layer-types'
import { getUserInput } from './get-user-input'


async function devParrot(): Promise<void> {
    const userInput: InstructionPair[] = await getUserInput();
    console.log(userInput);
}

devParrot().then(()=>console.log('finished'))