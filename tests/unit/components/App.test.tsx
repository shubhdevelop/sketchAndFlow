import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../../../src/App";

describe("App", () => {
    it("Renders App", () => {
        render(<App />);
        expect(
            screen.getByRole("heading", {
                level: 1,
            })
        ).not.toBeDisabled();
    });
});
