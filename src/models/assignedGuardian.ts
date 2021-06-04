import Guardian from './guardian';

export default interface AssignedGuardian extends Guardian {
    color: string;
    sequenceOrder: number;
}
