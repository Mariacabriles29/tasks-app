import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Checkbox,
  Icon,
  Grid,
} from "@mui/material";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

import { AddShoppingCart } from "@mui/icons-material";
import AddTodoSelect from "./AddTodoSelect";

const style = {
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 10,
  minWidth: 700,
  minHeight: 80,
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
};
interface AddNoteCardProps {
  title: string;
  description: string;
  onBuy: () => void;
  onDelete: () => void;
}

export const AddNoteCard = ({
  title,
  description,
  onBuy,
  onDelete,
}: AddNoteCardProps) => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <Box>
      <Card sx={style}>
        <CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <Checkbox checked={checked} onChange={handleCheckboxChange} />
            <Box>
              <Typography variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "8px",
                width: "100%",
                marginLeft: "40px",
              }}
            >
              <Button
                variant="contained"
                onClick={onBuy}
                startIcon={
                  <Icon
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <AddShoppingCart />
                  </Icon>
                }
              ></Button>
              <Button
                variant="contained"
                color="error"
                onClick={onDelete}
                startIcon={
                  <Icon
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <DeleteIcon />
                  </Icon>
                }
              ></Button>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
