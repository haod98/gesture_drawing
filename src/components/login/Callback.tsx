import {useSearchParams} from "react-router-dom";
import {Button} from "@mui/material";
import axios from "axios";

export default function Callback() {
    console.log(process.env["REACT_APP_REDIRECT_URI "]);
    const [code, setCode] = useSearchParams();
    console.log(code.get('code'));
    return (
        <div>
            <h1>Callback</h1>
            <Button onClick={() => login(code.get('code'))}>Login</Button>
        </div>
    )
}

const login = async (code: string | null) => {
    await axios.post('oauth/token', {
        code,
        'redirect_uri': 'http://localhost:3000',
        'grant_type': 'authorization_code',
    }, {
        headers: {
            'Content-type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic MTQ3NTUzNToxNDc1NTM1ZDI1MjI5NjgzYjQyNTM3MmVjNjYxOWEyMWY4YzMwZDAyZmIzZDUzNQ==`,
        },
    })
}
