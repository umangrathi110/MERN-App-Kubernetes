
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// const REACT_APP_BACKEND_ENDPOINT = process.env.REACT_APP_BACKEND_ENDPOINT;

const BookDetails = () => {
  const [input, setInputs] = useState({});
  const [checked, setChecked] = useState(false);
  const history = useNavigate();
  const id = useParams().id;
  
  console.log(id);
  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`/api/books/${id}`)
        .then((resp) => resp.data)
        .then((data) => setInputs(data.books));
      //error milgaya book ki jagha books ayega maine check kiya ki Books.js me useState ke books use h sayad islye use hua h.
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`http://REACT_APP_BACKEND_ENDPOINT/books/${id}`, {
        name: String(input.name),
        author: String(input.author),
        description: String(input.description),
        price: Number(input.price),
        image: String(input.image),
        avilable: Boolean(input.checked),
      })
      .then((resp) => resp.data); // data send bhi to karna h.
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/books"));
  };
  const handleChange = (e) => {
    // to change the data in input field we use AddBook handleChange() Function
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log(e);
  };
  console.log(input);
  return (
    <div>
      {input && (
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
              update Book
            </Button>
          </Box>
        </form>
      )}
    </div>
  );
};

export default BookDetails;
