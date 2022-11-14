import { useFormik } from "formik";
import { RegisterSchema } from "@utils";
import { MdOutlineMailOutline } from "react-icons/md"
import { GrSecure } from "react-icons/gr"
import { FaHatCowboySide } from "react-icons/fa"
import { Link } from "react-router-dom";

export const RegisterForm = () => {

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: RegisterSchema,
        onSubmit: (values) => {
            console.log("Login values: ", values )
        }
    })

    const inputsData = [
        {id: "name", name: "name", type: "text", placeholder: "Name", icon: FaHatCowboySide},
        {id: "email", name: "email", type: "text", placeholder: "Email", icon: MdOutlineMailOutline},
        {id: "password", name: "password", type: "text", placeholder: "Password", icon: GrSecure},
        {id: "passwordConfirmation", name: "passwordConfirmation", type: "text", placeholder: "Confirm password", icon: GrSecure}
    ]

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
                                    value={formik.values.data} />
                            </div>
                        )
                    })
                }
                <button type="submit" className="submitButton">Registrarse</button>
            </form>
            <p><b><Link to="/session/login" className="loginForm__registerLink">Iniciar session</Link></b></p>
        </div>
    )
};
