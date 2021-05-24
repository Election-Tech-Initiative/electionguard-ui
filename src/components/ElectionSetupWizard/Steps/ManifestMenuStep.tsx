import { Container, Grid, Typography, makeStyles } from '@material-ui/core';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import { loremIpsum } from '../../../lang';
import { InternationalText } from '../../../models/internationalText';
import IconHeader from '../../IconHeader';
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
                        new InternationalText(
                            'election_setup.manifest_menu.title',
                            'Add Election Manifest'
                        )
                    }
                />
                <Typography>
                    <FormattedMessage
                        id="election_setup.manifest_menu.about"
                        defaultMessage={loremIpsum}
                    />
                </Typography>
            </Container>
            <MenuOptions
                prompt={
                    new InternationalText(
                        'election_setup.manifest_menu.prompt',
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
