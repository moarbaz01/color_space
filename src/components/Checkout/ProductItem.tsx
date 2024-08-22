"use client";
import { Delete } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import { object } from "zod";

type ItemProps = {
  image: StaticImageData;
  name: string;
  description: string;
  price: number;
  id: string;
};
const ProductItem = ({ image, name, description, price, id }: ItemProps) => {
  const router = useRouter();
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        backgroundColor: "primary.light",
        padding: "1rem",
        borderRadius: "0.5rem",
        cursor: "pointer",
        transition: "all 0.3s ease-in-out",
        position: "relative",
        "&:hover": {
          opacity: 0.8,
        },
      }}
      onClick={() => router.push(`/art/${name}/${id}`)}
    >
      <Delete
        sx={{
          position: "absolute",
          top: 10,
          right: 10,
          color: "red",
          "&:hover": {
            color: "darkred",
          },
        }}
      />
      <Box
        sx={{
          height: 100,
          width: 100,
        }}
      >
        <Image
          src={image}
          alt={name}
          height={80}
          width={80}
          style={{
            borderRadius: "0.5rem",
            objectFit: "cover",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          flex: 2,
        }}
      >
        <Typography
          sx={{
            maxWidth: "200px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
          variant="body1"
        >
          {name}
        </Typography>
        <Typography
          sx={{
            maxWidth: "200px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
          variant="caption"
          color="text.secondary"
        >
          {description}
        </Typography>
        <Typography variant="body1">Quatity : 1</Typography>
        <Typography variant="h5" color="primary">
          ${price}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductItem;
