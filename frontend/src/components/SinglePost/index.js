import React, { useEffect, useState } from "react";
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
} from "./SinglePElements";
import { updatePostAction } from "../../actions/postsActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import ReactMarkdown from "react-markdown";
import axios from "axios";

function SinglePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [pic, setPic] = useState(
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  );
  const [picMessage, setPicMessage] = useState(null);
  const [date, setDate] = useState("");
  /* const [message, setMessage] = useState("") */
  let { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const postUpdate = useSelector((state) => state.postUpdate);
  const { loading, error, post } = postUpdate;

  console.log(post);
  /*  useEffect(() => {
    if (userInfo) {
      navigate("/myposts");
    }
  }, [navigate, userInfo]);  */

  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(`/api/posts/${id}`);

      setTitle(data.title);
      setContent(data.content);
      setCategory(data.category);
      setPic(data.pic);
      setDate(data.updateAt);
    };
    fetching();
  }, [id, date]);

  const resetHandler = () => {
    setTitle("");
    setCategory("");
    setContent("");
    setPic("");
  };

  const updateHandler = async (e) => {
    e.preventDefault();
    dispatch(updatePostAction(id, title, content, category, pic));
    if (!title || !content || !category || !pic) return;
    resetHandler();
    navigate("/myposts");
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
            <Form onSubmit={updateHandler}>
              {/*  {loading && <h5>Loading...</h5>} */}
              {error && <h3 style={{ color: "#6c0c0c" }}>{error}</h3>}
              <FormH1> Update Post </FormH1>
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
                  <FormLabel htmlForm="for">Post Preview</FormLabel>
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
              {picMessage && <h5 style={{ color: "white" }}>{picMessage}</h5>}
              <FormLabel htmlForm="for"> Profile Picture </FormLabel>
              <FormInput
                type="file"
                placeholder="Introduce Dirección Imagen"
                onChange={(e) => postDetails(e.target.files[0])}
              />
              {loading && <h5>Loading...</h5>}
              <FormButton type="submit">Update Post</FormButton>
              <button style={{ background: "red" }}>Delete</button>
              <button style={{ background: "yellow" }} onClick={resetHandler}>
                Reset Fields
              </button>
              {/* <Text>Updated on - {date.substring(0, 10)}</Text> */}
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
export default SinglePost;
