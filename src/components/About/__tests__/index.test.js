// 1. imports ===================================================================== //
import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import About from "..";


// 2. configure the testing environment =========================================== //
// after each test, we won't have any leftover memory data that could give us false results
afterEach(cleanup);


// 3. tests ======================================================================= //
// declare the component we're testing
describe("About component", () => {
    // baseline test to verify that the component is rendering
    it("renders", () => {
        render(<About />);
    });

    // compare snapshot of the DOM node structure
    it("matches snapshot DOM node structure", () => {
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    });
});
