import React from 'react';
import CashOutComponent from "../CashOutComponent";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { act } from 'react-dom/test-utils';

describe('Sign Up form tests', () => {
  it("Render title", () => {
    const { getByTestId } = render(<CashOutComponent />);
    const title = getByTestId("cashout-title");
    expect(title).toBeTruthy();
  });
  it('Render all inputs', () => {
    const { getByTestId } = render(<CashOutComponent />);
    const inputAmount = getByTestId("input-amount");
    const inputConcept = getByTestId("input-concept");
    expect(inputAmount).toBeTruthy()
    expect(inputConcept).toBeTruthy();
  })
  it('Render Button', () => {
    const { getByTestId } = render(<CashOutComponent />);
    const button = getByTestId("cashout-button");
    expect(button).toBeTruthy();
  })

  it('inputs amount empty on startup', () => {
    const { getByTestId } = render(<CashOutComponent />)
    const inputAmount = getByTestId("input-amount");
    expect(inputAmount.querySelector('input')).toHaveValue('')
  })
  it('input concept empty on startup', () => {
    const { getByTestId } = render(<CashOutComponent />)
    const inputAmount = getByTestId("input-concept");
    expect(inputAmount.querySelector('input')).toHaveValue('')
  })

  it('Change value inputs', async () => {
    const { getByTestId, getByLabelText } = render(<CashOutComponent />);
    await act(async () => {
      fireEvent.change(getByLabelText("Monto"), {
        target: { value: "4000" },
      });
      fireEvent.change(getByLabelText("Concepto"), {
        target: { value: "Retiro de dinero" },
      });
    });
    expect(getByLabelText("Monto")).toHaveValue("4000");
    expect(getByLabelText("Concepto")).toHaveValue("Retiro de dinero");
  })
})


