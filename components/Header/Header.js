import { Container, Grid } from "@mui/material";

export const Header = () => {
  return (
    <Container>
      <Grid container>
        <Grid item sm={3}>
          <h1>Furnimart</h1>
        </Grid>
        <Grid item sm={9}>
          <ul>
            <li>HOME</li>
            <li>FEATURES</li>
            <li>SERVICES</li>
            <li>PROJECTS</li>
            <li>SHOP</li>
            <li>NEWS</li>
          </ul>
        </Grid>
      </Grid>
    </Container>
  );
};
