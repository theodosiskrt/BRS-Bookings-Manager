export type Booking = {
  id: string;
  customer: string;
  vessel: string;
  status: string;
  startDate: string;
  endDate: string;
};

export type Filters = {
  status: "all" | "pending" | "confirmed" | "cancelled";
  date: {
    from: string;
    to: string;
  };
};
