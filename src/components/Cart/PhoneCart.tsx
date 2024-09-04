"use client";
import { products } from "@components/Products/data";
import { Delete } from "@mui/icons-material";
import { Box, Button, List, ListItem, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

const PhoneCart = () => {
  const [quantity, setQuantity] = useState<number>(1);
  const decreaseLength = (name: string): string => {
    const splitName = name.split(" ");
    const reducedNameArr = splitName.slice(0, 10);
    const reducedName = reducedNameArr.join(" ");
    return reducedName;
  };

  return (
    <Box
      sx={{
        display: {
          xs: "block",
          md: "none",
        },
      }}
    >
      <List>
        {products.map((item, index) => {
          return (
            <ListItem
              key={index}
              sx={{
                background: "rgba(255,255,255,0.5)",
                padding: "1rem",
                marginBottom: "1rem",
                boxShadow: "1px 1px 2px rgba(0,0,0,0.2)",
                borderRadius: "5px",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 4,
                }}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  height={100}
                  width={100}
                  style={{
                    maxHeight: "100px",
                  }}
                />
                <Box>
                  <Typography variant="body1">
                    {decreaseLength(item.name)}...
                  </Typography>
                  <Typography variant="body1" color="primary">
                    Price : ${item.price}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      gap: 1,
                      alignItems: "center",
                    }}
                  >
                    <Button
                      variant="text"
                      onClick={() =>
                        setQuantity((prev) => (prev > 1 ? prev - 1 : prev))
                      }
                      size="small"
                      sx={{ fontSize: "2rem" }}
                    >
                      -
                    </Button>
                    <Typography variant="body2" fontSize={20}>
                      {item.quantity}
                    </Typography>
                    <Button
                      onClick={() =>
                        setQuantity((prev) => (prev < 2 ? prev + 1 : prev))
                      }
                      variant="text"
                      sx={{ fontSize: "2rem" }}
                    >
                      +
                    </Button>
                  </Box>
                  <Delete
                    sx={{
                      cursor: "pointer",
                      color: "red",
                      position: "absolute",
                      top: "1rem",
                      right: "0.5rem",
                      "&:hover": {
                        color: "darkred",
                      },
                    }}
                  />
                </Box>
              </Box>
            </ListItem>
          );
        })}
      </List>

      <Box
        component="div"
        sx={{
          background: "rgba(255,255,255,1)",
          position: "fixed",
          bottom: "0",
          left: "0",
          right: "0",
          padding: "2rem",
          borderTopLeftRadius: "10%",
          borderTopRightRadius: "10%",
        }}
      >
        <Button
          sx={{
            width: "full",
          }}
          variant="contained"
        >
          Check Out
        </Button>
      </Box>
    </Box>
  );
};

export default PhoneCart;
