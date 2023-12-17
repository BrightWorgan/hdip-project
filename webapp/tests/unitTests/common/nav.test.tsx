import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import Navbar from "../../../src/common/Navbar";
import { Tabs } from "../../../src/body";

describe("Nav", () => {
  it("should pass enum onClick (Home)", async () => {
    const onClick = vi.fn();

    render(<Navbar tab={Tabs.Team} onClick={onClick} />);
    const homeBtn = await screen.findAllByText("Home");
    await homeBtn[0].click();
    expect(onClick).toHaveBeenCalled();
    expect(onClick).toHaveBeenLastCalledWith(Tabs.Home);
  });

  it("should pass enum onClick (Team)", async () => {
    const onClick = vi.fn();

    render(<Navbar tab={Tabs.Home} onClick={onClick} />);
    const teamBtn = await screen.findAllByText("Team");
    await teamBtn[0].click();
    expect(onClick).toHaveBeenCalled();
    expect(onClick).toHaveBeenLastCalledWith(Tabs.Team);
  });

  it("should pass enum onClick (Home)", async () => {
    const onClick = vi.fn();

    render(<Navbar tab={Tabs.Team} onClick={onClick} />);
    const homeBtn = await screen.findAllByText("Home");
    await homeBtn[0].click();
    expect(onClick).toHaveBeenCalled();
    expect(onClick).toHaveBeenLastCalledWith(Tabs.Home);
  });

  it("should pass enum onClick (Team)", async () => {
    const onClick = vi.fn();

    render(<Navbar tab={Tabs.Home} onClick={onClick} />);
    const teamBtn = await screen.findAllByText("Team");
    await teamBtn[0].click();
    expect(onClick).toHaveBeenCalled();
    expect(onClick).toHaveBeenLastCalledWith(Tabs.Team);
  });
});
