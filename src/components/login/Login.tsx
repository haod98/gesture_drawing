import {Button} from "@mui/material";

export default function Login() {
    const clientId = `client_id=${process.env.REACT_APP_CLIENT_ID}`
    const redirectUri = `redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`
    const uri = `https://www.pinterest.com/oauth/?${clientId}&${redirectUri}&response_type=code&scope=boards:read&state=randomString`
    return (
        <div>
            <h1>Login</h1>
            <Button variant={"contained"} href={uri}>
                Login
            </Button>
        </div>
    )
}
