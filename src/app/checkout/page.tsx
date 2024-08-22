import { FormAddress, ProductItem } from "@components/Checkout";
import { products } from "@components/Products/data";
import { Box, Container, FormLabel } from "@mui/material";

const OrderPage = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        paddingTop: {
          md: "8rem",
        },
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        {/* LEFT */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            flex: 1,
          }}
        >
          {products.map((item, index) => (
            <ProductItem {...item} key={index} />
          ))}
        </Box>

        {/* Address Page */}
        <Box
          sx={{
            flex: 1,
            position : 'sticky',
            top : 0
          }}
        >
          <FormAddress />
        </Box>
        <Box
          sx={{
            flex: 1,
            backgroundColor: "primary",
          }}
        >
          OrderPage
        </Box>
      </Box>
    </Container>
  );
};

export default OrderPage;
