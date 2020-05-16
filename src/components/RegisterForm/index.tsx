import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Container from "@material-ui/core/Container";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { SignUpData } from "./interfaces";
import { useRegisterFormStyles } from "./styles";

export default function SignUp({
  onSubmit,
  formHandleSubmit,
  register,
  errors,
}: SignUpData) {
  const classes = useRegisterFormStyles();

  const termsCheckboxLabel = (
    <div>
      I accept <a href="/terms">terms of use</a>
    </div>
  );
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <form
          className={classes.form}
          onSubmit={formHandleSubmit(onSubmit)}
          noValidate
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                inputRef={register}
                error={Boolean(errors.email)}
                helperText={errors.email ? errors.email.message : " "}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                inputRef={register}
                error={Boolean(errors.password)}
                helperText={errors.password ? errors.password.message : " "}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="passwordConfirm"
                label="Confirm Password"
                type="password"
                id="passwordConfirm"
                inputRef={register}
                error={Boolean(errors.passwordConfirm)}
                helperText={
                  errors.passwordConfirm ? errors.passwordConfirm.message : " "
                }
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    id="termsCheck"
                    name="termsCheck"
                    color="primary"
                    required
                  />
                }
                id="termsCheck"
                name="termsCheck"
                label={termsCheckboxLabel}
                inputRef={register}
              />
              <FormHelperText error>
                {errors.termsCheck ? errors.termsCheck.message : " "}
              </FormHelperText>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Register
          </Button>
        </form>
      </div>
    </Container>
  );
}
