import React, { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { useParams } from "react-router-dom";
import { doc } from 'firebase/firestore';


function Show() {
  const [title, setTitle] = useState("");
  const [text, setArticleText] = useState("");
  const { articleId } = useParams();

    useEffect(() => {
        const single = doc(db, "articles", articleId);

    single
      .get()
      .then(function (doc) {
        if (doc.exists) {
          let { title, text } = doc.data();
          setTitle(title);
          setArticleText(text);
        }
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
  }, []);

  return (
    <div key={articleId}>
    <p>hello</p>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default Show;