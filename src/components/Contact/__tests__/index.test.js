// 1. imports ===================================================================== //
import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Contact from "..";


// 2. configure the testing environment =========================================== //
// after each test, remove any leftover memory data that could give us false results
afterEach(cleanup);


// 3. tests ======================================================================= //
// declare the component we're testing - ContactForm
describe("Contact component renders", () => {
    // baseline test 
    it("renders", () => {
        render(<Contact />);
    });

    it("matches snapshot DOM node structure", () => {
        const { asFragment } = render(<Contact />);
        expect(asFragment()).toMatchSnapshot();
    });

    it("renders", () => {
        const { getByTestId } = render(<Contact />);
        expect(getByTestId("h1tag")).toHaveTextContent("Contact me");
    });

    it("renders", () => {
        const { getByTestId } = render(<Contact />);
        expect(getByTestId("button")).toHaveTextContent("Submit");
    });
});