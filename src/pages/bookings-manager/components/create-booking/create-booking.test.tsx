import { describe, test, expect, vi } from "vitest";
import CreateBooking from "./create-booking";
import userEvent from "@testing-library/user-event";
import { render } from "../../../../setupTests";

// Mock MUI icons to avoid loading many files from @mui/icons-material in tests
vi.mock("@mui/icons-material", () => ({
  Add: () => null,
}));

describe("CreateBooking (basic)", () => {
  test("opens dialog and shows inputs", async () => {
    const user = userEvent.setup();
    const { getByTestId, queryByTestId } = render(
      <CreateBooking setBookings={() => {}} />
    );

    // Dialog inputs shouldn't be in the document initially
    expect(queryByTestId("create-booking-customer")).toBeNull();

    // Open dialog
    const openBtn = getByTestId("create-booking-open-btn");
    await user.click(openBtn);

    // Inputs should now be present
    expect(getByTestId("create-booking-customer")).not.toBeNull();
    expect(getByTestId("create-booking-vessel")).not.toBeNull();
    expect(getByTestId("create-booking-startDate")).not.toBeNull();
  });

  test("shows validation and calls setBookings on submit when valid", async () => {
    const user = userEvent.setup();
    const mockSet = vi.fn();
    const { getByTestId, getByRole } = render(
      <CreateBooking setBookings={mockSet} />
    );

    // Open dialog
    await user.click(getByTestId("create-booking-open-btn"));

    // Try to submit without filling required fields - Create button should be disabled
    const createBtn = getByRole("button", { name: /^create$/i });
    expect(createBtn).toHaveProperty("disabled", true);

    // Fill required fields
    await user.type(getByTestId("create-booking-customer"), "ACME Corp");
    await user.type(getByTestId("create-booking-vessel"), "SS Minnow");
    await user.type(getByTestId("create-booking-startDate"), "2025-10-01");

    // Create button should be enabled now
    expect(createBtn).toHaveProperty("disabled", false);

    // Submit
    await user.click(createBtn);

    // setBookings should have been called once
    expect(mockSet).toHaveBeenCalledTimes(1);
  });
});
