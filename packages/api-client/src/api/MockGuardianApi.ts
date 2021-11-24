import {
    postGuardian,
    getGuardian,
    getGuardianPublicKeys,
    backupGuardian,
    backupVerificationGuardian,
    backupChallengeGuardian,
    verifyChallengeGuardian,
    findGuardians,
} from '../mocks/guardians';
import { decryptSharesBallot } from '../mocks/ballots';
import { decryptShareTally, decryptSharePostTally } from '../mocks/tally';
import { ElectionGuardGuardianApiClient } from './Api';
import { getManifestPreview } from '../mocks/electionSetup';

export default class MockGuardianApi implements ElectionGuardGuardianApiClient {
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
