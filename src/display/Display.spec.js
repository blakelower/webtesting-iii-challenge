import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Display from "./Display";

afterEach(rtl.cleanup);
let wrapper;
let Unlocked = () => {
  return wrapper.queryByText("Unlocked");
};
let Open = () => {
  return wrapper.queryByText("Open");
};
let Closed = () => {
  return wrapper.queryByText("Closed");
};
let Locked = () => {
  return wrapper.queryByText("Locked");
};
it("not crashing", () => {
  wrapper = rtl.render(<Display />);
  expect(wrapper.container).toMatchSnapshot();
});
it("default props", () => {
  wrapper = rtl.render(<Display closed={false} locked={false} />);
  expect(wrapper.container).toMatchSnapshot();
  expect(Unlocked()).toHaveClass("led", "green-led");
  expect(Open()).toBeInTheDocument();
  expect(Open()).toHaveClass("led", "green-led");
});
it("set to true", () => {
  wrapper = rtl.render(<Display closed={true} locked={false} />);
  expect(wrapper.container).toMatchSnapshot();
  expect(Unlocked()).toBeVisible();
  expect(Unlocked()).toHaveClass("led", "green-led");
  expect(Closed()).toHaveClass("led", "red-led");
});
it("closed and locked to true", () => {
  wrapper = rtl.render(<Display closed={true} locked={true} />);
  expect(Locked()).toHaveClass("led", "red-led");
  expect(Closed()).toBeInTheDocument();
  expect(Closed()).toHaveClass("led", "red-led");
});
