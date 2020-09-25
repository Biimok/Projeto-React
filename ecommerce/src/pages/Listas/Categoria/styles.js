import { makeStyles } from '@material-ui/core/styles';
// import styled from 'styled-components';


// const LinkTitulo = styled.a`
//   a{
//     text-decoration: none;
//   }
// `;



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.transparent,
    
  },
  gridList: {
    width: 1000,
    height: 1000,
    
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  typography: {
    padding: theme.spacing(2),
  },
}));

export default useStyles;

