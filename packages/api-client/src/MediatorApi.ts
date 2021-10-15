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
} from './server/ballots';
import {
    closeElection,
    findElection,
    getConstants,
    getElection,
    makeContextElection,
    openElection,
    publishElection,
    putElection,
} from './server/elections';
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
} from './server/keyCeremony';
import { findKeyGuardians, getGuardians, postGuardians, putGuardians } from './server/guardians';
import { getManifest, findManifest, putManifest, validateManifest } from './server/manifest';
import {
    decryptShareTally,
    decryptSharePostTally,
    decryptTally,
    findTally,
    findTallyDecrypt,
    getTally,
    postTally,
    submitShareTally,
} from './server/tally';

export default class MediatorApi {
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

    putCeremony = putKeyCeremony;

    getKeyCeremonyState = getKeyCeremonyState;

    findKeyCeremonies = findKeyCeremonies;

    openKeyCeremony = openKeyCeremony;

    closeKeyCeremony = closeKeyCeremony;

    challengeKeyCeremony = challengeKeyCeremony;

    challengeVerifyKeyCeremony = challengeVerifyKeyCeremony;

    cancelKeyCeremony = cancelKeyCeremony;

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

    submitShareTally = submitShareTally;
}
