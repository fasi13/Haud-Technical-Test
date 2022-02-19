import React from 'react'
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";
import LandingPageComponent from "../LandingPage.component";

describe("Landing page", () => {
  test("is render the landing page", () => {
    const { debug } = render(
      <Provider store={store}>
        <LandingPageComponent />
      </Provider>
    );
    debug(undefined, 30000);
    expect(true).toBe(true);
  });
});
