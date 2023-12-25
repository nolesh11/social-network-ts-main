import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "../../components/UI/container/Container.style";
import { useLazyGetPostIdQuery } from "../../store/API/postApi";
import { Post } from "../../components/post/Post";
import { StyledMainPage } from "../MainPage/MainPage.style";

export const PostPage = () => {
  const { postId } = useParams();
  const [fetchTriger, { data, isLoading, isError }] = useLazyGetPostIdQuery();

  useEffect(() => {
    if (postId) {
      fetchTriger(postId);
    }
  }, [postId]);

  return (
    <Container>
      <StyledMainPage>
        <main className="Main">
          {isError && <h1>Произошла ошибка</h1>}
          {isLoading && <h1>Идет загрузка...</h1>}
          {data && (
            <Post
              postText={data.message.main_text}
              userName={data.message.user_fk.name}
              regDate={data.message.reg_date}
              photos={data.message.photos}
              postId={postId as string}
            />
          )}
        </main>
      </StyledMainPage>
    </Container>
  );
};
