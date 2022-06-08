// 1. imports ===================================================================== //
import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Modal from "..";

// 2. mocks ======================================================================= //
const mockToggleModal = jest.fn();
const currentPhoto = {
    name: "Park bench", 
    category: "landscape", 
    description: "Lorem ipsum dolor sit amet, consectur adipiscing elit.",
    index: 1
};

// 3. configure the testing environment =========================================== //
afterEach(cleanup);


// 4. tests ======================================================================= //
describe("Modal component", () => {
    // baseline test
    it("renders", () => {
        render(<Modal 
            currentPhoto={currentPhoto} 
            onClose={mockToggleModal} 
        />);
    });

    it("matches snapshot DOM node structure", () => {
        const { asFragment } = render(<Modal 
            currentPhoto={currentPhoto} 
            onClose={mockToggleModal} 
        />);
        expect(asFragment()).toMatchSnapshot();
    });
});

describe("Click Event", () => {
    it("calls onClose handler", () => {
        const { getByText } = render(<Modal
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
        />);
        fireEvent.click(getByText("Close this modal"));

        expect(mockToggleModal).toHaveBeenCalledTimes(1);
    });
});