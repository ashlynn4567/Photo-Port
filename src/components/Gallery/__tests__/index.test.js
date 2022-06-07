// 1. imports ===================================================================== //
import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Gallery from "..";


// 2. mocks ======================================================================= //
const portrait = {
    name: "portraits", 
    description: "Portraits of people in my life"
};


// 3. configure the testing environment =========================================== //
afterEach(cleanup);


// 4. tests ======================================================================= //
describe("Gallery is rendering", () => {
    it("renders", () => {
        render(<Gallery currentCategory={portrait} />);
    });

    it("matches snapshot", () => {
        const { asFragment } = render(<Gallery currentCategory={portrait} />);

        expect(asFragment()).toMatchSnapshot();
    });

    it("renders", () => {
        const { getByTestId } = render(<Gallery currentCategory={portrait} />);

        expect(getByTestId("h1tag")).toHaveTextContent("Portraits");
    });
});