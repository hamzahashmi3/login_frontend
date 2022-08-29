import { useState } from "react";
import { useField } from "formik";
import { StyledTextInput, StyledLabel, StyledIcons, ErrorMsg } from "./Styles";
import { FiEyeOff, FiEye } from "react-icons/fi";


export const Textinput = ({ icon, ...props }) => {
    const [field, meta] = useField(props);
    const [Show, setShow] = useState(false);

    return (
        <div style={{ position: "relative" }}>
            <StyledLabel htmlFor={props.name}>{props.label}</StyledLabel>
            {
                props.type !== "password" &&
                <StyledTextInput
                    invalid={meta.touched && meta.error}
                    {...field}
                    {...props}
                />
            }
            {
                props.type === "password" &&
                <StyledTextInput
                    invalid={meta.touched && meta.error}
                    {...field}
                    {...props}
                    type={Show ? "text" : "password"}
                />
            }
            <StyledIcons>{icon}</StyledIcons>
            {
                props.type === "password" &&
                <StyledIcons onClick={() => setShow(!Show)} right>
                    {Show && <FiEye />}
                    {!Show && <FiEyeOff />}
                </StyledIcons>
            }
            {
                meta.touched && meta.error ? (
                    <ErrorMsg>
                        {meta.error}
                    </ErrorMsg>
                ) : (
                    <ErrorMsg style={{ visibility: "hidden" }}>
                        .
                    </ErrorMsg>
                )}
        </div>
    );
}