import { describe, it, expect } from "vitest";
import { formatSingleDate, formatDateRange } from "./dates";

describe("formatSingleDate", () => {
  it("formats valid date strings correctly", () => {
    expect(formatSingleDate("2027-06-28")).toBe("Jun 28, 2027");
    expect(formatSingleDate("2027-06-28T10:30:00Z")).toBe("Jun 28, 2027");
    expect(formatSingleDate("2025-12-31")).toBe("Dec 31, 2025");
  });

  it("returns empty string for invalid dates", () => {
    expect(formatSingleDate("invalid-date")).toBe("");
    expect(formatSingleDate("")).toBe("");
    expect(formatSingleDate("2025-13-45")).toBe("");
  });
});

describe("formatDateRange", () => {
  it("formats valid date ranges correctly", () => {
    expect(formatDateRange("2027-06-28", "2027-07-07")).toBe(
      "Jun 28, 2027 - Jul 7, 2027"
    );
    expect(formatDateRange("2025-12-30", "2026-01-05")).toBe(
      "Dec 30, 2025 - Jan 5, 2026"
    );
    expect(formatDateRange("2025-03-15", "2025-03-15")).toBe(
      "Mar 15, 2025 - Mar 15, 2025"
    );
  });

  it("returns empty string when any date is invalid", () => {
    expect(formatDateRange("invalid-date", "2027-07-07")).toBe("");
    expect(formatDateRange("2027-06-28", "invalid-date")).toBe("");
    expect(formatDateRange("", "2025-12-25")).toBe("");
  });
});
