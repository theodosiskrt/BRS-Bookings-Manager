import BookingPreview from "./booking-preview";
import userEvent from "@testing-library/user-event";
import { render } from "../../../../setupTests";

// Mock icons to avoid heavy imports
vi.mock("@mui/icons-material", () => ({
  Edit: () => null,
  Delete: () => null,
  Close: () => null,
}));

const SAMPLE_BOOKING = {
  id: "BK-1",
  customer: "ACME Corp",
  vessel: "SS Minnow",
  status: "confirmed",
  startDate: "2025-10-01",
  endDate: "2025-10-05",
};

describe("BookingPreview", () => {
  it("renders booking details when provided", () => {
    const onClose = vi.fn();
    const { getByTestId } = render(
      <BookingPreview selectedBooking={SAMPLE_BOOKING} onClose={onClose} />
    );

    // check rendered elements via test ids
    expect(getByTestId("booking-preview-title")).toBeTruthy();
    expect(getByTestId("booking-preview-id")).toHaveTextContent(
      SAMPLE_BOOKING.id
    );
    expect(getByTestId("booking-preview-customer")).toHaveTextContent(
      SAMPLE_BOOKING.customer
    );
    expect(getByTestId("booking-preview-vessel")).toHaveTextContent(
      SAMPLE_BOOKING.vessel
    );
    expect(getByTestId("booking-preview-dates")).toBeTruthy();
    expect(getByTestId("booking-preview-status")).toHaveTextContent(
      SAMPLE_BOOKING.status
    );
  });

  it("does not render when selectedBooking is null", () => {
    const onClose = vi.fn();
    const { queryByTestId } = render(
      <BookingPreview selectedBooking={null} onClose={onClose} />
    );
    expect(queryByTestId("booking-preview-title")).toBeNull();
  });

  it("calls onClose when close button is clicked", async () => {
    const onClose = vi.fn();
    const user = userEvent.setup();
    const { getByTestId } = render(
      <BookingPreview selectedBooking={SAMPLE_BOOKING} onClose={onClose} />
    );

    const closeBtn = getByTestId("booking-preview-close");
    await user.click(closeBtn);
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
