import { ManifestPreview } from '@electionguard/api-client';
import {
    Box,
    Button,
    CircularProgress,
    Container,
    Table,
    TableBody,
    TableCell,
    TableRow,
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React, { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

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
    error: {
        color: 'red',
        marginBottom: theme.spacing(2),
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
    loading: {
        marginLeft: theme.spacing(1),
    },
}));

const ManifestPreviewStep: React.FC<ManifestPreviewStepProps> = ({
    onSubmit,
    onCancel,
    preview,
}) => {
    const classes = useStyles();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>();
    const intl = useIntl();

    const setIntlError = (id: string) => {
        const message = intl.formatMessage({
            id,
        });
        setError(message);
    };

    const onButtonClick = async () => {
        setLoading(true);
        try {
            await onSubmit();
        } catch (ex) {
            setIntlError(MessageId.ElectionSetup_ManifestPreview_SubmitError);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container maxWidth="md">
            <Box display="flex" flexDirection="column" alignItems="center">
                <IconHeader title={new Message(MessageId.ElectionSetup_ManifestPreview_Title)} />
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
                                id={MessageId.ElectionSetup_ManifestPreview_PropertyNumberOfStyles}
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
            {error && <div className={classes.error}>{error}</div>}
            <Box display="flex">
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={onButtonClick}
                    className={classes.button}
                >
                    <FormattedMessage id={MessageId.ElectionSetup_ManifestPreview_Next} />
                    {loading && (
                        <CircularProgress
                            size={12}
                            variant="indeterminate"
                            className={classes.loading}
                        />
                    )}
                </Button>
                <Button color="primary" onClick={onCancel} className={classes.button}>
                    <FormattedMessage id={MessageId.ElectionSetup_ManifestPreview_BackToMenu} />
                </Button>
            </Box>
        </Container>
    );
};

export default ManifestPreviewStep;
