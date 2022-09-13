import React from "react";
import { render } from "@testing-library/react";
import SearchForm from "../components/SearchForm";

it("renders", () => {
    const { asFragment } = render(<SearchForm />);

    expect(asFragment()).toMatchSnapshot();
  });