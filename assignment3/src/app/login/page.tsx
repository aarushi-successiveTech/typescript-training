'use client'
import { useContext, useState } from "react"
import { AuthContext } from "../question1/AuthContext"
import { useRouter } from "next/navigation";
const LoginPage = () => {
    const { userLogin } = useContext(AuthContext);
    const router = useRouter();
    const [name, setName] = useState('');
    const [password, setPassowrd] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault() ;
        const success = userLogin(name.trim(), password.trim());
        if(success){
            router.push('/about')
        }
        else{
            setError('Invalid username or Passowrd');
        }
    };

    return (
        <div style={{padding: 20}}>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                value={name}
                placeholder="Name: "
                onChange={(e) => setName(e.target.value)}
                />
                <input 
                type="password"
                value={password}
                placeholder="Password: "
                onChange={(e) => setPassowrd(e.target.value)}
                />
                <button type="submit" style={{marginTop: '12px', padding: "1px 5px"}}>Login</button>
            </form>
            {error && <p style={{color : 'red'}}>{error}</p>}
            <button onClick={() => router.push('/question1')} style={{marginTop: '12px', padding: "10px 15px"}}>Back</button>
            
        </div>
    );
}

export default LoginPage;