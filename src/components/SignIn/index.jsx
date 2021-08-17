import BasicButton from "../BasicButton";
import { googleSignIn } from "../../firebase";

const SignIn = () => {
  return (
    <div className="flex align-center justify-center column p-1">
      <h3>Welcome!</h3>
      <BasicButton
        type="button"
        label="Sign in with Google"
        bgColor="linear-gradient(45deg, hsl(337, 100%, 63%), hsl(265, 50%, 60%))"
        textColor="#101315"
        onClick={googleSignIn}
      />
    </div>
  );
};

export default SignIn;
