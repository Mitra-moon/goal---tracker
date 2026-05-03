import Navbar from "./Navbar";
import { Container, Box } from "@mui/material";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />

      <Container maxWidth="lg">
        <Box
          sx={{
            mt: 3,
            animation: "fadeIn 0.4s ease"
          }}
        >
          {children}
        </Box>
      </Container>

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </>
  );
}