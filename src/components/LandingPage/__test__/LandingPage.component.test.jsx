import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { LandingPage } from "../LandingPage.component";
import { MemoryRouter, Route, Routes } from "react-router-dom";

import thunk from "redux-thunk";
import "@testing-library/jest-dom";
import { CreateUser } from "../../Users/CreateUser.component";

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
  test("is render the landing page and list the user", () => {
    const txt = screen.getByText(/Users List/i);
    expect(txt).toBeInTheDocument();
    expect(screen.getByText(/Fasile/i)).toBeInTheDocument();
  });

  test("user click on Add user button and navigate to create user page", () => {
    const addButton = screen.getByTestId("add-user");
    fireEvent.click(addButton);
    expect(screen.getByText(/Create Users/i)).toBeInTheDocument();
  });
  test("user click on Edit User button and navigate to Edit User page", () => {
    const editButton = screen.getByText(/Edit User/i);
    fireEvent.click(editButton);
    expect(screen.getByText(/Update User/i)).toBeInTheDocument();
    screen.debug(undefined, 30000);
  });
});
