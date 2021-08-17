import BasicButton from "../BasicButton";
import { googleSignIn } from "../../firebase";

const SignIn = () => {
  return (
    <div className="flex align-center justify-center column p-1">
      <h3>Welcome!</h3>
      <BasicButton type="button" label="Sign in with Google" onClick={googleSignIn} />
    </div>
  );
};

export default SignIn;
