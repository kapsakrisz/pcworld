import { signInWithGooglePopup } from "../../utils/firebase.utils"


const SignIn =() => {
const logGoogleUser =async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
}

    return (
        <div>
            <h1>Sign in Page</h1>
            <button onClick={logGoogleUser}>
                sign in with google popup
            </button>
        </div>
    )
}

export default SignIn