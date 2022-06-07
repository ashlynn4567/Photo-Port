// 1. imports ===================================================================== //
import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Nav from "..";


// 2. mocks ======================================================================= //
const categories = [
    {
        name: "portraits", 
        description: "Portraits of people in my life"
    }
];
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();
const mockContactSelected = jest.fn();
const mockSetContactSelected = jest.fn();


// 3. configure the testing environment =========================================== //
// after each test, remove any leftover memory data that could give us false results
afterEach(cleanup);


// 4. tests ======================================================================= //
// declare the component we're testing - Nav
describe("Nav component", () => {
    // baseline test - verify that the component is rendering
    it("renders", () => {
        render(<Nav 
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}
        />);
    });

    // snapshot test - compare snapshot of the DOM node structure
    it("matches snapshot", () => {
        const { asFragment } = render(<Nav 
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}
        />);

        expect(asFragment()).toMatchSnapshot();
    });
});

// test for emoji visibility
describe("emoji is visible", () => {
    it("inserts emoji into the h2", () => {
        // query to return the element containing the emoji
        const { getByLabelText } = render(<Nav 
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}
        />);

        expect(getByLabelText("camera")).toHaveTextContent("📸");
    });
});

// test for link visibility
describe("links are visible", () => {
    it("inserts text into the links", () => {
        // query by test id
        const { getByTestId } = render(<Nav 
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}
        />);

        expect(getByTestId("link")).toHaveTextContent("Oh Snap!");
        expect(getByTestId("about")).toHaveTextContent("About Me");
    });
});