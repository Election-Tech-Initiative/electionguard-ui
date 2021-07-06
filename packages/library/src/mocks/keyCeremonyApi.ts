import AssignedGuardian from '../models/assignedGuardian';
import { KeyCeremony, KeyCeremonyStatus } from '../models/keyCeremony';
import { KeyCeremonyApi } from '../models/KeyCeremonyApi';
import TaskStatus from '../models/taskStatus';
import { getKeyCeremonyGuardians } from './keyCeremony';

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export default class MockKeyCeremonyApi implements KeyCeremonyApi {
    state: KeyCeremony = {
        id: 'key-ceremony-1',
        status: KeyCeremonyStatus.Active,
        name: 'General Election',
        numberOfGuardians: 5,
        quorum: 3,
        guardians: getKeyCeremonyGuardians(),
        dateCreated: new Date(),
    };

    generateElectionKeyPair = async (guardian: AssignedGuardian): Promise<void> => {
        await delay(1000);
        const assignedGuardian = this.state.guardians.find((g) => g.id === guardian.id);
        if (assignedGuardian) {
            assignedGuardian.keypairCreated = TaskStatus.Complete;
        }
    };

    shareElectionPublicKey = async (guardian: AssignedGuardian): Promise<void> => {
        await delay(1000);
        const assignedGuardian = this.state.guardians.find((g) => g.id === guardian.id);
        if (assignedGuardian) {
            assignedGuardian.publicKeyShared = TaskStatus.Complete;
        }
    };

    generateElectionPartialKeyBackup = async (guardian: AssignedGuardian): Promise<void> => {
        await delay(1000);
        const assignedGuardian = this.state.guardians.find((g) => g.id === guardian.id);
        if (assignedGuardian) {
            assignedGuardian.backupsCreated = TaskStatus.Complete;
        }
    };

    sharePartialKeyBackups = async (guardian: AssignedGuardian): Promise<void> => {
        await delay(1000);
        const assignedGuardian = this.state.guardians.find((g) => g.id === guardian.id);
        if (assignedGuardian) {
            assignedGuardian.backupsShared = TaskStatus.Complete;
        }
    };

    verifyPartialKeyBackup = async (guardian: AssignedGuardian): Promise<void> => {
        await delay(1000);
        const assignedGuardian = this.state.guardians.find((g) => g.id === guardian.id);
        if (assignedGuardian) {
            assignedGuardian.backupsShared = TaskStatus.Complete;
        }
    };

    getKeyCeremonyState = async (): Promise<KeyCeremony> => {
        await delay(1);
        return this.state;
    };

    combineKeys = async (): Promise<void> => {
        await delay(1000);
        this.state.status = KeyCeremonyStatus.Complete;
    };

    start = async (): Promise<void> => {
        await delay(1000);
        this.state.status = KeyCeremonyStatus.Active;
    };

    cancel = async (): Promise<void> => {
        await delay(1000);
        this.state.status = KeyCeremonyStatus.Canceled;
    };
}
