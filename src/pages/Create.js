import React, { useState } from "react";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../firebase-config";
import { useNavigate } from "react-router-dom";

function Create() {
    const [title, setTitle] = useState(""); 
    const [articleText, setArticleText] = useState(""); 

    const articlesCollectionRef = collection(db, "articles")
    let navigate = useNavigate();
    const createArticle = async () => {
        await addDoc(articlesCollectionRef, {
            title, 
            articleText,
            created: Timestamp.now()
        });
        navigate("/");
    };

    return (
        <div className="createArticle">
            <div className="createContainer">
                <h1>Create An Article</h1>
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
                <button onClick={createArticle}> Create </button>
            </div>
        </div>
    );
}

export default Create;