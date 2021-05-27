export const OverloadMessageId = 'overload';

enum MessageId {
    // App
    AppName = 'app.name',
    Placeholder = 'app.placeholder',
    AppGreeting = 'app.greeting',
    AppAbout = 'app.about',

    // Auth
    AuthLogout = 'auth.logout',

    // Menu
    MenuPrompt = 'menu.prompt',
    MenuOptionManageUsers = 'menu.option.manage_users',
    MenuOptionBeginKeyCeremony = 'menu.option.begin_key_ceremony',
    MenuOptionSetupElection = 'menu.option.setup_election',
    MenuOptionBeginTallyCeremony = 'menu.option.begin_tally_ceremony',
    MenuOptionUploadManifest = 'menu.option.upload_manifest',
    MenuOptionBuildManifest = 'menu.option.build_manifest',

    // Login Form
    LoginFormUsername = 'login_form.username',
    LoginFormPassword = 'login_form.password',
    LoginFormSubmit = 'login_form.submit',

    // Election Setup
    ElectionSetupManifestMenuTitle = 'election_setup.manifest_menu.title',
    ElectionSetupManifestMenuAbout = 'election_setup.manifest_menu.about',
    ElectionSetupManifestMenuPrompt = 'election_setup.manifest_menu.prompt',

    ElectionSetupJointKeyRetrievedTitle = 'election_setup.joint_key_retrieved.title',
    ElectionSetupJointKeyRetrievedCTA = 'election_setup.joint_key_retrieved.cta',
    ElectionSetupJointKeyRetrievedDescription = 'election_setup.joint_key_retrieved.description',
    ElectionSetupJointKeyRetreivedNext = 'election_setup.joint_key_retrieved.next',

    ElectionSetupJointKeySelectTitle = 'election_setup.joint_key_select.title',
    ElectionSetupJointKeySelectDescription = 'election_setup.joint_key_select.description',
    ElectionSetupJointKeySelectPrompt = 'election_setup.joint_key_select.prompt',
    ElectionSetupJointKeySelectNext = 'election_setup.joint_key_select.next',

    ElectionSetupManifestPreviewTitle = 'election_setup.manifest_preview.title',
    ElectionSetupManifestPreviewPropertyName = 'election_setup.manifest_preview.property.name',
    ElectionSetupManifestPreviewPropertyNumberOfContests = 'election_setup.manifest_preview.property.number_of_contests',
    ElectionSetupManifestPreviewPropertyNumberOfStyles = 'election_setup.manifest_preview.property.numberOfStyles',
    ElectionSetupManifestPreviewPropertyStartDate = 'election_setup.manifest_preview.property.start_date',
    ElectionSetupManifestPreviewPropertyEndDate = 'election_setup.manifest_preview.property.end_date',
    ElectionSetupManifestPreviewPropertyFileHash = 'election_setup.manifest_preview.property.file_hash',
    ElectionSetupManifestPreviewPropertyFileName = 'election_setup.manifest_preview.property.file_name',
    ElectionSetupManifestPreviewCaption = 'election_setup.manifest_preview.caption',
    ElectionSetupManifestPreviewNext = 'election_setup.manifest_preview.next',
    ElectionSetupManifestPreviewBackToMenu = 'election_setup.manifest_preview.back_to_menu',

    ElectionSetupSetupCompleteTitle = 'election_setup.setup_complete.title',
    ElectionSetupSetupCompleteNext = 'election_setup.setup_complete.next',

    ElectionSetupIntroductionTitle = 'election_setup.introduction.title',
    ElectionSetupIntroductionDescription = 'election_setup.introduction.description',
    ElectionSetupIntroductionNext = 'election_setup.introduction.next',
    ElectionSetupIntroductionStepsHeading = 'election_setup.introduction.steps_heading',
    ElectionSetupIntroductionStepsInstructions = 'election_setup.introduction.steps_instruction',
    ElectionSetupIntroductionStep1 = 'election_setup.introduction.step1',
    ElectionSetupIntroductionStep2 = 'election_setup.introduction.step2',
    ElectionSetupIntroductionStep3 = 'election_setup.introduction.step3',
    ElectionSetupIntroductionStep4 = 'election_setup.introduction.step4',

    ElectionSetupUploadManifestTitle = 'election_setup.upload_manifest.title',
    ElectionSetupUploadManifestUpload = 'election_setup.upload_manifest.upload',
    ElectionSetupUploadManifestError = 'election_setup.upload_manifest.error',

    // Election List
    ElectionListTitle = 'election_list.title',
    ElectionListDescription = 'election_list.description',
    ElectionListGoHome = 'election_list.go_home',
}

export type OverloadableMessageId = MessageId | typeof OverloadMessageId;

export default MessageId;
