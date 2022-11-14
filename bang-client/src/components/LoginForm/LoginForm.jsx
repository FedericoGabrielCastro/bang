import { useFormik } from "formik";
import { LoginSchema } from "@utils";
import { MdOutlineMailOutline } from "react-icons/md"
import { GrSecure } from "react-icons/gr"
import { GoogleLogin} from "react-google-login"
import { Link } from "react-router-dom";

export const LoginForm = () => {

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: LoginSchema,
        onSubmit: (values) => {
            console.log("Login values: ", values )
        }
    })

    const inputsData = [
        {id: "email", name: "email", type: "text", placeholder: "Email", icon: MdOutlineMailOutline},
        {id: "password", name: "password", type: "text", placeholder: "Password", icon: GrSecure},
    ]

    const responseGoogle = (response) => {
        console.log("Google Login response: ", response)
    }

    return (
        <div>
            <form onSubmit={formik.handleSubmit} className="loginForm">
                {
                    inputsData.map((data, index) => {
                        return (
                            <div className="customInput" key={index}>
                                <data.icon className="customInput__fistIcon"/>
                                <input
                                    className="customInput__input"
                                    id={data.id}
                                    name={data.name}
                                    type={data.type}
                                    placeholder={data.placeholder}
                                    onChange={formik.handleChange}
                                    value={formik.values.data}/>
                            </div>
                        )
                    })
                }
                <button type="submit" className="submitButton">Ingresar</button>
            </form>
            <p className="loginForm__forgetPassword"><b><i>Olvidaste la contraseña ?</i></b></p>
            <p><b><Link to="/session/register" className="loginForm__registerLink">Registrase</Link></b></p>
            <GoogleLogin
                // clientId=""
                buttonText="Login with Google."
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    );
}
