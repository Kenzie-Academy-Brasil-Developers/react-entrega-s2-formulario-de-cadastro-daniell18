import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Box, Button, Grid, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useHistory } from "react-router";

const Form = ({ setFormData }) => {
  const useStyles = makeStyles((theme) => ({
    root: { height: "100vh", backgroundColor: "#2D7AFF" },
    container: {
      backgroundColor: "#F1884D",
      gap: "10px",
      width: "300px",
      height: "82vh",
      borderRadius: "10px",
    },
    itens: {
      backgroundColor: "white",
      borderRadius: "10px",
    },
    button: {
      width: "180px",
      backgroundColor: "lime",
      color: "black",
    },
    erro: {
      margin: "0",
      color: "#663399",
      fontWeight: "bold",
    },
  }));
  const classe = useStyles();
  const schema = yup.object().shape({
    username: yup
      .string()
      .required("Campo Obrigatorio")
      .matches(
        /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
        "A senha so deve conter Letras"
      ),
    password: yup
      .string()
      .required("Senha Obrigatoria")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
        "Coloque uma senha mais forte"
      ),
    confirmedPassword: yup
      .string()
      .required("Senha Obrigatoria")
      .oneOf([yup.ref("password"), null], "Senhas diferentes"),
    email: yup.string().required("Campo Obrigatorio").email("Email invalido"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const history = useHistory();
  const onhandleSubmit = (e) => {
    setFormData(e);
    history.push("/login");
  };
  return (
    <>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        display="flex"
        onSubmit={handleSubmit(onhandleSubmit)}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        className={classe.root}
      >
        <Grid
          container
          direction="column"
          justifyContent="space-evenly"
          alignItems="center"
          wrap="nowrap"
          className={classe.container}
        >
          <Grid>
            <h2>Formulario de Cadastro</h2>
          </Grid>
          <Grid item>
            <TextField
              type="text"
              required
              className={classe.itens}
              variant="outlined"
              label="Username"
              inputProps={{ maxLength: 18 }}
              {...register("username")}
            />
          </Grid>

          <p className={classe.erro}>{errors.username?.message}</p>
          <Grid item>
            <TextField
              className={classe.itens}
              type="text"
              required
              variant="outlined"
              label="Email"
              {...register("email")}
            />
          </Grid>
          <p className={classe.erro}>{errors.email?.message}</p>
          <Grid item>
            <TextField
              type="password"
              required
              className={classe.itens}
              variant="outlined"
              label="password"
              {...register("password")}
            />
          </Grid>
          <p className={classe.erro}>{errors.password?.message}</p>
          <Grid item>
            <TextField
              type="password"
              required
              className={classe.itens}
              variant="outlined"
              label="Confirmed Password"
              {...register("confirmedPassword")}
            />
          </Grid>
          <p className={classe.erro}>{errors.confirmedPassword?.message}</p>

          <Button type="submit" className={classe.button} variant="contained">
            Entrar
          </Button>
        </Grid>
      </Box>
    </>
  );
};
export default Form;
