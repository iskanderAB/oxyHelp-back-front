import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
  },
}));

export default function Liste({setFilter}) {
  const classes = useStyles();
  const [ville, setVille] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setVille(event.target.value);
    setFilter(event.target.value);
    console.log(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>

      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Ville</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={ville}
          onChange={handleChange}
        >
          <MenuItem value={'Ariana'}>Ariana</MenuItem>
          <MenuItem value={'Béja'}>Béja</MenuItem>
          <MenuItem value={'Bizerte'}>Bizerte</MenuItem>
          <MenuItem value={'Gabès'}>Gabès</MenuItem>
          <MenuItem value={'Gafsa'}>Gafsa</MenuItem>
          <MenuItem value={'Jendouba'}>Jendouba</MenuItem>
          <MenuItem value={'Kairouan'}>Kairouan</MenuItem>
          <MenuItem value={'Kasserine'}>Kasserine</MenuItem>
          <MenuItem value={'Kébili'}>Kébili</MenuItem>
          <MenuItem value={'Kef'}>Kef</MenuItem>
          <MenuItem value={'Mahdia'}>Mahdia</MenuItem>
          <MenuItem value={'Manouba'}>Manouba</MenuItem>
          <MenuItem value={'Médenine'}>Médenine</MenuItem>
          <MenuItem value={'Monastir'}>Monastir</MenuItem>
          <MenuItem value={'Nabeul'}>Nabeul</MenuItem>
          <MenuItem value={'Sfax'}>Sfax</MenuItem>
          <MenuItem value={'Sidi Bouzid'}>Sidi Bouzid</MenuItem>
          <MenuItem value={'Siliana'}>Siliana</MenuItem>
          <MenuItem value={'Sousse'}>Sousse</MenuItem>
          <MenuItem value={'Tataouine'}>Tataouine</MenuItem>
          <MenuItem value={'Tozeur'}>Tozeur</MenuItem>
          <MenuItem value={'Tunis'}>Tunis</MenuItem>
          <MenuItem value={'Zaghouan'}>Zaghouan</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
