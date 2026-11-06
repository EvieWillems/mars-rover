import type { Heading, Instruction, Position } from './input-layer-types'
import { HEADINGS, isValidPosition } from './input-layer-types'


export class Rover {
    constructor(
        readonly name: string,
        public position: Position,
        public targetPosition: Position,
        public instructSet: Instruction[],
        public status: 'OK'|'not responding',
        public battery: number
    )
    
    {}

    setTargetPosition(target:any):void {
        if (isValidPosition(target)) {
            this.targetPosition = target;
        };
    }

    rotate90Degrees(direction: string):void {
        let dirAdjust: number = 0
        if (String(direction).toUpperCase() === 'R') {
            dirAdjust = 1;
        } else if (String(direction).toUpperCase() === 'L') {
            dirAdjust = -1
        } else {
            throw('Error: Invalid direction')
        };
        let newHeading: Heading = HEADINGS[(HEADINGS.indexOf(this.position.heading)+dirAdjust)%4]
        let newPosition: Position = {
            x: this.position.x,
            y: this.position.y,
            heading: newHeading
        }
        if (isValidPosition(newPosition)) {
            this.position = newPosition;
        }
    }

    // executeSingleInstruction

}