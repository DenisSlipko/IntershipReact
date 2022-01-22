import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import useForm from '../../hooks/useForm';

const TableEditDialog = ({dataObject, dataConfig, openDialog, onUpdateData, onCloseDialog }) => { 

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
                fullWidth
                id={field}
                label={headerName}
                key={field}
                value={values[field]} 
                helperText={errors[field]}
                error={Boolean(errors[field])}
                type="text"
                variant="outlined"
                margin="dense"
                onChange={handleFieldChange(field)}
              />
            )}
          </DialogContent>
          <DialogActions sx={{ justifyContent: 'space-between' }} >
            <Button onClick={onCloseDialog}>CLOSE</Button> <Button onClick={handleDataUpdate}>UPDATE THE DATA</Button>
          </DialogActions>
        </Dialog>
    )
}

export default TableEditDialog
