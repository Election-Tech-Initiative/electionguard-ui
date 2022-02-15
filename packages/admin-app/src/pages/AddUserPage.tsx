import { FormattedMessage } from 'react-intl';
import { Container, Grid, MenuItem, Select, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IconHeader from '../components/IconHeader';
import { Message, MessageId } from '../lang';
import routeIds from '../routes/RouteIds';

export const AddUserPage: React.FC = () => {
    const roleGuardian = 'guardian';
    const roleAdmin = 'admin';

    const [username, setUsername] = useState('');
    const [role, setRole] = useState(roleGuardian);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const navigate = useNavigate();

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
    };

    const onCancel = () => {
        navigate(routeIds.manageUsers);
    };

    const isFormValid: () => boolean = () => !!(username && firstName && lastName && email);

    return (
        <Container maxWidth="sm">
            <IconHeader title={new Message(MessageId.AddUser_Title)} />
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                    <Grid item sm={8} xs={12}>
                        <TextField
                            id="username"
                            label="Username"
                            fullWidth
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <Select
                            id="role"
                            value={role}
                            label="Role"
                            fullWidth
                            onChange={(e) => setRole(e.target.value)}
                        >
                            <MenuItem value={roleGuardian}>Guardian</MenuItem>
                            <MenuItem value={roleAdmin}>Admin</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <TextField
                            id="first_name"
                            label="First Name"
                            fullWidth
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <TextField
                            id="last_name"
                            label="Last Name"
                            fullWidth
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="email"
                            label="E-Mail"
                            fullWidth
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            disabled={!isFormValid()}
                        >
                            <FormattedMessage id={MessageId.Actions_Submit} />
                        </Button>
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <Button type="button" color="secondary" fullWidth onClick={onCancel}>
                            <FormattedMessage id={MessageId.Actions_Cancel} />
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};

export default AddUserPage;
