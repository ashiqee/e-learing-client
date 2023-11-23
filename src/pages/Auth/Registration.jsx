import { LockOutlined } from "@mui/icons-material";
import { Avatar, Box, Button, Checkbox, FormControlLabel, Grid, Input, Paper, TextField, Typography } from "@mui/material"


import { Link } from "react-router-dom";
import GoogleLogin from "../../Components/Shared/GoogleLogin/GoogleLogin";

const Registration = () => {


    const handleSubmit = (e) => {

        e.preventDefault()
        const data = new FormData(e.currentTarget)

        console.log({
            name: data.get('name'),
            email: data.get('email'),
            password: data.get('password')

        });

    }




    return (
        <Grid container component='main' sx={{ height: '100vh' }}>
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                    backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: (t) =>
                        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />

            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square >
                <Box
                    sx={{
                        my: 8,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >

                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} >

                        <LockOutlined />
                    </Avatar>
                    <Typography component='h1' variant="h5" >
                        Sign Up
                    </Typography>
                    <Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 1 }} >
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id='name'
                            name="name"
                            label='name'
                            autoComplete="name"
                            autoFocus

                        />
                        <TextField
                            margin="normal"
                            type="file"
                            required
                            fullWidth
                            id='profileImg'
                            name="profileImg"
                            label
                            autoFocus

                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            type="email"
                            id='email'
                            name="email"
                            label='email'
                            autoComplete="email"
                            autoFocus

                        />
                        <TextField
                            margin="normal"
                            type="password"
                            required
                            fullWidth
                            id='password'
                            label='passwrod'
                            name="password"
                            autoComplete="current-password"


                        />

                        <FormControlLabel

                            control={<Checkbox value='remember' color="primary" />}
                            label='Remember me'
                        />
                        <Button type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }} >Sign Up</Button>
                        <Grid container>

                            <Grid item>
                                <Link to='/login' variant="body2">
                                    {"Already have an account? Please Login"}
                                </Link>
                            </Grid>
                        </Grid>






                        <GoogleLogin />
                    </Box>







                </Box>



            </Grid>
        </Grid >
    );
};

export default Registration;