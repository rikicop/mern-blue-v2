import { useEffect } from "react";
/* import Icon1 from "../../images/svg-2.svg"; */
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { listPosts } from "../../actions/postsActions";

import {
  CardBody,
  CardButtons,
  CardCategory,
  CardContainer,
  CardCreate,
  CardDateCreated,
  CardDelete,
  CardDescription,
  CardEdit,
  CardImg,
  CardsContainer,
  CardsHeader,
  CardTitle,
  CardWrapper,
} from "./CardsElements";

const Cards = () => {
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.postList);
  const { loading, posts, error } = postList;

  const deleteHandler = (id) => {
    if (window.confirm("Esta Seguro??")) {
    }
  };

  console.log(posts);

  useEffect(() => {
    dispatch(listPosts());
  }, [dispatch]);

  return (
    <>
      <CardsContainer>
        <CardsHeader>Bienvenido Ricardo</CardsHeader>
        <Link to="createnpost">
          <CardCreate> Create New Post </CardCreate>
        </Link>
        <CardWrapper>
          {error && <h5 style={{ color: "red" }}>{error}</h5>}
          {loading && <h5 style={{ color: "white" }}>Loading...</h5>}
          {posts?.map((post) => (
            <CardContainer key={post._id}>
              <CardBody>
                <CardImg src={post.pic} />
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.content}</CardDescription>
              </CardBody>
              <CardButtons>
                <Link to={`/post/${post._id}`}>
                  <CardEdit>Editar</CardEdit>
                </Link>
                <CardDelete onClick={() => deleteHandler(post._id)}>
                  Borrar
                </CardDelete>
              </CardButtons>
              <CardDateCreated>Created - On</CardDateCreated>
              <CardCategory>{post.category}</CardCategory>
            </CardContainer>
          ))}
        </CardWrapper>
      </CardsContainer>
    </>
  );
};

export default Cards;
