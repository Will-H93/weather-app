import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchForm from "../components/SearchForm";

describe("SearchForm", () => {
  const validProps = {
    searchText: "Test Search Text",
    setSearchText: jest.fn(),
    onSubmit: jest.fn(),
  };

  test("renders", () => {
    const { asFragment } = render(
      <SearchForm
        searchText={validProps.searchText}
        setSearchText={validProps.setSearchText}
        onSubmit={validProps.onSubmit}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test("button displays correct text", () => {
    render(
      <SearchForm
        searchText={validProps.searchText}
        setSearchText={validProps.setSearchText}
        onSubmit={validProps.onSubmit}
      />
    );

    const button = screen.getByText("Search");

    expect(button).toBeInTheDocument();
  });

  test("clicking button causes submit function to be called", () => {
    render(
      <SearchForm
        searchText={validProps.searchText}
        setSearchText={validProps.setSearchText}
        onSubmit={validProps.onSubmit}
      />
    );
    const button = screen.getByText("Search");
    fireEvent.click(button);

    expect(validProps.onSubmit).toHaveBeenCalledTimes(1);
  });
});
