import { describe, it, expect } from "vitest";
import { formatNumber } from "./formatNumber";

describe("formatNumber", () => {
    it("форматирует число с тремя разрядами", () => {
        expect(formatNumber(1000)).toBe("1 000");
    });

    it("форматирует большое число", () => {
        expect(formatNumber(1234567)).toBe("1 234 567");
    });

    it("форматирует число без изменений, если оно < 1000", () => {
        expect(formatNumber(999)).toBe("999");
    });

    it("работает с нулем", () => {
        expect(formatNumber(0)).toBe("0");
    });

    it("работает с числами, кратными 1000", () => {
        expect(formatNumber(1000000)).toBe("1 000 000");
    });
});
