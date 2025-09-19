import { filterBookings } from "./bookings";

const baseBookings = [
  {
    id: "A",
    customer: "Cust A",
    vessel: "Vessel A",
    status: "confirmed",
    startDate: "2025-01-01",
    endDate: "2025-01-02",
  },
  {
    id: "B",
    customer: "Cust B",
    vessel: "Vessel B",
    status: "pending",
    startDate: "2025-02-15",
    endDate: "2025-02-16",
  },
  {
    id: "C",
    customer: "Cust C",
    vessel: "Vessel C",
    status: "cancelled",
    startDate: "2025-03-10",
    endDate: "2025-03-12",
  },
];

describe("filterBookings util", () => {
  it("returns all bookings when no filters set", () => {
    const filters = { status: "all", date: { from: "", to: "" } } as any;
    const result = filterBookings(filters, baseBookings as any);
    expect(result).toHaveLength(3);
  });

  it("filters by status when status is provided and not 'all'", () => {
    const filters = { status: "pending", date: { from: "", to: "" } } as any;
    const result = filterBookings(filters, baseBookings as any);
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe("B");
  });

  it("filters by from date inclusive", () => {
    const filters = {
      status: "all",
      date: { from: "2025-02-15", to: "" },
    } as any;
    const result = filterBookings(filters, baseBookings as any);
    // bookings on or after 2025-02-15 -> B and C
    expect(result.map((b: any) => b.id).sort()).toEqual(["B", "C"]);
  });

  it("filters by to date inclusive", () => {
    const filters = {
      status: "all",
      date: { from: "", to: "2025-02-15" },
    } as any;
    const result = filterBookings(filters, baseBookings as any);
    // bookings on or before 2025-02-15 -> A and B
    expect(result.map((b: any) => b.id).sort()).toEqual(["A", "B"]);
  });

  it("filters by from and to date range", () => {
    const filters = {
      status: "all",
      date: { from: "2025-02-01", to: "2025-03-01" },
    } as any;
    const result = filterBookings(filters, baseBookings as any);
    // only B falls between Feb 1 and Mar 1
    expect(result.map((b: any) => b.id)).toEqual(["B"]);
  });

  it("returns empty array when bookings list is empty", () => {
    const filters = { status: "all", date: { from: "", to: "" } } as any;
    const result = filterBookings(filters, [] as any);
    expect(result).toHaveLength(0);
  });
});
