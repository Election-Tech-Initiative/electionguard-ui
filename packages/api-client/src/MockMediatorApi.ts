import {
    getBallot,
    getBallotInventory,
    findBallots,
    castBallots,
    spoilBallots,
    submitBallots,
    validateBallot,
    decryptBallot,
    encryptBallot,
} from './mocks/ballots';
import {
    closeElection,
    findElection,
    getConstants,
    getElection,
    makeContextElection,
    openElection,
    publishElection,
    putElection,
} from './mocks/elections';
import {
    announceGuardianKeyCeremony,
    backupGuardianKeyCeremony,
    cancelKeyCeremony,
    challengeGuardianKeyCeremony,
    challengeKeyCeremony,
    challengeVerifyKeyCeremony,
    closeKeyCeremony,
    combineKeyCeremony,
    findKeyCeremonies,
    getJointKeyKeyCeremony,
    getKeyCeremonies,
    getKeyCeremonyState,
    openKeyCeremony,
    publishKeyCeremony,
    putKeyCeremony,
    verifyGuardianKeyCeremony,
} from './mocks/keyCeremony';
import { findKeyGuardians, getGuardians, postGuardians, putGuardians } from './mocks/guardians';
import { getManifest, findManifest, putManifest, validateManifest } from './mocks/manifest';
import {
    decryptShareTally,
    decryptSharePostTally,
    decryptTally,
    findTally,
    findTallyDecrypt,
    getTally,
    postTally,
    postShareTally,
} from './mocks/tally';
import { ElectionGuardMediatorApiClient } from './Api';
import { postJointKey } from './mocks/jointKey';
import { getJointKeys } from './mocks/electionSetup';

export default class MockMediatorApi implements ElectionGuardMediatorApiClient {
    getBallot = getBallot;

    getBallotInventory = getBallotInventory;

    findBallots = findBallots;

    castBallots = castBallots;

    spoilBallots = spoilBallots;

    submitBallots = submitBallots;

    validateBallot = validateBallot;

    decryptBallot = decryptBallot;

    encryptBallot = encryptBallot;

    getConstants = getConstants;

    getElection = getElection;

    putElection = putElection;

    findElection = findElection;

    openElection = openElection;

    closeElection = closeElection;

    publishElection = publishElection;

    makeContextElection = makeContextElection;

    getKeyCeremonies = getKeyCeremonies;

    putKeyCeremony = putKeyCeremony;

    getKeyCeremonyState = getKeyCeremonyState;

    findKeyCeremonies = findKeyCeremonies;

    openKeyCeremony = openKeyCeremony;

    closeKeyCeremony = closeKeyCeremony;

    challengeKeyCeremony = challengeKeyCeremony;

    challengeVerifyKeyCeremony = challengeVerifyKeyCeremony;

    cancelKeyCeremony = cancelKeyCeremony;

    getJointKeys = getJointKeys;

    postJointKey = postJointKey;

    getJointKeyKeyCeremony = getJointKeyKeyCeremony;

    combineKeyCeremony = combineKeyCeremony;

    publishKeyCeremony = publishKeyCeremony;

    announceGuardianKeyCeremony = announceGuardianKeyCeremony;

    backupGuardianKeyCeremony = backupGuardianKeyCeremony;

    verifyGuardianKeyCeremony = verifyGuardianKeyCeremony;

    challengeGuardianKeyCeremony = challengeGuardianKeyCeremony;

    getGuardians = getGuardians;

    putGuardians = putGuardians;

    postGuardians = postGuardians;

    findKeyGuardians = findKeyGuardians;

    getManifest = getManifest;

    putManifest = putManifest;

    findManifest = findManifest;

    validateManifest = validateManifest;

    getTally = getTally;

    postTally = postTally;

    findTally = findTally;

    decryptTally = decryptTally;

    decryptShareTally = decryptShareTally;

    decryptSharePostTally = decryptSharePostTally;

    findTallyDecrypt = findTallyDecrypt;

    postShareTally = postShareTally;
}
