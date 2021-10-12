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
    // ballot
    // post /decrypt-shares
    decryptSharesBallot = decryptSharesBallot;

    // guardian
    // get guardian - coded
    //  {{guardian-url}}/api/{{version}}/guardian?guardian_id=guardian_1
    guardianGet = getGuardian;

    // get public-keys
    //  {{guardian-url}}/api/{{version}}/guardian/public-keys?guardian_id=guardian_1
    guardianPublicKeys = getGuardianPublicKeys;

    // post guardian (make guardian) - working
    //  {{guardian-url}}/api/{{version}}/guardian/backup
    //  guardian in body
    guardianCreate = createGuardian;

    // post backup
    //  data in body
    guardianBackup = backupGuardian;

    // post backup/verify
    //  data in body
    guardianBackupVerification = backupVerificationGuardian;

    // post challege
    //  data in body
    guardianBackupChallenge = backupChallengeGuardian;

    // post challenge/verity
    //  data in body
    guardianVerifyChallenge = verifyChallengeGuardian;

    // post find - working
    //  data in body
    guardianFind = getUsersWithGuardianRole;

    // tally
    // get decrypt-share
    //      election_id: str, tally_name: str,
    tallyDecryptShare = decryptShareTally;

    // post decrypt-share
    //  data in body
    tallyDecryptSharePost = decryptSharePostTally;
}
