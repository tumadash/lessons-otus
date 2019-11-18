import * as React from "react";

export interface ButtonProps {
    submit: () => void,
    title: string,
    disabled?: boolean
}

export const Button = ({submit, title, disabled}: ButtonProps) => (
    <button disabled={disabled} className="btn btn-primary" onClick={submit}>{title}</button>);