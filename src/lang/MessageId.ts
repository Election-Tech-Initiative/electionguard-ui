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
}

export type OverloadableMessageId = MessageId | typeof OverloadMessageId;

export default MessageId;
