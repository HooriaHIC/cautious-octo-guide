import React, { useState } from "react";
import { db } from "../firebase-config";
import { updateDoc, collection, Timestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function Update() {
    const [title, setTitle] = useState([]); 
    const [articleText, setArticleText] = useState([]); 

    const articlesCollectionRef = collection(db, "articles")
    let navigate = useNavigate();
    const updateArticle = async () => {
        await updateDoc(articlesCollectionRef, {
            title, 
            articleText,
            updated: Timestamp.now()
        });
        navigate("/");
    };

    return (
        <div className="updateArticle">
            <div className="updateContainer">
                <h1>Edit Article</h1>
                <div className="inputGp">
                    <label>Title:</label>
                    <input 
                        placeholder="Title" 
                        onChange={(event) => {
                            setTitle(event.target.value);
                        }}
                    />
                </div>
                <div className="inputGp">
                    <label>Article:</label>
                    <textarea 
                        placeholder="Write something..." 
                        onChange={(event) => {
                            setArticleText(event.target.value);
                        }}
                    />
                </div>
                <button onClick={updateArticle}>Submit</button>
            </div>
        </div>
    );
}

export default Update;