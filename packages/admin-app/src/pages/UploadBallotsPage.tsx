import makeStyles from '@mui/styles/makeStyles';
import { Container } from '@mui/material';
import { useState } from 'react';
import { MessageId } from '../lang';
import IconHeader from '../components/IconHeader';
import UploadBallotButton from '../components/UploadBallotButton/UploadBallotButton';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';

const useStyles = makeStyles((theme) => ({
    content: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    error: {
        marginBottom: theme.spacing(2),
    },
}));

export const ElectionListPage: React.FC = () => {
    const classes = useStyles();
    const [errorMessageId, setErrorMessageId] = useState<string>();

    return (
        <Container maxWidth="md" className={classes.content}>
            <IconHeader titleId={MessageId.UploadBallots_Title} />

            {errorMessageId && (
                <ErrorMessage className={classes.error} MessageId={errorMessageId} />
            )}

            <UploadBallotButton
                onError={setErrorMessageId}
                electionId="hamilton-general-election-simple"
            />
        </Container>
    );
};

export default ElectionListPage;
