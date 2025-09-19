import React, { useCallback, useMemo, useState } from "react";
import {
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@mui/material";
import {
  CheckCircle,
  Cancel,
  HourglassEmpty,
  AllInclusive,
} from "@mui/icons-material";

const STATUS_OPTIONS = [
  { value: "all", label: "All", icon: <AllInclusive /> },
  { value: "confirmed", label: "Confirmed", icon: <CheckCircle /> },
  { value: "cancelled", label: "Cancelled", icon: <Cancel /> },
  { value: "pending", label: "Pending", icon: <HourglassEmpty /> },
];

const StatusFilter = ({
  value,
  setValue,
}: {
  value: string;
  setValue: (v: string) => void;
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const selected = useMemo(
    () => STATUS_OPTIONS.find((o) => o.value === value),
    [value]
  );

  const openMenu = useCallback(
    (e: React.MouseEvent<HTMLElement>) => setAnchorEl(e.currentTarget),
    []
  );
  const closeMenu = useCallback(() => setAnchorEl(null), []);

  const handleSelect = useCallback(
    (v: string) => {
      setValue(v);
      closeMenu();
    },
    [setValue, closeMenu]
  );

  return (
    <>
      <Tooltip title={`Filter bookings - ${selected?.label}`}>
        <IconButton
          aria-label="filter bookings by status"
          onClick={openMenu}
          color={value !== "all" ? "primary" : "default"}
        >
          {selected?.icon}
        </IconButton>
      </Tooltip>

      <Menu anchorEl={anchorEl} open={!!anchorEl} onClose={closeMenu}>
        {STATUS_OPTIONS.map((option) => (
          <MenuItem
            key={option.value}
            selected={value === option.value}
            onClick={() => handleSelect(option.value)}
          >
            <ListItemIcon>{option.icon}</ListItemIcon>
            <ListItemText>{option.label}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default StatusFilter;
