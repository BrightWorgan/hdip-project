import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import Navbar from "../../../src/common/Navbar";
import { Tabs } from "../../../src/body";
const testOnClick = async (name: string, tab: Tabs) => {
  const onClick = vi.fn();

  render(<Navbar tab={Tabs.Team} onClick={onClick} />);
  const homeBtn = await screen.findAllByText(name);
  await homeBtn[0].click();
  expect(onClick).toHaveBeenCalled();
  expect(onClick).toHaveBeenLastCalledWith(tab);
};
describe("Nav", () => {
  it("should pass enum onClick (Home)", async () => {
    await testOnClick("Home", Tabs.Home);
  });

  it("should pass enum onClick (Team)", async () => {
    await testOnClick("Team", Tabs.Team);
  });

  it("should pass enum onClick (Project)", async () => {
    await testOnClick("Project", Tabs.Project);
  });

  it("should pass enum onClick (Profile)", async () => {
    await testOnClick("User Profile", Tabs.User_Profile);
  });
});
