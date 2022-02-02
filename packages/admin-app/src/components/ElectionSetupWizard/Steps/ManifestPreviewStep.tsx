import { ManifestPreview } from '@electionguard/api-client';
import { Box, Button, Container, Grid, Table, TableBody, TableCell, TableRow } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Message, MessageId } from '../../../lang';
import IconHeader from '../../IconHeader';

export interface ManifestPreviewStepProps {
    onNext: () => void;
    backToMenu: () => void;
    preview: ManifestPreview;
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height: '100%',
    },
    spaced: {
        marginBottom: theme.spacing(2),
    },
    property: {
        fontWeight: 'bold',
    },
    button: {
        marginRight: theme.spacing(2),
    },
}));

const ManifestPreviewStep: React.FC<ManifestPreviewStepProps> = ({
    onNext,
    backToMenu,
    preview,
}) => {
    const classes = useStyles();
    const onButtonClick = () => {
        onNext();
    };

    return (
        <Grid container className={classes.root}>
            <Container maxWidth="md">
                <Box display="flex" flexDirection="column" alignItems="center">
                    <IconHeader title={new Message(MessageId.ElectionSetupManifestPreviewTitle)} />
                    <Table aria-label="caption table" className={classes.spaced}>
                        <TableRow>
                            <TableCell className={classes.property}>
                                <FormattedMessage id={MessageId.ElectionSetup_ManifestPreview_Id} />
                            </TableCell>
                            <TableCell>{preview.id}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className={classes.property}>
                                <FormattedMessage
                                    id={MessageId.ElectionSetupManifestPreviewPropertyName}
                                />
                            </TableCell>
                            <TableCell>{preview.name}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className={classes.property}>
                                <FormattedMessage
                                    id={
                                        MessageId.ElectionSetupManifestPreviewPropertyNumberOfContests
                                    }
                                />
                            </TableCell>
                            <TableCell>{preview.numberOfContests}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className={classes.property}>
                                <FormattedMessage
                                    id={
                                        MessageId.ElectionSetupManifestPreviewPropertyNumberOfStyles
                                    }
                                />
                            </TableCell>
                            <TableCell>{preview.numberOfStyles}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className={classes.property}>
                                <FormattedMessage
                                    id={MessageId.ElectionSetupManifestPreviewPropertyStartDate}
                                />
                            </TableCell>
                            <TableCell>
                                {preview.startDate.toLocaleDateString()}{' '}
                                {preview.startDate.toLocaleTimeString()}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className={classes.property}>
                                <FormattedMessage
                                    id={MessageId.ElectionSetupManifestPreviewPropertyEndDate}
                                />
                            </TableCell>
                            <TableCell>
                                {preview.endDate.toLocaleDateString()}{' '}
                                {preview.endDate.toLocaleTimeString()}
                            </TableCell>
                        </TableRow>
                        <caption>
                            <FormattedMessage
                                id={MessageId.ElectionSetupManifestPreviewCaption}
                                defaultMessage="Preview of Manifest"
                            />
                        </caption>
                        <TableBody />
                    </Table>
                </Box>
                <Box display="flex">
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={onButtonClick}
                        className={classes.button}
                    >
                        <FormattedMessage
                            id={MessageId.ElectionSetupManifestPreviewNext}
                            defaultMessage="Submit"
                        />
                    </Button>
                    <Button color="primary" onClick={backToMenu} className={classes.button}>
                        <FormattedMessage
                            id={MessageId.ElectionSetupManifestPreviewBackToMenu}
                            defaultMessage="Cancel"
                        />
                    </Button>
                </Box>
            </Container>
        </Grid>
    );
};

export default ManifestPreviewStep;
