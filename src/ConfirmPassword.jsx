export function ConfirmPassword(props) {
  if (props.pwd === props.cPwd) {
    return <div className="correctPass">Password Matched</div>;
  } else {
    return <div className="inCorrectPass">Password Doesn't Match</div>;
  }
}
