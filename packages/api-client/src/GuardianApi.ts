import {
    createGuardian,
    getGuardian,
    getGuardianPublicKeys,
    backupGuardian,
    backupVerificationGuardian,
    backupChallengeGuardian,
    verifyChallengeGuardian,
} from './server/guardians';
import { getUsersWithGuardianRole } from './server/users';
import { decryptSharesBallot } from './server/ballots';
import { decryptShareTally, decryptSharePostTally } from './server/tally';

export default class GuardianApi {
    decryptSharesBallot = decryptSharesBallot;

    guardianGet = getGuardian;

    guardianPublicKeys = getGuardianPublicKeys;

    guardianCreate = createGuardian;

    guardianBackup = backupGuardian;

    guardianBackupVerification = backupVerificationGuardian;

    guardianBackupChallenge = backupChallengeGuardian;

    guardianVerifyChallenge = verifyChallengeGuardian;

    guardianFind = getUsersWithGuardianRole;

    tallyDecryptShare = decryptShareTally;

    tallyDecryptSharePost = decryptSharePostTally;
}
