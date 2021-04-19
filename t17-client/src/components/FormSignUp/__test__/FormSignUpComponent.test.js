import React from 'react';
import FormSignUp from "../FormSignUpComponent";
import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";


describe('Sign Up form tests', () => {
    test("render conrrectly", () => {
        const { queryByText, queryByPlaceholderText } = render(<FormSignUp />);
        const buttonSignUpEl = queryByText("signup-button")
        const inputFirstNameEl = queryByPlaceholderText("Nombre");
        // const inputLastNameEl = getByTestId("input-last-name");
        // const inputEmailEl = getByTestId("input-email");
        // const inputPasswordEl = getByTestId("input-password");

        expect(buttonSignUpEl).toBeTruthy()
        expect(inputFirstNameEl).toBeTruthy()
        // expect(inputLastNameEl.value).toBe("");
        // expect(inputEmailEl.value).toBe("");
        // expect(inputPasswordEl.value).toBe("");
    });
})


