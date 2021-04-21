import React from 'react';
import FormSignUp from "../FormSignUpComponent";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { act } from 'react-dom/test-utils';

describe('Sign Up form tests', () => {
    it("Render title", () => {
        const { getByTestId } = render(<FormSignUp />);
        const title = getByTestId("signup-title");
        expect(title).toBeTruthy();
    });
    it('Render all inputs', () => {
        const { getByTestId } = render(<FormSignUp />);
        const inputFirstName = getByTestId("input-first-name");
        const inputLastName = getByTestId("input-last-name");
        const inputEmail = getByTestId("input-email");
        const inputPassword = getByTestId("input-password");
        expect(inputFirstName).toBeTruthy()
        expect(inputLastName).toBeTruthy();
        expect(inputEmail).toBeTruthy();
        expect(inputPassword).toBeTruthy();
    })
    it('Render Button', () => {
        const { getByTestId } = render(<FormSignUp />);
        const button = getByTestId("signup-button");
        expect(button).toBeTruthy();
    })

    it('inputs first name empty on startup', () => {
        const {getByTestId} = render(<FormSignUp />)
        const inputFirstName = getByTestId("input-first-name");
        expect(inputFirstName.querySelector('input')).toHaveValue('')
    })
    it('input last name empty on startup', () => {
        const {getByTestId} = render(<FormSignUp />)
        const inputFirstName = getByTestId("input-last-name");
        expect(inputFirstName.querySelector('input')).toHaveValue('')
    })
    it('input email empty on startup', () => {
        const {getByTestId} = render(<FormSignUp />)
        const inputFirstName = getByTestId("input-email");
        expect(inputFirstName.querySelector('input')).toHaveValue('')
    })
    it('input paswword empty on startup', () => {
        const {getByTestId} = render(<FormSignUp />)
        const inputFirstName = getByTestId("input-password");
        expect(inputFirstName.querySelector('input')).toHaveValue('');
    })

    it('Change value inputs', async () => {
        const { getByTestId, getByLabelText } = render(<FormSignUp/>);
        await act(async () => {
            fireEvent.change(getByLabelText("Nombre"), {
                target: { value: "NombreTest" },
            });
            fireEvent.change(getByLabelText("Apellido"), {
                target: { value: "ApellidoTest" },
            });
            fireEvent.change(getByLabelText("Correo"), {
                target: { value: "emailTest" },
            });
            fireEvent.change(getByLabelText("Contraseña"), {
                target: { value: "123456" },
            });
        });
        expect(getByLabelText("Nombre")).toHaveValue("NombreTest");
        expect(getByLabelText("Apellido")).toHaveValue('ApellidoTest');
        expect(getByLabelText("Correo")).toHaveValue('emailTest');
        expect(getByLabelText("Contraseña")).toHaveValue('123456');
    })
})


