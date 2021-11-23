/**
 * @enum {number}
 */
enum KeyCeremonyStep {
    Instructions = 0,
    MeetGuardians = 1,
    CreateKeyPair = 2,
    SharePublicKey = 3,
    CreateBackups = 4,
    ShareBackups = 5,
    VerifyBackups = 6,
    CombineKeys = 7,
    Complete = 8,
}

export default KeyCeremonyStep;
