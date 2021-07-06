import Guardian from './guardian';

export default interface AssignedGuardian extends Guardian {
    sequenceOrder: number;
}
