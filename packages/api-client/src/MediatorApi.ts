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

export default class MediatorApi {
    // ballot
    // get ballot
    // election_id: str, ballot_id: str
    getBallot = getBallot;

    // get inventory
    getBallotInventory = getBallotInventory;

    // post find
    findBallots = findBallots;

    // post cast
    castBallots = castBallots;

    // post spoil
    spoilBallots = spoilBallots;

    // put submit
    submitBallots = submitBallots;

    // post validate
    validateBallot = validateBallot;

    // ballot - decrypt
    // post decrypt
    decryptBallot = decryptBallot;

    // ballot - encrypt
    // post encrypt
    encryptBallot = encryptBallot;

    // election
    // get constants
    getConstants = getConstants;

    // get election
    getElection = getElection;

    // put election
    putElection = putElection;

    // post find
    findElection = findElection;

    // post open
    openElection = openElection;

    // post close
    closeElection = closeElection;

    // post publish
    publishElection = publishElection;

    // post context
    makeContextElection = makeContextElection;

    // key
    // key - admin
    // get ceremony
    getKeyCeremonies = getKeyCeremonies;

    // put ceremony
    putCeremony = putKeyCeremony;

    // get ceremony/state
    getKeyCeremonyState = getKeyCeremonyState;

    // post ceremony/find
    findKeyCeremonies = findKeyCeremonies;

    // post ceremony/open
    openKeyCeremony = openKeyCeremony;

    // post ceremony/close
    closeKeyCeremony = closeKeyCeremony;

    // post ceremony/challenge
    challengeKeyCeremony = challengeKeyCeremony;

    // post ceremony/chalenge/verify
    challengeVerifyKeyCeremony = challengeVerifyKeyCeremony;

    // post ceremony/cancel
    cancelKeyCeremony = cancelKeyCeremony;

    // get ceremony/joint_key
    getJointKeyKeyCeremony = getJointKeyKeyCeremony;

    // post ceremony/combine
    combineKeyCeremony = combineKeyCeremony;

    // post ceremony/publish
    publishKeyCeremony = publishKeyCeremony;

    // key - ceremony
    // post guardian/announce
    announceGuardianKeyCeremony = announceGuardianKeyCeremony;

    // post guardian/backup
    backupGuardianKeyCeremony = backupGuardianKeyCeremony;

    // post guardian/verify
    verifyGuardianKeyCeremony = verifyGuardianKeyCeremony;

    // post guardian/challenge
    challengeGuardianKeyCeremony = challengeGuardianKeyCeremony;

    // guardian
    // get guardian
    getGuardians = getGuardians;

    // put guardian
    putGuardians = putGuardians;

    // post guardian
    postGuardians = postGuardians;

    // post find
    findKeyGuardians = findKeyGuardians;

    // manifest
    // get manifest
    getManifest = getManifest;

    // put manifest
    putManifest = putManifest;

    // post find
    findManifest = findManifest;

    // post validate
    validateManifest = validateManifest;

    // tally
    // get tally
    // post tally
    // post find
    // post decrypt

    // tally - decrypt
    // get tally-derypt
    // post submit-share
    // post find
}
