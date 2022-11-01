import { Snackbar, Alert, Typography, AlertColor } from '@mui/material';

type NotificationProps = {
    message: string;
    open: boolean;
    severity: AlertColor | undefined;
    handleClose: () => void;
};

export const Notification: React.FC<NotificationProps> = ({
    message,
    open,
    severity,
    handleClose,
}) => {
    return (
        <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            autoHideDuration={4000}
            open={open}
            onClose={handleClose}
        >
            <Alert onClose={handleClose} severity={severity}>
                <Typography>{message}</Typography>
            </Alert>
        </Snackbar>
    );
};
