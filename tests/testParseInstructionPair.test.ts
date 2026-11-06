import { parseInstructionPair } from '../src/parse-input'
import { describe, test, expect } from 'vitest'
import type { InstructionPair, Position, Instruction, Heading } from '../src/input-layer-types'
import { parse } from 'node:path';


describe('Test parseInstructionPair', () => {

    test('Valid instruction set returns normalised instruction set', () => {
        const validInstructions: InstructionPair = {
            landing: {
                x: 1,
                y: 1,
                heading: 'N'
            },
            instructionLine: ['L','R','M']
        };
        const input: string[] = ['1 1 N','LRM'];
        expect(parseInstructionPair(input)).toEqual(validInstructions);
    });

    test('Invalid landing instructions throw error: String in coords', () => {
        const input: string[] = ['q 1 N','LRM'];
        expect(() => {parseInstructionPair(input)}).toThrow('Invalid landing coords/heading');
    });

    test('Invalid landing instructions throw error: Invalid heading', () => {
        const input: string[] = ['1 1 D','LRM'];
        expect(() => {parseInstructionPair(input)}).toThrow('Invalid landing coords/heading');
    });

    test('Invalid instructions to throw error: Unrecognised instruction', () => {
        const input: string[] = ['1 1 N','QRM'];
        expect(() => {parseInstructionPair(input)}).toThrow('Invalid instructions');
    });

});