import React, { useState } from "react";
import { Link } from "react-router-dom";
/* import Navbar from "../Navbar/Navbar"; */
/* import Loading from "../Loading";
import ErrorMessage from "../ErrorMessage" */
import axios from "axios";
/* import { useNavigate } from "react-router-dom"; */
import {
  Container,
  FormWrap,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from "./SigninElements";
function SigninScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  /*  const navigate = useNavigate(); */
  /*   useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      navigate("/myposts");
    }
  }, [navigate]); */

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      setLoading(true);
      const { data } = await axios.post(
        "/api/users/login",
        {
          email,
          password,
        },
        config
      );
      console.log(data);
      /* Quiero que mi email y pass 
         se guarden en localstorage
         (no puede recibir objetos 
          por eso el stringify) 
      */
      localStorage.setItem("userInfo", JSON.stringify(data));
      setError(false);
      setLoading(false);
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
    }
  };
  return (
    <>
      <Container>
        <FormWrap>
          <FormContent>
            <Form onSubmit={submitHandler}>
              {error && <h3 style={{ color: "#6c0c0c" }}>{error}</h3>}
              {loading && <h5>Loading...</h5>}
              <FormH1> Sign in to your code </FormH1>
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
              <FormButton type="submit">Continue</FormButton>
              <Text>
                Nuevo? <Link to="/register">Registrate Aquí!</Link>
              </Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
}
export default SigninScreen;
