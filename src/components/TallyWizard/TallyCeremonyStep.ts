enum TallyCeremonyStep {
    Instructions = 0,
    DownloadTally = 1,
    DecryptTallyShare = 2,
    UploadTallyShare = 3,
    DecryptMissing = 4,
    UploadMissing = 5,
    CombineShares = 6,
    TallyComplete = 7,
}

export default TallyCeremonyStep;
