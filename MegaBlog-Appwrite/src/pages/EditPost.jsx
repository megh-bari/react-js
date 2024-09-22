import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, PostForm } from "../components";
import appwriteService from "../appwrite/config";

function EditPost() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const fetchedPost = await appwriteService.getPost(slug);
        if (fetchedPost) {
          setPost(fetchedPost);
        } else {
          navigate("/");
        }
      } catch (error) {
        console.error("Error fetching post:", error);
        navigate("/");
      }
    };

    fetchPost();
  }, [slug, navigate]);

  return post ? (
    <div className="py-8">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  ) : null;
}

export default EditPost;
