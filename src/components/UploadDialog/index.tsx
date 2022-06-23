import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import React, { useRef, useState } from 'react';
import {
  GetMoviesDocument,
  MovieInput,
  useAddMoviesMutation,
} from 'src/graphql/generated';

export interface OwnProps {
  open: boolean;
  handleCancel: () => void;
}

const Alert = (props: AlertProps) => {
  return (
    <MuiAlert
      style={{ marginBottom: '1rem' }}
      elevation={6}
      variant='filled'
      {...props}
    />
  );
};

export const UploadDialog = ({ open, handleCancel }: OwnProps) => {
  const [addMovies, { error }] = useAddMoviesMutation();
  const inputRef = useRef(null);
  const [movies, setMovies] = useState<MovieInput[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    reader.onload = async (ev) => {
      const text = ev.target!.result;
      console.log('text:', text);
    };
    reader.readAsText(e.target.files![0]);
  };

  const handleUpload = async (): Promise<void> => {
    try {
      await addMovies({
        variables: {
          data: movies as MovieInput[],
        },
        update: () => {
          handleCancel();
        },
        refetchQueries: [{ query: GetMoviesDocument }],
      });
    } catch (error) {
      console.log('error:', error);
    }
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleCancel}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'>
        <DialogTitle id='alert-dialog-title'>Upload Movies File</DialogTitle>
        <DialogContent>
          {error?.message && <Alert severity='error'>{error.message}</Alert>}
          <DialogContentText>
            Select a file to upload. Ensure that the movies are specified
            correctly.
          </DialogContentText>
          <input
            accept='.txt'
            type='file'
            ref={inputRef}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color='primary'>
            Cancel
          </Button>
          <Button onClick={handleUpload} color='primary' autoFocus>
            Upload
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
