import {
    Box,
    Button,
    Container,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableRow,
    makeStyles,
} from '@material-ui/core';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import { InternationalText } from '../../../models/internationalText';
import ManifestPreview from '../../../models/manifestPreview';
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
    return (
        <Grid container className={classes.root}>
            <Container maxWidth="md">
                <Box display="flex" flexDirection="column" alignItems="center">
                    <IconHeader
                        title={
                            new InternationalText(
                                'election_setup.manifest_preview.title',
                                'Election Manifest Uploaded'
                            )
                        }
                    />
                    <Table aria-label="caption table" className={classes.spaced}>
                        <TableRow>
                            <TableCell className={classes.property}>
                                <FormattedMessage
                                    id="election_setup.manifest_preview.property.name"
                                    defaultMessage="Name"
                                />
                            </TableCell>
                            <TableCell>{preview.name}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className={classes.property}>
                                <FormattedMessage
                                    id="election_setup.manifest_preview.property.number_of_contests"
                                    defaultMessage="Number of Contests"
                                />
                            </TableCell>
                            <TableCell>{preview.numberOfContests}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className={classes.property}>
                                <FormattedMessage
                                    id="election_setup.manifest_preview.property.numberOfStyles"
                                    defaultMessage="Number of Ballot Styles"
                                />
                            </TableCell>
                            <TableCell>{preview.numberOfStyles}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className={classes.property}>
                                <FormattedMessage
                                    id="election_setup.manifest_preview.property.start_date"
                                    defaultMessage="Start Date"
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
                                    id="election_setup.manifest_preview.property.end_date"
                                    defaultMessage="End Date"
                                />
                            </TableCell>
                            <TableCell>
                                {preview.endDate.toLocaleDateString()}{' '}
                                {preview.endDate.toLocaleTimeString()}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className={classes.property}>
                                <FormattedMessage
                                    id="election_setup.manifest_preview.property.file_hash"
                                    defaultMessage="File Hash"
                                />
                            </TableCell>
                            <TableCell>{preview.fileHash}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className={classes.property}>
                                <FormattedMessage
                                    id="election_setup.manifest_preview.property.file_name"
                                    defaultMessage="File Name"
                                />
                            </TableCell>
                            <TableCell>{preview.fileName}</TableCell>
                        </TableRow>
                        <caption>
                            <FormattedMessage
                                id="election_setup.manifest_preview.caption"
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
                        onClick={onNext}
                        className={classes.button}
                    >
                        <FormattedMessage
                            id="election_setup.manifest_preview.next"
                            defaultMessage="Submit"
                        />
                    </Button>
                    <Button color="primary" onClick={backToMenu} className={classes.button}>
                        <FormattedMessage
                            id="election_setup.manifest_preview.back_to_menu"
                            defaultMessage="Cancel"
                        />
                    </Button>
                </Box>
            </Container>
        </Grid>
    );
};

export default ManifestPreviewStep;
