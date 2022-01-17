import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const Container = styled.div`
  min-height: fit-content;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  position: absolute;
  background: linear-gradient(108deg, #fff 0%, #8de1fd 100%);

  @media screen and (min-width: 1200px) {
    margin-top: 80px;
  }
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 64%;
  }
`;

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #202020;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    margin-top: 100px;
    padding: 10px;
  }
  @media (min-width: 401px) and (max-width: 1199px) {
    margin-top: 200px;
    padding: 10px;
  }
`;
export const Form = styled.form`
  background: #0050d5;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 60px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 15px;
  font-weight: 200;
  text-align: center;
`;
export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 12px;
  color: #fff;
`;

export const FormInput = styled.input`
  padding: 10px 10px;
  margin-bottom: 25px;
  border: none;
  color: whitesmoke;
  border-radius: 4px;
`;

export const FormInputFile = styled.input`
  display: none;
`;

export const LabelFileUpload = styled.label`
  border: 1px solid #ccc;
  display: inline-block;
  padding: 6px 12px;
  cursor: pointer;
  color: whitesmoke;
`;

export const FormButton = styled.button`
  background: #16c5ff;
  padding: 10px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 15px;
  cursor: pointer;
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 10px;
  margin-bottom: 0px;
  @media (max-width: 400px) {
    margin-bottom: -20px;
  }
`;
