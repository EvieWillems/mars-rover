import type { Heading, Instruction, Position } from './input-layer-types'
import { HEADINGS, isValidPosition, newPosition } from './input-layer-types'


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
        let newHeading: Heading = HEADINGS[(HEADINGS.indexOf(this.position.heading)+dirAdjust)%4];
        this.position = newPosition(this.position.x,this.position.y,newHeading);
    }

    moveForward():void {
        let newPos: number[] = [
            this.position.x,
            this.position.y
        ]
        if (this.position.heading === 'N') {
            newPos[1] += 1;
        } else if (this.position.heading === 'S') {
            newPos[1] -= 1;
        } else if (this.position.heading === 'E') {
            newPos[0] -= 1;
        } else if (this.position.heading === 'W') {
            newPos[0] += 1;
        };
        this.position = newPosition(newPos[0],newPos[1],this.position.heading);
    }

}