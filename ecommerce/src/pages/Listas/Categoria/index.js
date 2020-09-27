import React, {useState, useEffect} from 'react';
import api from '../../../services/api';
import img from '../../../assets/sem-foto.gif';
import Header from '../../../components/Header';
import {Link} from "react-router-dom";

import useStyles from './styles';
import 'fontsource-roboto';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';


const Categoria = () => {
    const[categoria, setCategoria] = useState([]);
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const loadCategoria = async () => {
        try{
            const response = await api.get('categoria');
            // console.log('loadCategoria', response.data);

            setCategoria(response.data);
        } catch (error) {
            console.log('loadCategoria error', error);
        }
    };
    useEffect(() => {
        loadCategoria();
    }, []);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };
    
      const open = Boolean(anchorEl);
    
    return (
        <>
        <Header/>
      
        <div className={classes.root}>
          <GridList cellHeight={180} className={classes.gridList} cols={3}>
            <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
              <ListSubheader component="div"></ListSubheader>
            </GridListTile>
            {categoria.map((categoria) => (
              <GridListTile key={categoria.nome}>
                
                    <img src={img} alt="Sem foto" />
                
                
                <GridListTileBar
                  title={<Link to={`/produto/${categoria.id}`}>{categoria.nome}</Link>}
                  subtitle={<span>{categoria.descricao}</span>}
                  actionIcon={
                    <IconButton aria-describedby={categoria.id} onClick={handleClick} aria-label={`info about ${categoria.nome}`} className={classes.icon}>
                      <InfoIcon > 
                          
                      </InfoIcon>
                      
                    </IconButton>
                    
                    
                  }
                />
                <Popover
                    id={categoria.id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                    }}
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                    }}
                >
                <Typography ref={React.createRef(categoria.id)} className={classes.typography}>{categoria.descricao}</Typography>
                </Popover>
              </GridListTile>
            ))}


          </GridList>
        </div>
        </>
      );
}

export default Categoria;


 // return (
    //     <>
    //         <div>
    //             {categoria.map((categoria)=> (
    //                 <div key={categoria.id}>
    //                     <strong>{categoria.nome}</strong>
    //                     <p>{categoria.descricao}</p>
    //                     <a href={`/produtos`}>Produtos</a>
    //                 </div>
    //             ))}                
    //         </div>
    //     </>
    // );

 
/*<Students>
            {alunos.map((alunos) => (
                <div key={alunos.id}>
                    <strong>{alunos.nome}</strong>
                    <p>{alunos.title}</p>
                    <a href={`/produto/${categoria.id}`}>Detalhes</a>
                </div>
            ))}
        </Students>
        <Route path="/produto/:idCategoria" component = {Detalhes}/>
        const loadAlunos = async () => {
        try{
            const response = await api.get('listaAlunos/'+id);
            console.log('loadAlunos', response.data);
    
            setAlunos(response.data);
        } catch (error) {
            console.log('loadAlunos error', error);
            const {id} = useParams();

            <Header title="Detalhes de " />
            <div>{id}</div>

        }
    };*/
 

