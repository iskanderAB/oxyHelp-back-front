import React, {useState} from 'react';
import './Login.css';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    materialBtn: {
      marginLeft: '5px',
      marginRight: '5px',
      marginTop: '10px',
      backgroundColor: '#00ADB5',
      borderRadius : '50px'
    }
  }));
const Login = () => {
    const classes = useStyles();
    const [username , setUsername] = useState('');
    const [password , setPassword  ] = useState('');
    const loginHandler = (e) => {
        e.preventDefault();
        console.log('Received values of form: ', username , password);
        axios.post('http://127.0.0.1:8000/api/login_check',
            {	"username" : username,
                    "password" : password
        }).then(res => {
            console.log('token : ' , res.data)
        }).catch(error => console.log(error));
  };
  return (
   <div className='login-container'>
        <div className='cercle' style={{backgroundImage:"url('https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png')"}}>
       </div>
       <form onSubmit={loginHandler}>
           <div style={{marginBottom: '50px'}}>
               <div className='line'/>
               <span className='span'>S'identifier</span>
               <div className='line'/>
            </div>
           <div className='input-icons'>
                <MailOutlineIcon className="icon"/>
                <input type="email" className="input-field" placeholder={"Email ..."} onChange={(e) => setUsername(e.target.value)} />
           </div>
           <div className='input-icons'>
                <LockOpenIcon className="icon"/>
                <input type="password"  onChange={(e) => setPassword(e.target.value)} className="input-field" placeholder="Mot de passe ..." />
            </div>
            <Button variant="contained" classes={{ root: classes.materialBtn }} type={'submit'}>
            Connexion
          </Button>
        </form>
        <hr style={{width:"80%",marginTop:'30px'}}></hr>
        <Link to='/register' style={{color:"#00ADB5", marginTop:'20px'}}> Créer un compte</Link>
   </div>
  );
};

export default Login ;
