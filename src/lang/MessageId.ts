enum MessageId {
    // Not Required, Only for Testing
    Overload = 'overload',

    // App
    AppName = 'app.name',
    Placeholder = 'app.placeholder',
    AppGreeting = 'app.greeting',
    AppAbout = 'app.about',

    // Menu
    MenuPrompt = 'menu.prompt',
    MenuOptionManageUsers = 'menu.option.manage_users',
    MenuOptionBeginKeyCeremony = 'menu.option.begin_key_ceremony',
    MenuOptionSetupElection = 'menu.option.setup_election',
    MenuOptionBeginTallyCeremony = 'menu.option.begin_tally_ceremony',
    MenuOptionUploadManifest = 'menu.option.upload_manifest',
    MenuOptionBuildManifest = 'menu.option.build_manifest',

    // Login Form
    LoginFormUsernamePlaceholder = 'login_form.username_placeholder',
    LoginFormSubmit = 'login_form.submit',
}

export default MessageId;
