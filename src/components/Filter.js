import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './../assets/scss/Filter.scss';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '35vw',
      '& .MuiInputBase-input':{
          color: 'white',
      },
      '& label, label.Mui-focused': {
        color: 'white',
      },
      '& .MuiInput-underline:hover:not(.Mui-disabled):before, .MuiInput-underline:after, .MuiInput-underline:before': {
        borderBottomColor: 'white',
      },
    },
  },
  input: {
      color:'white',
  }
}));

function Filter({ value, onChange }) {
  const classes = useStyles();
  function handleChange(event) {
    onChange(event.target.value)
  }

  return (
    <div className="filter">
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="standard-basic" label="Nome ou ID do Pokémon" value={value} onChange={handleChange} />
            <TextField id="standard-basic" label="Habilidade" />
        </form>
    </div>
  );
}

export default Filter;