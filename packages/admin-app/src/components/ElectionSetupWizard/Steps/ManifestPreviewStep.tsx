import { ManifestPreview } from '@electionguard/api-client';
import {
    Box,
    Button,
    CircularProgress,
    Container,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableRow,
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { Message, MessageId } from '../../../lang';
import IconHeader from '../../IconHeader';

export interface ManifestPreviewStepProps {
    onSubmit: () => Promise<void>;
    onCancel: () => void;
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
    onSubmit,
    onCancel,
    preview,
}) => {
    const classes = useStyles();
    const [loading, setLoading] = useState(false);

    const onButtonClick = async () => {
        setLoading(true);
        try {
            await onSubmit();
        } finally {
            setLoading(false);
        }
    };

    return (
        <Grid container className={classes.root}>
            <Container maxWidth="md">
                <Box display="flex" flexDirection="column" alignItems="center">
                    <IconHeader
                        title={new Message(MessageId.ElectionSetup_ManifestPreview_Title)}
                    />
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
                                    id={MessageId.ElectionSetup_ManifestPreview_PropertyName}
                                />
                            </TableCell>
                            <TableCell>{preview.name}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className={classes.property}>
                                <FormattedMessage
                                    id={
                                        MessageId.ElectionSetup_ManifestPreview_PropertyNumberOfContests
                                    }
                                />
                            </TableCell>
                            <TableCell>{preview.numberOfContests}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className={classes.property}>
                                <FormattedMessage
                                    id={
                                        MessageId.ElectionSetup_ManifestPreview_PropertyNumberOfStyles
                                    }
                                />
                            </TableCell>
                            <TableCell>{preview.numberOfStyles}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className={classes.property}>
                                <FormattedMessage
                                    id={MessageId.ElectionSetup_ManifestPreview_PropertyStartDate}
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
                                    id={MessageId.ElectionSetup_ManifestPreview_PropertyEndDate}
                                />
                            </TableCell>
                            <TableCell>
                                {preview.endDate.toLocaleDateString()}{' '}
                                {preview.endDate.toLocaleTimeString()}
                            </TableCell>
                        </TableRow>
                        <caption>
                            <FormattedMessage
                                id={MessageId.ElectionSetup_ManifestPreview_Caption}
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
                        <FormattedMessage id={MessageId.ElectionSetup_ManifestPreview_Next} />
                        {loading && <CircularProgress size={12} variant="indeterminate" />}
                    </Button>
                    <Button color="primary" onClick={onCancel} className={classes.button}>
                        <FormattedMessage id={MessageId.ElectionSetup_ManifestPreview_BackToMenu} />
                    </Button>
                </Box>
            </Container>
        </Grid>
    );
};

export default ManifestPreviewStep;
