import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import Fab from "../../../src/common/fab";

describe("App", () => {
  it("render name correctly", () => {
    const name = "my-test-name";
    render(<Fab name={name} onAdd={() => {}} />);

    const buttons = screen.getAllByRole("button");
    // console.log();
    expect(buttons.at(0)?.getAttribute("tooltip")).toContain(name);
    expect(buttons.at(1)?.getAttribute("tooltip")).toContain(name);
    expect(buttons.at(2)?.getAttribute("tooltip")).toContain(name);
    expect(buttons.at(3)?.getAttribute("tooltip")).not.toContain(name);
  });

  it("correctly trigger onAdd", () => {
    const onAdd = vi.fn();
    render(<Fab name={name} onAdd={onAdd} />);
    const buttons = screen.getAllByRole("button");

    const addButton = buttons.at(2);
    addButton?.click();
    expect(onAdd).toHaveBeenCalledOnce();
  });
});
