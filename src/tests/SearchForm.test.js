import React from "react";
import { render } from "@testing-library/react";
import SearchForm from "../components/SearchForm";

it("renders", () => {
  const validProps = {
    searchText: "Test Search Text",
    setSearchText: jest.fn(),
    onSubmit: jest.fn(),
  }
    const { asFragment } = render(<SearchForm searchText={ validProps.searchText } setSearchText={ validProps.setSearchText } onSubmit={ validProps.onSubmit }/>);

    expect(asFragment()).toMatchSnapshot();
  });