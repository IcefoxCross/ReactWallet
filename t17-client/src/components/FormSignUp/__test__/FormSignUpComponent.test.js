import React from 'react';
import FormSignUp from "../FormSignUpComponent";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe('Sign Up form tests', () => {
    it("Render title", () => {
        const { getByTestId } = render(<FormSignUp />);
        const title = getByTestId("signup-title");
        expect(title).toBeTruthy();
    });
    it('Render all Textfields', () => {
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
})


