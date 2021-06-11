import React ,{useState,useEffect} from 'react';
import PlaceIcon from '@material-ui/icons/Place';
import CircularProgress from '@material-ui/core/CircularProgress';
import Liste from '../Liste/Liste';
import Card from '../Card/Card';
import axios from "axios";
import './Container.css';

const Container = () => {
    const [machins, setMachins] = useState([]);
    const [filter , setFilter] = useState('');

    useEffect(()=> {
        console.log("H-Design");
        axios.get('https://127.0.0.1:8000/api/machins.json')
        .then(res => {
            setMachins(res.data);
            console.log(res.data);
        })
        .catch(error =>{
            console.log(error);
        });
    },[]);

    useEffect(()=> {
        console.log('stat => ' , machins)
    },[machins])

    return(
        <div className='main-container'>
            <div className='location'>
                <PlaceIcon style={{marginTop:'3vh',fontSize:'35px',marginRight:'2vh'}}/>
                <Liste setFilter={setFilter}/>
                <p style={{marginTop:'5vh',marginRight:'2vh'}}>: Rechercher Dans</p>
            </div>
            <div className='card-container'>
            {machins.length === 0 ? <CircularProgress style={{margin :"20% auto"}} size={60} /> :
                machins.filter(v => {
                    if(filter === '') return true ;
                    return  v.location.toUpperCase() === filter.toUpperCase();
                }).map((v,i)=> {
                    return <Card {...v} key={i} />
                })
            }
            </div>
        </div>
    );
}
export default Container;
