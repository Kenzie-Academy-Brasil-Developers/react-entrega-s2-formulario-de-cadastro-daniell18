import { Button, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useHistory } from "react-router";

const Login = ({ formData }) => {
  const useStyles = makeStyles((theme) => ({
    root: { height: "100vh", backgroundColor: "black", gap: "20px" },
    Paper: {
      display: "flex",
      flexDirection: "column",
      height: "50vh",
      width: "300px",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "sans-seirf",
      fontWeight: "bold",
      borderRadius: "10px",
      fontSize: "18px",
    },
    title: {
      textAlign: "center",
      color: "#F0F0F0",
    },
    button: {
      width: "150px",
      backgroundColor: "red",
      color: "#f0f0f0",
    },
  }));
  const classe = useStyles();
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
  };
  return (
    <>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
        className={classe.root}
      >
        <Grid item>
          <h1 className={classe.title}>
            Parabens {formData.username} seu cadastro foi realizado
          </h1>
        </Grid>
        <Grid item>
          <h3 className={classe.title}>Dados cadastrados</h3>
          <Paper className={classe.Paper}>
            <p>Nome:{formData.username}</p>
            <p>Email:{formData.email}</p>
            <p>Password:{formData.password}</p>
          </Paper>
        </Grid>
        <Button
          onClick={() => handleClick()}
          className={classe.button}
          variant="contained"
        >
          Voltar
        </Button>
      </Grid>
    </>
  );
};
export default Login;
