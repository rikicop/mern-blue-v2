/* import Navbar from "../Navbar/Navbar"; */
/* import Loading from "../Loading";
import ErrorMessage from "../ErrorMessage" */
import { useNavigate } from "react-router-dom";
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
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/userActions";

function SigninScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  /*   useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      navigate("/myposts");
    }
  }, [navigate]); */

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate("/myposts");
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(login(email, password));
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
