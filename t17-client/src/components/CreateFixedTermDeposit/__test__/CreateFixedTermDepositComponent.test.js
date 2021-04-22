import React from 'react';
import CreateFixedTermDepositComponent from "../CreateFixedTermDepositComponent";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { act } from 'react-dom/test-utils';

describe('Create FTD form tests', () => {
  it("Render title", () => {
    const { getByTestId } = render(<CreateFixedTermDepositComponent />);
    const title = getByTestId("create-ftd-title");
    expect(title).toBeTruthy();
  });
  it('Render all inputs', () => {
    const { getByTestId } = render(<CreateFixedTermDepositComponent />);
    const inputAmount = getByTestId("input-amount");
    expect(inputAmount).toBeTruthy();
  })
  it('Render Button', () => {
    const { getByTestId } = render(<CreateFixedTermDepositComponent />);
    const button = getByTestId("create-ftd-button");
    expect(button).toBeTruthy();
  })

  it('inputs first name empty on startup', () => {
    const { getByTestId } = render(<CreateFixedTermDepositComponent />)
    const inputAmount = getByTestId("input-amount");
    expect(inputAmount.querySelector('input')).toHaveValue('')
  })

  it('Change value inputs', async () => {
    const { getByTestId, getByLabelText } = render(<CreateFixedTermDepositComponent />);
    await act(async () => {
      fireEvent.change(getByLabelText("Monto"), {
        target: { value: "1000" },
      });
    });
    expect(getByLabelText("Monto")).toHaveValue("1000");
  })
})


