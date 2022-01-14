import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import useForm from '../../hooks/useForm';

const DialogForm = ({dataObject, dataConfig, openDialog, onUpdateData, onCloseDialog }) => {

    const { validate, handleFieldChange, values, errors } = useForm(dataObject);

    const handleDataUpdate = () => {
        if (validate()) {
            onUpdateData(values);
          }
    }

    return (
        <Dialog open={openDialog} onClose={onCloseDialog}>
          <DialogTitle>Data editing:</DialogTitle>
          <DialogContent>
            {dataConfig.map( ({ field, headerName }) => 
              <TextField
                autoFocus
                margin="dense"
                id={field}
                label={headerName}
                type="text"
                fullWidth
                variant="outlined"
                value={values[field]} 
                onChange={handleFieldChange(field)}
                key={field}
                helperText={errors[field]}
                error={errors[field] ? true : false}
              />
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDataUpdate}>UPDATE THE DATA</Button>
          </DialogActions>
        </Dialog>
    )
}

export default DialogForm
