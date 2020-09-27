import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditIcon from '@material-ui/icons/Edit';
import Produto from '../../pages/Listas/Produto/index';

const FormDialog = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>         
            <EditIcon size={22} onClick={() => handleClickOpen()} style={{marginRight: 10, cursor:"pointer"}} />
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Editar Produto</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    Mude os valores abaixo para editar as informações do produto
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Nome"
                    type="text"
                    fullWidth
                />
                <TextField
                    margin="dense"
                    label="Valor"
                    type="text"
                    fullWidth
                />
                <TextField
                    margin="dense"
                    label="Estoque"
                    type="text"
                    fullWidth
                />
                <TextField
                    margin="dense"
                    label="Descrição"
                    type="text"
                    fullWidth
                />
                <TextField
                    margin="dense"
                    label="Id Funcionário"
                    type="text"
                    fullWidth
                />
                <TextField
                    margin="dense"
                    label="Nome Funcionário"
                    type="text"
                    fullWidth
                />
                <TextField
                    margin="dense"
                    label="Id da Categoria"
                    type="text"
                    fullWidth
                />
                <TextField
                    margin="dense"
                    label="Nome da Categoria"
                    type="text"
                    fullWidth
                />
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancelar
                </Button>
                <Button onClick={handleClose} color="primary">
                    Confirmar
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
    export default FormDialog;