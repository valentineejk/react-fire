import {
  addDoc,
  collection,
  query,
  where,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import React, {useEffect, useState} from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth, db} from "../config/firebase";
import {Post as Ipost} from "../pages/main";

interface Props {
  post: Ipost;
}

interface Like {
  userId: string;
  likeId: string;
}
export const Post = (props: Props) => {
  const [likes, setLikes] = useState<Like[] | null>(null);
  const {post} = props;
  const likesRef = collection(db, "likes");
  const [user] = useAuthState(auth);
  const likeDocs = query(likesRef, where("postId", "==", post.id));
  const getLikes = async () => {
    const data = await getDocs(likeDocs);
    setLikes(
      data.docs.map((doc) => ({userId: doc.data().userId, likeId: doc.id}))
    );
  };
  const userLiked = likes?.find((like) => like.userId === user?.uid);

  useEffect(() => {
    getLikes();
  }, []);

  const addLike = async () => {
    try {
      const newDoc = await addDoc(likesRef, {
        userId: user?.uid,
        postId: post.id,
      });
      if (user) {
        setLikes((prev) =>
          prev
            ? [...prev, {userId: user.uid, likeId: newDoc.id}]
            : [{userId: user.uid, likeId: newDoc.id}]
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const removeLike = async () => {
    try {
      const deleteQuery = query(
        likesRef,
        where("postId", "==", post.id),
        where("userId", "==", user?.uid)
      );
      const likeToDelete = await getDocs(deleteQuery);
      const likeId = likeToDelete.docs[0].id;
      const unLike = doc(db, "likes", likeId);
      await deleteDoc(unLike);

      // await addDoc(likesRef, {
      //   userId: user?.uid,
      //   postId: post.id,
      // });
      if (user) {
        setLikes(
          (prev) => prev && prev.filter((like) => like.likeId !== likeId)
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center mt-5">
      <div className="card w-96 bg-base-100 shadow-xl ">
        <div className="card-body">
          <h2 className="card-title flex justify-center">{post.title}</h2>
          <p className=" flex justify-center">{post.desc}</p>
          <div className="card-actions justify-center">
            <button className="btn">{post.username}</button>
          </div>
        </div>

        <button onClick={userLiked ? removeLike : addLike}>
          <div className="rating p-2 flex justify-end">
            {userLiked ? (
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-red-400"
              />
            ) : (
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-red-100"
              />
            )}
            {likes && <p className="ml-2">{likes?.length}</p>}
          </div>
        </button>
      </div>
    </div>
  );
};
