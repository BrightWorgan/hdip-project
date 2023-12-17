import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import Fab from "../../../src/common/fab";

describe("App", () => {
  it("render name correctly", () => {
    const name = "my-test-name";
    render(<Fab name={name} onAdd={() => {}} onEdit={() => {}} />);

    const buttons = screen.getAllByRole("button");
    // console.log();
    expect(buttons.at(0)?.getAttribute("tooltip")).toContain(name);
    expect(buttons.at(1)?.getAttribute("tooltip")).toContain(name);
    expect(buttons.at(2)?.getAttribute("tooltip")).toContain(name);
    expect(buttons.at(3)?.getAttribute("tooltip")).not.toContain(name);
  });

  it("correctly trigger onAdd", () => {
    const onAdd = vi.fn();
    render(<Fab name={"name"} onAdd={onAdd} onEdit={() => {}} />);
    const buttons = screen.getAllByRole("button");

    const addButton = buttons.at(2);
    addButton?.click();
    expect(onAdd).toHaveBeenCalledOnce();
  });

  it("correctly trigger onEdit", () => {
    const onEdit = vi.fn();
    render(<Fab name={"name"} onAdd={() => {}} onEdit={onEdit} />);
    const buttons = screen.getAllByRole("button");

    const editButton = buttons.at(1);
    editButton?.click();
    expect(onEdit).toHaveBeenCalledOnce();
  });

  it("correctly trigger onRemove", () => {
    const onRemove = vi.fn();
    render(
      <Fab
        name={"name"}
        onAdd={() => {}}
        onEdit={() => {}}
        onRemove={onRemove}
      />
    );
    const buttons = screen.getAllByRole("button");

    const deleteButton = buttons.at(0);
    deleteButton?.click();
    expect(onRemove).toHaveBeenCalledOnce();
  });
});
