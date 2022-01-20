import { Box, Button, ButtonProps, CircularProgress, SvgIconProps } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Message } from '../../lang';

const useStyles = makeStyles((theme) => ({
    internal: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
    },
    progress: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
    icon: {
        marginRight: theme.spacing(1),
    },
}));

export interface FormattedButtonProps extends ButtonProps {
    text: Message;
    Icon?: React.ComponentType<SvgIconProps>;
    disabledText?: Message;
    DisabledIcon?: React.ComponentType<SvgIconProps>;
    loading?: boolean;
    upload?: boolean;
    accept?: string;
    onUpload?: React.ChangeEventHandler<HTMLInputElement>;
}

export const FormattedButton: React.FC<FormattedButtonProps> = (props) => {
    const classes = useStyles();

    const buttonProps = props as ButtonProps;
    const {
        accept = 'application/JSON',
        upload,
        onUpload,
        onClick,
        Icon,
        DisabledIcon,
        text,
        loading,
        disabledText,
        className,
    } = props;

    return (
        <Box className={className}>
            <Box display="inline-block" position="relative">
                <Button
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...buttonProps}
                    onClick={upload ? undefined : onClick}
                    className={classes.internal}
                    disabled={loading || buttonProps.disabled}
                >
                    {buttonProps.disabled && disabledText ? (
                        <>
                            {DisabledIcon && <DisabledIcon className={classes.icon} />}
                            <FormattedMessage
                                id={disabledText.id}
                                defaultMessage={disabledText.defaultMessage}
                            />
                        </>
                    ) : (
                        <>
                            {Icon && <Icon className={classes.icon} />}
                            <FormattedMessage id={text.id} defaultMessage={text.defaultMessage} />
                            {upload && (
                                <input accept={accept} type="file" hidden onChange={onUpload} />
                            )}
                        </>
                    )}
                </Button>
                {loading && (
                    <CircularProgress
                        size={24}
                        variant="indeterminate"
                        color={buttonProps.color !== 'inherit' ? buttonProps.color : 'primary'}
                        className={classes.progress}
                    />
                )}
            </Box>
        </Box>
    );
};

export default FormattedButton;
