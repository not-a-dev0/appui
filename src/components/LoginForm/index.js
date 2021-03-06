import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from "@material-ui/core/Typography/Typography";
import { Link } from 'react-router-dom';

const styles = theme => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

class LoginForm extends Component {
  onChange = field => e => this.props.onChange(field, e.target.value.trim());

  render () {
    const { classes, email, password, otp_code, onSubmit, error } = this.props;

    return (
      <form className={classes.form} onSubmit={onSubmit}>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="email">Email Address</InputLabel>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={this.onChange('email')}
            autoFocus
          />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={this.onChange('password')}
          />
        </FormControl>
        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="otp_code">Authenticator Code (If Enabled)</InputLabel>
          <Input
            id="otp_code"
            type="text"
            value={otp_code}
            onChange={this.onChange('otp_code')}
          />
        </FormControl>
        <Typography variant="h6" style={{padding: 10, color: 'red', fontSize: '12px', textAlign: 'center'}}>
          {error}
        </Typography>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Sign in
        </Button>
        <FormControl margin="normal" fullWidth>
          <Link to="/signup">New User? Signup Now</Link>
        </FormControl>
      </form>
    );
  }
}

export default withStyles(styles)(LoginForm);
