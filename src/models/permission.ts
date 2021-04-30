enum Permission {
    ManageUsers = 'users:edit',
    ViewUsers = 'users:view',

    SetupElection = 'election:edit',
    ViewElection = 'election:view',

    ManageElectionList = 'election_list:edit',
    ViewElectionList = 'election_list:read',

    BeginTallyCeremony = 'tally_ceremony:edit',
    JoinTallyCeremony = 'tally_ceremony:join',
    ViewTallyCeremony = 'tally_ceremony:view',

    BeginKeyCeremony = 'key_ceremony:edit',
    JoinKeyCeremony = 'key_ceremony:join',
    ViewKeyCeremony = 'key_ceremony:view',
}

export default Permission;
