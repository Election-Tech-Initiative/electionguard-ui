import makeStyles from '@mui/styles/makeStyles';
import { DefaultTheme } from '@mui/styles';

const useStyles = makeStyles((theme: DefaultTheme) => ({}));

export const AddUserPage: React.FC = () => {
    const classes = useStyles();
    return <div>Add User</div>;
};

export default AddUserPage;
