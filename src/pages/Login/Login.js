import React, { useState } from 'react';
import Title from './components/Title/Title';
import Label from './components/Label/Label';
import Input from './components/Input/Input';
import './Login.css';

const Login = () => {
    const [ user, setUser ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ passwordError, setPasswordError ] = useState(false);
    const [ isLogin, setIsLogin ] = useState(false);
    const [ hasError, setHasError ] = useState(false);
    const handleChange = (name, value) => {
        if(name === 'usuario'){
            setUser(value);
            setHasError(false);
        }else{
            if(value.length < 6){
                setPasswordError(true);
                setHasError(false);
            }else{
                setPasswordError(false);
                setPassword(value);
                setHasError(false);
            }
        }
    }
    const ifMatch = (param) => {
        const { user, password } = param;
        if(user > 0 && password > 0){
            if(user === 'Carolina' && password === '123456'){
                let ac = { user, password };
                let account = JSON.stringify(ac);
                localStorage.setItem('account', account);
                setIsLogin(true);
            }else{
                setIsLogin(false);
                setHasError(true);
            }
        }else{
            setIsLogin(false);
            setHasError(true);
        }
    }
    const handleSubmit = () => {
        let account = { user, password };
        if(account){
            ifMatch(account);
        }
    }
    return(
        <div className='Login-container'>
         <Title text='¡Bienvenido!'/>
         { hasError &&
            <label className='label-alert'>
                Ingreso una contraseña o usuario incorrecto!!!
            </label>
         }
         <Label text='Usuario'/>
         <Input 
            atribbute={{
                id: 'usuario',
                name: 'usuario',
                placeholder: 'Ingrese un Usuario',
                type: 'text',
            }}
            handleChange={handleChange} />
         <Label text='Contraseña'/>
         <Input 
            atribbute={{
                id: 'contraseña',
                name: 'contraseña',
                placeholder: 'Ingrese una Contraseña',
                type: 'password',
            }}
            handleChange={handleChange}
            param={passwordError} />
            { passwordError && 
                <label className='label-error'>
                    Contraseña incompleta minimo 6 caracteres!
                </label>
            }
            <button onClick={handleSubmit}>
                Ingresar
            </button>
        </div>
    )
}

export default Login;