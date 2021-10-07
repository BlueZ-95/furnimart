import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Paper } from "@mui/material";
import { PrimaryButton } from "../../components";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { currentUserState } from "../../lib/recoil-atoms";

export const LoginForm = () => {
  const router = useRouter();
  const [userState, setUserState] = useRecoilState(currentUserState);

  let baseURL = "http://localhost:3001";

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    const user = {
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
    };

    fetch(`${baseURL}/users?email=${user.email}&password=${user.password}`)
      .then((res) => res.json())
      .then((user) => {
        if (Object.getOwnPropertyNames(user).length === 0) {
          return;
        }
        setUserState(user);
        router.push("/");
      })
      .catch((err) => {
        console.log(err);
        alert("Credentials Did not match");
      });
  };
  return (
    <Paper sx={{ paddingLeft: "30px", paddingRight: "30px" }} elevation={3}>
      <Box
        sx={{
          marginTop: "20vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px 0",
        }}
      >
        <h1>
          <span style={{ color: "#ffb300" }}>Furni</span>mart
        </h1>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
          />
          {/* <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      /> */}
          <PrimaryButton
            type="submit"
            fullWidth
            variant="contained"
            back
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </PrimaryButton>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Paper>
  );
};
