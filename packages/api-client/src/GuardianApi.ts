import {
    postGuardian,
    getGuardian,
    getGuardianPublicKeys,
    backupGuardian,
    backupVerificationGuardian,
    backupChallengeGuardian,
    verifyChallengeGuardian,
    findGuardians,
} from './server/guardians';
import { decryptSharesBallot } from './server/ballots';
import { decryptShareTally, decryptSharePostTally } from './server/tally';
import { ElectionGuardGuardianApiClient } from './Api';
import { getManifestPreview } from './server/electionSetup';

export default class GuardianApi implements ElectionGuardGuardianApiClient {
    decryptSharesBallot = decryptSharesBallot;

    getGuardian = getGuardian;

    getGuardianPublicKeys = getGuardianPublicKeys;

    postGuardian = postGuardian;

    backupGuardian = backupGuardian;

    backupVerificationGuardian = backupVerificationGuardian;

    backupChallengeGuardian = backupChallengeGuardian;

    verifyChallengeGuardian = verifyChallengeGuardian;

    findGuardians = findGuardians;

    decryptShareTally = decryptShareTally;

    decryptSharePostTally = decryptSharePostTally;

    getManifestPreview = getManifestPreview;
}
