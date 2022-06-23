import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import React from 'react';

export interface OwnProps {
  open: boolean;
  handleDelete: () => void;
  handleCancel: () => void;
}

const DeleteConfirmDialog: React.FC<OwnProps> = ({
  open,
  handleDelete,
  handleCancel,
}) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleCancel}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'>
        <DialogTitle id='alert-dialog-title'>Confirm Delete</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            This will permanently delete this movie, there is no way to recover
            it. Are you sure you want to proceed?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color='primary'>
            Cancel
          </Button>
          <Button onClick={() => handleDelete()} color='primary' autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DeleteConfirmDialog;
