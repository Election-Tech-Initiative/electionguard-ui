// TODO Remove after migration to Admin App
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
    MenuOption_ManageUsers = 'menu.option.manage_users',
    MenuOption_JoinKeyCeremony = 'menu.option.join_key_ceremony',
    MenuOption_SetupElection = 'menu.option.setup_election',
    MenuOption_BeginTallyCeremony = 'menu.option.begin_tally_ceremony',
    MenuOption_UploadManifest = 'menu.option.upload_manifest',
    MenuOption_BuildManifest = 'menu.option.build_manifest',
    MenuOption_ManageJointKeys = 'menu.option.manage_joint_keys',
    MenuOption_ManageElections = 'menu.option.manage_elections',
    MenuOption_SetupJointKey = 'menu.option.setup_joint_keys',

    // Login Form
    LoginFormUsername = 'login_form.username',
    LoginFormPassword = 'login_form.password',
    LoginFormSubmit = 'login_form.submit',

    // Election Setup
    ElectionSetup_JointKeyUpload_Title = 'election_setup.joint_key_upload.title',
    ElectionSetup_JointKeyUpload_NoFile = 'election_setup.joint_key_upload.no_file',
    ElectionSetup_JointKeyUpload_InvalidFile = 'election_setup.joint_key_upload.invalid_file',
    ElectionSetup_JointKeyUpload_SelectFiles = 'election_setup.joint_key_upload.select_files',

    ElectionSetup_JointKeySelect_Title = 'election_setup.joint_key_select.title',
    ElectionSetup_JointKeySelect_Prompt = 'election_setup.joint_key_select.prompt',
    ElectionSetup_JointKeySelect_Next = 'election_setup.joint_key_select.next',

    ElectionSetup_ManifestPreview_Id = 'election_setup.manifest_preview.property.id',
    ElectionSetup_ManifestPreview_Title = 'election_setup.manifest_preview.title',
    ElectionSetup_ManifestPreview_PropertyName = 'election_setup.manifest_preview.property.name',
    ElectionSetup_ManifestPreview_PropertyNumberOfContests = 'election_setup.manifest_preview.property.number_of_contests',
    ElectionSetup_ManifestPreview_PropertyNumberOfStyles = 'election_setup.manifest_preview.property.numberOfStyles',
    ElectionSetup_ManifestPreview_PropertyStartDate = 'election_setup.manifest_preview.property.start_date',
    ElectionSetup_ManifestPreview_PropertyEndDate = 'election_setup.manifest_preview.property.end_date',
    ElectionSetup_ManifestPreview_PropertyFileName = 'election_setup.manifest_preview.property.file_name',
    ElectionSetup_ManifestPreview_Next = 'election_setup.manifest_preview.next',
    ElectionSetup_ManifestPreview_BackToMenu = 'election_setup.manifest_preview.back_to_menu',
    ElectionSetup_ManifestPreview_SubmitError = 'election_setup.manifest_preview.submit_error',

    ElectionSetupSetupCompleteTitle = 'election_setup.setup_complete.title',
    ElectionSetupSetupCompleteNext = 'election_setup.setup_complete.next',

    ElectionSetup_BasicInfo_Title = 'election_setup.basic_info.title',
    ElectionSetup_BasicInfo_Next = 'election_setup.basic_info.next',
    ElectionSetup_BasicInfo_ElectionIdTooltip = 'election_setup.basic_info.election_id_tooltip',

    ElectionSetup_UploadManifest_Title = 'election_setup.upload_manifest.title',
    ElectionSetup_UploadManifest_Upload = 'election_setup.upload_manifest.upload',
    ElectionSetup_UploadManifest_Error = 'election_setup.upload_manifest.error',
    ElectionSetup_UploadManifest_InvalidFile = 'election_setup.upload_manifest.error',
    ElectionSetup_UploadManifest_NoFile = 'election_setup.upload_manifest.error',

    // Election List
    ElectionListTitle = 'election_list.title',
    ElectionListDescription = 'election_list.description',
    ElectionListGoHome = 'election_list.go_home',

    // Joint Key Setup
    JointKeySetup_KeySetup_Title = 'joint_key_setup.key_setup.title',
    JointKeySetup_KeySetup_NumberOfGuardiansHeading = 'joint_key_setup.key_setup.number_of_guardians_heading',
    JointKeySetup_GuardianAssignment_Title = 'joint_key_setup.guardian_assignment.title',
    JointKeySetup_GuardianAssignment_AssignedLabel = 'joint_key_setup.guardian_assignment.assigned_label',
    JointKeySetup_GuardianAssignment_NoGuardians = 'joint_key_setup.guardian_assignment.no_guardians',
    JointKeySetup_GuardianAssignment_Assign = 'joint_key_setup.guardian_assignment.assign',
    JointKeySetup_GuardianAssignmentReview_Title = 'joint_key_setup.guardian_assignment_review.title',

    KeyCeremonyList_Title = 'key_ceremony_list.title',
    KeyCeremonyList_Description = 'key_ceremony_list.description',

    JointKeyList_Title = 'joint_key_list.title',
    JointKeyList_Description = 'joint_key_list.description',

    // Key Ceremony
    KeyCeremony_Introduction_Title = 'key_ceremony.introduction.title',
    KeyCeremony_Introduction_Description = 'key_ceremony.introduction.description',
    KeyCeremony_Introduction_StepsHeading = 'key_ceremony.introduction.steps_heading',
    KeyCeremony_Introduction_StepsDescription = 'key_ceremony.introduction.steps_description',
    KeyCeremony_Introduction_Step1 = 'key_ceremony.introduction.step1',
    KeyCeremony_Introduction_Step2 = 'key_ceremony.introduction.step2',
    KeyCeremony_Introduction_Step3 = 'key_ceremony.introduction.step3',
    KeyCeremony_Introduction_Step4 = 'key_ceremony.introduction.step4',
    KeyCeremony_Introduction_Step5 = 'key_ceremony.introduction.step5',
    KeyCeremony_Introduction_Step6 = 'key_ceremony.introduction.step6',
    KeyCeremony_Introduction_Step7 = 'key_ceremony.introduction.step7',

    KeyCeremony_MeetGuardians_Title = 'key_ceremony.meet_guardians.title',
    KeyCeremony_MeetGuardians_Description = 'key_ceremony.meet_guardians.description',
    KeyCeremony_MeetGuardians_Button = 'key_ceremony.meet_guardians.button',

    KeyCeremony_CreateKeyPair_Title = 'key_ceremony.create_keypair.title',
    KeyCeremony_CreateKeyPair_Description = 'key_ceremony.create_keypair.description',
    KeyCeremony_CreateKeyPair_Button = 'key_ceremony.create_keypair.button',

    KeyCeremony_SharePublicKey_Title = 'key_ceremony.share_public_key.title',
    KeyCeremony_SharePublicKey_Description = 'key_ceremony.share_public_key.description',
    KeyCeremony_SharePublicKey_Button = 'key_ceremony.share_public_key.button',

    KeyCeremony_CreateBackups_Title = 'key_ceremony.create_backups.title',
    KeyCeremony_CreateBackups_Description = 'key_ceremony.create_backups.description',
    KeyCeremony_CreateBackups_Button = 'key_ceremony.create_backups.button',
    KeyCeremony_CreateBackups_DisabledButton = 'key_ceremony.create_backups.disabled_button',

    KeyCeremony_ShareBackups_Title = 'key_ceremony.share_backups.title',
    KeyCeremony_ShareBackups_Description = 'key_ceremony.share_backups.description',
    KeyCeremony_ShareBackups_Button = 'key_ceremony.share_backups.button',

    KeyCeremony_VerifyBackups_Title = 'key_ceremony.verify_backups.title',
    KeyCeremony_VerifyBackups_Description = 'key_ceremony.verify_backups.description',
    KeyCeremony_VerifyBackups_Button = 'key_ceremony.verify_backups.button',

    KeyCeremony_CombineKeys_Title = 'key_ceremony.combine_keys.title',
    KeyCeremony_CombineKeys_Description = 'key_ceremony.combine_keys.description',
    KeyCeremony_CombineKeys_Button = 'key_ceremony.combine_keys.button',
    KeyCeremony_CombineKeys_DisabledButton = 'key_ceremony.combine_keys.disabled_button',

    KeyCeremony_Complete_Title = 'key_ceremony.complete.title',
    KeyCeremony_Complete_Description = 'key_ceremony.complete.description',
    KeyCeremony_Complete_Button = 'key_ceremony.complete.button',

    KeyCeremony_Vizualization_Complete = 'key_ceremony.visualization_complete',

    KeyCeremony_Steps_Instructions = 'key_ceremony.steps.instructions',
    KeyCeremony_Steps_MeetGuardians = 'key_ceremony.steps.meet_guardians',
    KeyCeremony_Steps_CreateKeypair = 'key_ceremony.steps.create_keypair',
    KeyCeremony_Steps_SharePublicKey = 'key_ceremony.steps.share_public_key',
    KeyCeremony_Steps_CreateBackups = 'key_ceremony.steps.create_backups',
    KeyCeremony_Steps_ShareBackups = 'key_ceremony.steps.share_backups',
    KeyCeremony_Steps_VerifyBackups = 'key_ceremony.steps.verify_backups',
    KeyCeremony_Steps_CombineKeys = 'key_ceremony.steps.combine_keys',
    KeyCeremony_Steps_Complete = 'key_ceremony.steps.complete',

    // Tally Ceremony
    // -- Steps
    TallyCeremony_Introduction_Title = 'tally_ceremony.introduction.title',
    TallyCeremony_Introduction_Description = 'tally_ceremony.introduction.description',
    TallyCeremony_Introduction_Button = 'tally_ceremony.introduction.button',
    TallyCeremony_Introduction_StepsHeading = 'tally_ceremony.introduction.steps_heading',
    TallyCeremony_Introduction_StepsDescription = 'tally_ceremony.introduction.steps_description',
    TallyCeremony_Introduction_Step1 = 'tally_ceremony.introduction.step1',
    TallyCeremony_Introduction_Step2 = 'tally_ceremony.introduction.step2',
    TallyCeremony_Introduction_Step3 = 'tally_ceremony.introduction.step3',
    TallyCeremony_Introduction_Step4 = 'tally_ceremony.introduction.step4',

    TallyCeremony_DownloadTally_Title = 'tally_ceremony.download_tally.title',
    TallyCeremony_DownloadTally_Description = 'tally_ceremony.download_tally.description',
    TallyCeremony_DownloadTally_Button = 'tally_ceremony.download_tally.button',

    TallyCeremony_DecryptTallyShare_Title = 'tally_ceremony.decrypt_tally_share.title',
    TallyCeremony_DecryptTallyShare_Description = 'tally_ceremony.decrypt_tally_share.description',
    TallyCeremony_DecryptTallyShare_Button = 'tally_ceremony.decrypt_tally_share.button',
    TallyCeremony_DecryptTallyShare_Decrypting = 'tally_ceremony.decrypt_tally_share.decrypting',
    TallyCeremony_DecryptTallyShare_Complete = 'tally_ceremony.decrypt_tally_share.complete',
    TallyCeremony_DecryptTallyShare_CompleteButton = 'tally_ceremony.decrypt_tally_share.complete_button',

    TallyCeremony_UploadTallyShare_Title = 'tally_ceremony.upload_tally_share.title',
    TallyCeremony_UploadTallyShare_Description = 'tally_ceremony.upload_tally_share.description',
    TallyCeremony_UploadTallyShare_Button = 'tally_ceremony.upload_tally_share.button',

    TallyCeremony_DecryptMissing_Title = 'tally_ceremony.decrypt_missing.title',
    TallyCeremony_DecryptMissing_Description = 'tally_ceremony.decrypt_missing.description',
    TallyCeremony_DecryptMissing_Button = 'tally_ceremony.decrypt_missing.button',
    TallyCeremony_DecryptMissing_Decrypting = 'tally_ceremony.decrypt_missing.decrypting',
    TallyCeremony_DecryptMissing_Complete = 'tally_ceremony.decrypt_missing.complete',
    TallyCeremony_DecryptMissing_CompleteButton = 'tally_ceremony.decrypt_missing.complete_button',

    TallyCeremony_NoMissing_Title = 'tally_ceremony.no_missing.title',
    TallyCeremony_NoMissing_Description = 'tally_ceremony.no_missing.description',
    TallyCeremony_NoMissing_Button = 'tally_ceremony.no_missing.button',

    TallyCeremony_UploadMissing_Title = 'tally_ceremony.upload_missing.title',
    TallyCeremony_UploadMissing_Description = 'tally_ceremony.upload_missing.description',
    TallyCeremony_UploadMissing_Button = 'tally_ceremony.upload_missing.button',

    TallyCeremony_CombineShares_Title = 'tally_ceremony.combine_shares.title',
    TallyCeremony_CombineShares_Description = 'tally_ceremony.combine_shares.description',
    TallyCeremony_CombineShares_Button = 'tally_ceremony.combine_shares.button',
    TallyCeremony_CombineShares_ButtonDisabled = 'tally_ceremony.combine_shares.button_disabled',

    TallyCeremony_Complete_Title = 'tally_ceremony.complete.title',
    TallyCeremony_Complete_Description = 'tally_ceremony.complete.description',
    TallyCeremony_Complete_Button = 'tally_ceremony.complete.button',

    // -- Step Descriptions
    TallyCeremony_Steps_Introduction = 'tally_ceremony.steps.introduction',
    TallyCeremony_Steps_DownloadTally = 'tally_ceremony.steps.download_tally',
    TallyCeremony_Steps_DecryptTallyShare = 'tally_ceremony.steps.decrypt_tally_share',
    TallyCeremony_Steps_UploadTallyShare = 'tally_ceremony.steps.upload_tally_share',
    TallyCeremony_Steps_DecryptMissing = 'tally_ceremony.steps.decrypt_missing',
    TallyCeremony_Steps_UploadMissing = 'tally_ceremony.steps.upload_missing',
    TallyCeremony_Steps_CombineShares = 'tally_ceremony.steps.combine_shares',
    TallyCeremony_Steps_TallyComplete = 'tally_ceremony.steps.tally_complete',

    // Models
    JointKey_Name = 'joint_key.name',
    JointKey_NumberOfGuardians = 'joint_key.number_of_guardians',
    JointKey_Quorum = 'joint_key.quorum',

    Guardian = 'guardian',
    Guardian_Name = 'guardian.name',

    // Placeholder
    Placeholder_Processing = 'placeholder.processing',
    Placeholder_Complete = 'placeholder.complete',
    Placeholder_Error = 'placeholder.error',

    // Actions
    Actions_Cancel = 'actions.cancel',
    Actions_Submit = 'actions.submit',
    Actions_Confirm = 'actions.confirm',
    Actions_Next = 'actions.next',
    Actions_Back = 'actions.back',
    Actions_Continue = 'actions.continue',
    Actions_Previous = 'actions.previous',
    Actions_Edit = 'actions.edit',

    Nav_Return_Home = 'nav.return_home',

    TaskStatus_Error = 'task_status.error',
    TaskStatus_Complete = 'task_status.complete',
    TaskStatus_Incomplete = 'task_status.incomplete',

    // Elections List Page
    ElectionListPage_Title = 'election_list_page.title',
    ElectionListPage_GoHome = 'election_list_page.go_home',
    ElectionListPage_NoRows = 'election_list_page.no-rows',
    ElectionListPage_StateHeader = 'election_list_page.state_header',
    ElectionListPage_KeyNameHeader = 'election_list_page.key_name_header',
    ElectionListPage_ElectionIdHeader = 'election_list_page.election_id_header',
    ElectionListPage_UploadBallot = 'election_list_page_upload_ballot',

    // User Management
    UserManagement_Title = 'usermanagement.title',

    // Add User
    AddUser_Title = 'adduser.title',
    AddUser_Error = 'adduser.error',

    // Election List
    UploadBallots_SelectFiles = 'uploadballots.selectfiles',
    UploadBallots_Title = 'uploadballots.title',
    UploadBallots_Error_NoBallots = 'uploadballots_error_noballots',
    UploadBallots_Error_BallotsInvalid = 'uploadballots_error_ballotsinvalid',
}

export default MessageId;
