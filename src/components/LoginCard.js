import { Box, Button, Card, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const users = [
  {
    id: 1,
    name: "avinash",
    email: "avi@gmail.com",
    password: "avi@123",
  },
  {
    id: 2,
    name: "prasad",
    email: "prasad@gmail.com",
    password: "prasad@123",
  },
];

const LoginCard = ({ setIsLoggedIn, setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line
    const currUser = users.map((item) => {
      if (item.email === email && item.password === password) {
        setIsLoggedIn(true);
      }
      return item;
    });

    console.log(currUser);
    setUser(currUser);
  };

  return (
    <div>
      <Typography
        variant="h4"
        color="white"
        textAlign="center"
        marginBottom="10px"
      >
        Account Login
      </Typography>
      <Card sx={{ p: 1, maxWidth: 345 }}>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Card>
    </div>
  );
};

export default LoginCard;
