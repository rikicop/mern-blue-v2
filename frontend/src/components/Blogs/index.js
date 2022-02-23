import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
/* import Icon1 from "../../images/svg-2.svg"; */
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { listBlog } from "../../actions/blogActions";
import { useNavigate } from "react-router";

import {
  CardBody,
  CardButtons,
  CardCategory,
  CardContainer,
  CardDateCreated,
  CardDescription,
  CardEdit,
  CardImg,
  CardsContainer,
  CardsHeader,
  CardTitle,
  CardWrapper,
} from "./BlogsElements";

const Cards = () => {
  const [search, setSearch] = useState("");
  console.log(search);

  const dispatch = useDispatch();
  const blogsList = useSelector((state) => state.blogsList);
  const { loading, posts, error } = blogsList;

  console.log("Estos son los posts :", posts);

  const navigate = useNavigate();

  /* Ojo con este useeffect, lo personalicé */
  useEffect(() => {
    dispatch(listBlog());
  }, [dispatch, navigate]);

  return (
    <>
      <CardsContainer>
        <br />
        <CardsHeader>Bienvenido </CardsHeader>
        <br />
        <div>
          <FaSearch color="white" />
          <input
            type="text"
            style={{ marginLeft: "30px" }}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <br />
        <CardWrapper>
          {error && <h5 style={{ color: "red" }}>{error}</h5>}
          {loading && <h5 style={{ color: "white" }}>Loading...</h5>}
          {posts
            ?.reverse()
            .filter((filteredPost) =>
              filteredPost.title.toLowerCase().includes(search.toLowerCase())
            )
            .map((post) => (
              <CardContainer key={post._id}>
                <CardBody>
                  <CardImg src={post.pic} />
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>{post.content}</CardDescription>
                </CardBody>
                <CardButtons>
                  <Link to={`/blogs/${post._id}`}>
                    <CardEdit>Ver</CardEdit>
                  </Link>
                </CardButtons>
                <CardDateCreated>
                  Created - On {post.createdAt.substring(0, 10)}
                </CardDateCreated>
                <CardCategory>{post.category}</CardCategory>
              </CardContainer>
            ))}
        </CardWrapper>
      </CardsContainer>
    </>
  );
};

export default Cards;
