import React from "react";
import { Card, CardContent, Typography, Container } from "@material-ui/core";

const Todo = ({ todo, todoNo }) => {
  return (
    <Container>
      <Card
        className="root"
        variant="outlined"
        style={{ marginTop: 35, background: "lightgray" }}
      >
        <CardContent>
          <Typography variant="h5" component="h2">
            {todoNo + 1}.&nbsp;{todo}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Todo;
