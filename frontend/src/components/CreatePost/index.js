import React, { useState } from "react";
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
} from "./CreatePElements";
import { createPostAction } from "../../actions/postsActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import ReactMarkdown from "react-markdown";
import { FaUpload } from "react-icons/fa";
import { FormInputFile, LabelFileUpload } from "../Register/RegisterElements";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [pic, setPic] = useState(
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  );

  /* const [message, setMessage] = useState("") */
  const [picMessage, setPicMessage] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const postCreate = useSelector((state) => state.postCreate);
  const { loading, error, post } = postCreate;

  console.log(post);
  /*  useEffect(() => {
    if (userInfo) {
      navigate("/myposts");
    }
  }, [navigate, userInfo]);  */

  const resetHandler = () => {
    setTitle("");
    setCategory("");
    setContent("");
    setPic("");
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!title || !content || !category || !pic) return;
    dispatch(createPostAction(title, content, category, pic));

    resetHandler();
    navigate("/myposts");
  };

  const postDetails = (pics) => {
    if (!pics) {
      return setPicMessage("Please Select an Image...");
    }
    setPicMessage(`Imagen Cargada:  ...${pics.name.slice(-10)}`);

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
              {loading && <h5>Loading...</h5>}
              <FormH1> Create Post </FormH1>
              <FormLabel htmlForm="for"> Título </FormLabel>
              <FormInput
                type="text"
                value={title}
                placeholder="Introduce Título"
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <FormLabel htmlForm="for"> Content </FormLabel>
              <FormInput
                type="text"
                value={content}
                placeholder="Introduce Contenido"
                onChange={(e) => setContent(e.target.value)}
                required
              />
              {content && (
                <>
                  <FormLabel htmlForm="for">Note Preview</FormLabel>
                  <ReactMarkdown>{content}</ReactMarkdown>
                </>
              )}
              <FormLabel htmlForm="for"> Category </FormLabel>
              <FormInput
                type="text"
                value={category}
                placeholder="Introduce Categoria"
                onChange={(e) => setCategory(e.target.value)}
                required
              />
              <LabelFileUpload>
                <FormInputFile
                  type="file"
                  onChange={(e) => postDetails(e.target.files[0])}
                />

                <div
                  style={{
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      float: "left",
                      paddingLeft: "2px",
                    }}
                  >
                    {!picMessage && <p>Post Picture</p>}
                  </div>
                  <div style={{ float: "left", paddingLeft: "10px" }}>
                    <FaUpload />
                  </div>
                </div>
                <div
                  style={{
                    textAlign: "center",
                  }}
                >
                  {picMessage && (
                    <h5 style={{ color: "white" }}>{picMessage}</h5>
                  )}
                </div>
              </LabelFileUpload>
              <div
                style={{
                  justifyContent: "center",
                  display: "flex",
                  marginTop: "20px",
                }}
              >
                <div
                  style={{
                    float: "left",
                    paddingLeft: "2px",
                  }}
                >
                  <FormButton type="submit">Ingresar</FormButton>
                </div>
                <div
                  style={{
                    float: "left",
                    paddingLeft: "10px",
                  }}
                >
                  <button style={{ background: "red" }} onClick={resetHandler}>
                    Reset Fields
                  </button>
                </div>
              </div>
              <Text>Creating on - {new Date().toLocaleDateString()}</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
}
export default CreatePost;
