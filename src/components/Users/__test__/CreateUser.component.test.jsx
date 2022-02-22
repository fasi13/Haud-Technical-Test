import React from "react";
import { fireEvent, getByLabelText, render, screen, waitFor } from "@testing-library/react";

import { LandingPage } from "../../LandingPage/LandingPage.component";

import { MemoryRouter, Route, Routes } from "react-router-dom";

import "@testing-library/jest-dom";
import { CreateUser } from "../CreateUser.component";

const mockResponse = {
  address_1: "A.A",
  address_2: "A.A",
  contact_number: 121,
  country: "Ethiopia",
  first_name: "Fasile",
  last_name: "Endalkachew",
  post_code: "12",
  region: "A.A",
  town: "A.A",
};
describe("Landing page", () => {
  beforeEach(() => {
    const user = {
      loading: false,
      users: { "-MwJAaaFg9R3rm6ELAt9": mockResponse },
      error: "",
    };
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route
            path="/"
            element={<LandingPage fetchUser={jest.fn} userData={user} />}
          />
          <Route
            path="/create-user"
            element={
              <CreateUser
                fetchUser={jest.fn}
                updateUser={jest.fn}
                createUser={jest.fn}
                userData={user}
              />
            }
          />
          <Route
            path="edit-user/:userId"
            element={
              <CreateUser
                fetchUser={jest.fn}
                updateUser={jest.fn}
                createUser={jest.fn}
                userData={user}
              />
            }
          />
        </Routes>
      </MemoryRouter>
    );
  });

  test("user click on Add user button and navigate to create user page and cancel to go back to landing page", () => {
    const addButton = screen.getByTestId("add-user");
    fireEvent.click(addButton);
    const cancelButton = screen.getByTestId("cancel");
    fireEvent.click(cancelButton);
    expect(screen.getByText(/Users List/i)).toBeInTheDocument();
  });
});
