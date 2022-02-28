import React, { useEffect, useState } from "react";
import {
  Container,
  Footer,
  Content,
  Navbar,
  Sidebar,
  Titulo,
  ImgContainer,
  Imagen,
  SocialMediaWrap,
  SocialIconLink,
  SocialIcons,
  LeftNavTitle,
  RightNavTitle,
  NavBtnLink,
  Autor,
} from "./SingleBElements";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { useParams, useNavigate } from "react-router";
import axios from "axios";

function SingleBlog() {
  //const [blog, setBlog] = useState([]);
  const [autor, setAutor] = useState({ auth: [] });
  const [blog, setBlog] = useState({});
  const [authName, setAuthName] = useState([]);

  let { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(`/api/blogs/${id}`);

      const respAuth = await axios(`/api/users/all`);
      const autores = Object.values(respAuth.data);
      console.log("Autores 1: ", autores);
      let filtrado = autores.filter((item) => item._id === data.user);
      let authorName = filtrado.map((a) => a.name);
      setAuthName(authorName);
      setAutor({ auth: filtrado });
      setBlog(data);
      console.log("Esto es data user :", data.user);
    };
    fetching();
  }, [id, setAutor, setBlog, setAuthName]);

  console.log("single blog title: ", blog.title);
  console.log("Autores: ", autor);

  function HandleHistory() {
    navigate("/");
    window.location.reload();
  }
  return (
    <>
      <Container>
        <Navbar>
          <LeftNavTitle>Blog </LeftNavTitle>
          <RightNavTitle>
            <NavBtnLink onClick={HandleHistory}>Tecnemas</NavBtnLink>
          </RightNavTitle>
        </Navbar>
        <Titulo>{blog.title}</Titulo>
        <ImgContainer>
          <Imagen src={blog.pic} alt="" />
        </ImgContainer>
        <Sidebar>
          <h4>Por</h4> {authName}
          <br />
        </Sidebar>
        <Autor>{blog.title}</Autor>
        <Content dangerouslySetInnerHTML={{ __html: `${blog.content}` }} />
        <Footer>
          <SocialMediaWrap>
            <SocialIcons>
              <b>{blog.author}</b>
              <SocialIconLink
                href={blog.lnk_face}
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href={blog.lnk_insta}
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </Footer>
      </Container>
    </>
  );
}
export default SingleBlog;
