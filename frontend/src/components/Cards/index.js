import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
/* import Icon1 from "../../images/svg-2.svg"; */
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deletePostAction, listPosts } from "../../actions/postsActions";
import { useNavigate } from "react-router";

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
  const [search, setSearch] = useState("");
  console.log(search);

  const dispatch = useDispatch();
  const postList = useSelector((state) => state.postList);
  const { loading, posts, error } = postList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const postCreate = useSelector((state) => state.postCreate);
  const { success: successCreate } = postCreate;

  const postUpdate = useSelector((state) => state.postUpdate);
  const { success: successUpdate } = postUpdate;

  const postDelete = useSelector((state) => state.postDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = postDelete;

  const deleteHandler = (id) => {
    if (window.confirm("Esta Seguro??")) {
      dispatch(deletePostAction(id));
    }
  };

  console.log(posts);

  const navigate = useNavigate();

  /* Ojo con este useeffect, lo personalicé */
  useEffect(() => {
    dispatch(listPosts());
    if (!userInfo) {
      navigate("/signin");
    }
  }, [
    userInfo,
    dispatch,
    navigate,
    successCreate,
    successUpdate,
    successDelete,
    search,
  ]);

  return (
    <>
      <CardsContainer>
        <br />
        <CardsHeader>Bienvenido {userInfo && userInfo.name}</CardsHeader>
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
        <Link to="/createpost">
          <CardCreate> Create New Post </CardCreate>
        </Link>
        <CardWrapper>
          {errorDelete && <h5 style={{ color: "red" }}>{errorDelete}</h5>}
          {loadingDelete && <h5 style={{ color: "white" }}>Loading...</h5>}
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
                  <Link to={`/post/${post._id}`}>
                    <CardEdit>Editar</CardEdit>
                  </Link>
                  <CardDelete onClick={() => deleteHandler(post._id)}>
                    Borrar
                  </CardDelete>
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
