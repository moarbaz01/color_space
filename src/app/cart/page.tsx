import { products } from "@components/Products/data";
import { Delete } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Image from "next/image";

const Cart = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        paddingTop: {
          md: "10rem",
        },
      }}
    >
      <Box>
        <TableContainer component={Paper}>
          <Table
            sx={{
              minWidth: 700,
              "& .MuiTableCell-root": {
                fontSize: "1rem",
                padding: "1rem",
                textAlign: "center",
              },
            }}
            aria-label="customized table"
          >
            <TableHead>
              <TableRow
                sx={{
                  "& .MuiTableCell-root": {
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                  },
                }}
              >
                <TableCell>Product</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Price</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((item, index) => (
                <TableRow key={index}>
                  <TableCell
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      height={50}
                      width={50}
                      style={{
                        height: "auto",
                        width: "auto",
                      }}
                    />
                  </TableCell>
                  <TableCell
                    sx={{
                      maxWidth: "200px",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {item.name}
                  </TableCell>
                  <TableCell>1</TableCell>
                  <TableCell
                    sx={{
                      color: "green",
                    }}
                  >
                    ${item.price}
                  </TableCell>
                  <TableCell>
                    <Delete
                      sx={{
                        cursor: "pointer",
                        color: "red",
                        "&:hover": {
                          color: "darkred",
                        },
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableBody>
              <TableRow>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                  }}
                >
                  Total
                </TableCell>
                <TableCell>...</TableCell>
                <TableCell>7</TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                    color: "green",
                  }}
                >
                  $100
                </TableCell>
                <TableCell>
                  <Button variant="contained">Check Out</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default Cart;
