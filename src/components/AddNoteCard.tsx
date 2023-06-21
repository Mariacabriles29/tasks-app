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
import { ModalPaypal } from "./modals/ModalPaypal";
import { PayPalButton } from "react-paypal-button-v2";

const style = {
  bgcolor: "background.paper",
  boxShadow: 10,
  width: "100%",
  minHeight: 80,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
};
interface AddNoteCardProps {
  id: string;
  title: string;
  description: string;
  onBuy: () => void;
  onDelete: (id: string) => void;
}

export const AddNoteCard = ({
  id,
  title,
  description,
  onBuy,
  onDelete,
}: AddNoteCardProps) => {
  const [checked, setChecked] = useState(false);
  const [open, setOpen] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Box
      sx={{
        marginBottom: 4,
        width: "100%",
      }}
    >
      <Card sx={style}>
        <CardContent
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Checkbox checked={checked} onChange={handleCheckboxChange} />
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                flexDirection: "column",
                width: "100%",
              }}
            >
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
                onClick={() => handleOpen()}
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
              ></Button>{" "}
              <Button
                variant="contained"
                color="error"
                onClick={() => {
                  onDelete(id);
                }}
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
        <ModalPaypal
          open={open}
          handleClose={() => {
            setOpen(false);
          }}
          handleOpen={() => {
            setOpen(true);
          }}
          noteId={1}
        />
      </Card>{" "}
    </Box>
  );
};
