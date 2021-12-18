import React, { useEffect, useState } from "react";
/* import { Link } from "react-router-dom"; */
/* import Navbar from "../Navbar/Navbar"; */
import {
  Container,
  FormWrap,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
} from "./RegisterElements";
import { register } from "../../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

function Register() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pic, setPic] = useState(
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  );
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [picMessage, setPicMessage] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;
  useEffect(() => {
    if (userInfo) {
      navigate("/myposts");
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmpassword) {
      setMessage("Passwords do not match");
    } else dispatch(register(name, email, password, pic));
  };

  const postDetails = (pics) => {
    if (!pics) {
      return setPicMessage("Please Select an Image...");
    }
    setPicMessage(null);

    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();

      data.append("file", pics);
      data.append("upload_preset", "bluemern");
      data.append("cloud_name", "rikocode");
      fetch("https://api.cloudinary.com/v1_1/rikocode/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setPic(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return setPicMessage("Please Select an Image");
    }
  };
  return (
    <>
      <Container>
        <FormWrap>
          <FormContent>
            <Form onSubmit={submitHandler}>
              {error && <h3 style={{ color: "#6c0c0c" }}>{error}</h3>}
              {message && <h3 style={{ color: "#6c0c0c" }}>{message}</h3>}
              {loading && <h5>Loading...</h5>}
              <FormH1> Register Now!! </FormH1>
              <FormLabel htmlForm="for"> Nombre </FormLabel>
              <FormInput
                type="text"
                value={name}
                placeholder="Introduce Nombre"
                onChange={(e) => setName(e.target.value)}
                required
              />
              <FormLabel htmlForm="for"> Email </FormLabel>
              <FormInput
                type="email"
                value={email}
                placeholder="Introduce Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <FormLabel htmlForm="for"> Password </FormLabel>
              <FormInput
                type="password"
                value={password}
                placeholder="Introduce Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <FormLabel htmlForm="for"> Confirm Password </FormLabel>
              <FormInput
                type="password"
                value={confirmpassword}
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {picMessage && <h5 style={{ color: "white" }}>{picMessage}</h5>}
              <FormLabel htmlForm="for"> Profile Picture </FormLabel>
              <FormInput
                type="file"
                placeholder="Introduce Dirección Imagen"
                onChange={(e) => postDetails(e.target.files[0])}
              />

              <FormButton type="submit">Registrar</FormButton>
              {/* <Text>
                Nuevo? <Link to="/register">Registrate Aquí!</Link>
              </Text> */}
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
}
export default Register;
