import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

export const App = () => {
  const [quote, setQuote] = useState("");

  const fetchQuotes = async () => {
    const response = await fetch(
      `https://goquotes-api.herokuapp.com/api/v1/random?count=1`
    );
    const quotes = await response.json();
    quotes.status === 200 && setQuote(quotes.quotes[0].text);
  };

  return (
    <Container
      className="app"
      style={{
        textAlign: "center",
      }}
    >
      <Paper
        elevation={2}
        style={{
          marginTop: "2rem",
          marginBottom: "2rem",
        }}
      >
        {quote ? (
          <Typography
            variant="h5"
            component="h2"
            style={{
              paddingTop: 70,
              paddingBottom: 70,
              paddingLeft: 8,
              paddingRight: 8,
            }}
          >
            {quote}
          </Typography>
        ) : (
          ""
        )}
      </Paper>
      <Button
        variant="contained"
        color="primary"
        onClick={fetchQuotes}
        style={{ marginTop: "2rem", marginBottom: "2rem" }}
      >
        {`Random Quote`}
      </Button>
    </Container>
  );
};
