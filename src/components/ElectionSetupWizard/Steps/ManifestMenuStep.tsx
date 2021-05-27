import { Container, Grid, makeStyles } from '@material-ui/core';
import React from 'react';

import { Message, MessageId, loremIpsum } from '../../../lang';
import IconHeader from '../../IconHeader';
import InternationalText from '../../InternationalText';
import { MenuOptionType, MenuOptions, TypedMenuOption } from '../../MenuOption';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        height: '100%',
    },
}));

export interface ManifestMenuStepProps {
    onUploadManifest: () => void;
    onBuildManifest?: () => void;
}

const ManifestMenuStep: React.FC<ManifestMenuStepProps> = ({
    onUploadManifest,
    onBuildManifest,
}) => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Container maxWidth="md">
                <IconHeader
                    title={
                        new Message(
                            MessageId.ElectionSetupManifestMenuTitle,
                            'Add Election Manifest'
                        )
                    }
                />
                <InternationalText
                    id={MessageId.ElectionSetupManifestMenuAbout}
                    defaultMessage={loremIpsum}
                />
            </Container>
            <MenuOptions
                prompt={
                    new Message(
                        MessageId.ElectionSetupManifestMenuPrompt,
                        'Select what you would like to do:'
                    )
                }
            >
                <TypedMenuOption type={MenuOptionType.UploadManifest} onClick={onUploadManifest} />
                <TypedMenuOption
                    type={MenuOptionType.BuildManifest}
                    disabled
                    onClick={onBuildManifest}
                />
            </MenuOptions>
        </Grid>
    );
};

export default ManifestMenuStep;
