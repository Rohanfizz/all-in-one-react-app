import React from "react";
import classes from './CredentialsInputForm.module.css'
const ChangePasswordForm : React.FC = (props) => {
    return <form className={classes.main}>
        <label>Old Password</label>
        <input type="password"></input>
        <label>New Password</label>
        <input type="password"></input>
        <button>Submit</button>
    </form>
}

export default ChangePasswordForm;