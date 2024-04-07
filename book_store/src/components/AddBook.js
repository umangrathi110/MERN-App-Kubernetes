import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// const REACT_APP_BACKEND_ENDPOINT = process.env.REACT_APP_BACKEND_ENDPOINT;

export default function AddBook() {
  console.log("hjjhgjh  :  ", process.env.REACT_APP_BACKEND_ENDPOINT)

  const history = useNavigate();

  // now we have to handle this form we use useState.

  const [input, setInputs] = useState({
    name: "",
    description: "",
    author: "",
    price: "",
    image: "",
  });

  // this ifor avilable.
  const [checked, setChecked] = useState(false);

  // by the help of onChange value conatain all latest input value and send to this function.
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

    // console.log(e.target.name, "value", e.target.value);
  };

  //IMPORTANT part  Now we want send data to database.

  // this function is async function because it is sync task. we want to import axios to send the request.
  //we use await so then used must.
  const sendRequest = async () => {

    await axios
    .post(`/api/books`, {
      // we have to send data in string thats why
        name: String(input.name),
        author: String(input.author),
        description: String(input.description),
        price: Number(input.price),
        image: String(input.image),
        avilable: Boolean(input.checked),
      })
      .then((resp) => resp.data); // data (property) represnt in axios
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // it prevent whenever reload the page is send.
    console.log(input);
    sendRequest().then(() => history("/books")); // we call sendrequest after that now push the user's on the books page. for this we import react-router-dom.
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          maxWidth={700}
          alignItems="center"
          alignSelf="center"
          marginLeft={"auto"}
          marginRight={"auto"}
          marginTop={10}
        >
          <FormLabel>Name</FormLabel>
          <TextField
            value={input.name} // use state me h kyuki by using input can change
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="name" //name = "name ye ditto copy hona chaiye jo tumne useState me kiye h."
          />

          <FormLabel>Author</FormLabel>
          <TextField
            value={input.author}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="author"
          />

          <FormLabel>Description</FormLabel>
          <TextField
            value={input.description}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="description"
          />

          <FormLabel>Price</FormLabel>
          <TextField
            value={input.price}
            onChange={handleChange}
            type="number"
            margin="normal"
            fullWidth
            variant="outlined"
            name="price"
          />
          <FormLabel>Image</FormLabel>
          <TextField
            value={input.image}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="image"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={input.avilable}
                onChange={() => setChecked(!checked)}
              />
            }
            // baiscally it cheked the opposite value
            label="Available"
            // we give checked = false because we want to true as a dynamically.
          />
          <Button variant="contained" type="submit">
            Add Book
          </Button>
        </Box>
      </form>
    </>
  );
}
// 1:18
