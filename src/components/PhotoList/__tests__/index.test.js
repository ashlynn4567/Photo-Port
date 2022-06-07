// 1. imports ===================================================================== //
import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PhotoList from "..";


// 3. configure the testing environment =========================================== //
afterEach(cleanup);


// 4. tests ======================================================================= //
describe("PhotoList is rendering", () => {
    it("renders", () => {
        render(<PhotoList />);
    });

    it("renders", () => {
        const { asFragment } = render(<PhotoList />);

        expect(asFragment()).toMatchSnapshot();
    });
});