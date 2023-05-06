import { appReducer, setTheme } from "./appReducer";
import { describe, expect, it } from "vitest";

describe("appReducer", () => {
  it("should switch theme", () => {
    const action = setTheme("light");
    const nextState = appReducer.reducer({ theme: "dark" }, action);
    expect(nextState.theme).toEqual("light");
  });
});
