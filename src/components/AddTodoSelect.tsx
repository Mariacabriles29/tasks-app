import React from "react";
import {
  Select,
  MenuItem,
  FormControl,
  SelectChangeEvent,
} from "@mui/material";

interface AddTodoSelectProps {
  value: string;
  onChange: (event: SelectChangeEvent<string>) => void;
}
const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "12px",
};

const AddTodoSelect: React.FC<AddTodoSelectProps> = ({ value, onChange }) => {
  return (
    <div style={containerStyle}>
      <FormControl sx={{ minWidth: 130, minHeight: 40 }}>
        <Select
          labelId="select-label"
          value={value}
          onChange={onChange}
          sx={{
            fontSize: "12px",
          }}
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="complete">Complete</MenuItem>
          <MenuItem value="incomplete">Incomplete</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default AddTodoSelect;
