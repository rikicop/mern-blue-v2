import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import axios from "axios";

function SingleBlog() {
  let { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log(post);

  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(`/api/blogs/${id}`);
    };
    fetching();
  }, []);

  return (
    <>
      <div>Hola</div>
    </>
  );
}
export default SingleBlog;
