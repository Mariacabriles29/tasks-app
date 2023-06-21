import { Modal, Container, CssBaseline, Box } from "@mui/material";
import React from "react";
import { PayPalButton } from "react-paypal-button-v2";

interface ModalPaypalProps {
  open: boolean;
  handleClose: any;
  handleOpen: any;
  noteId: any;
}
export const ModalPaypal = (props: ModalPaypalProps) => {
  const onSuccess = (details: any, data: any) => {
    console.log("Payment succeeded", details, data);
  };

  const onCancel = (data: any) => {
    console.log("Payment cancelled", data);
  };

  const onError = (err: any) => {
    console.error("Payment error", err);
  };

  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Container
        component="main"
        maxWidth="xs"
        sx={{ marginTop: 8, backgroundColor: "white", padding: "16px" }}
      >
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <PayPalButton
            amount="0.01"
            // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
            onSuccess={(details: any, data: any) => {
              alert(
                "Transaction completed by " + details.payer.name.given_name
              );

              // OPTIONAL: Call your server to save the transaction
              return fetch("/paypal-transaction-complete", {
                method: "post",
                body: JSON.stringify({
                  orderId: data.orderID,
                }),
              });
            }}
            createOrder={(data: any, actions: any) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: "1.00", // El valor del pago
                    },
                  },
                ],
              });
            }}
            onError={onError}
            style={{
              layout: "horizontal",
            }}
            options={{
              clientId:
                "AeMb4WUpuEIPlN6dhWmJ3k9Q8Hotdu2H4FPvAkTCzoL_3BkxQCxZyaP6zrLSOULZTg4Bmpzzkd1fYKVL",
              currency: "USD",
              commit: false,
            }}
          />
        </Box>
      </Container>
    </Modal>
  );
};
