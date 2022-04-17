import React, { useEffect, useState } from "react";
import {getDocs, collection, deleteDoc, updateDoc,  doc } from 'firebase/firestore';
import { db } from "../firebase-config";
import { Link } from "react-router-dom"; 

function Home() {
    const [articleLists, setArticleList] = useState([]);
    const articlesCollectionRef = collection(db, "articles")

    useEffect(() => {
        const getArticles = async () => {
        const data = await getDocs(articlesCollectionRef)
        setArticleList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };

        getArticles();
    });

    const deleteArticle = async (id) => {
        const articleDoc = doc(db, "articles", id);
        await deleteDoc(articleDoc);
    };

    const updateArticle = async (id) => {
        const articleDoc = doc(db, "articles", id);
        await updateDoc(articleDoc);
    };

    return (
        <div className="homePage">
            {articleLists.map((article) => {
                return (
                    <div className="article">
                        <div className="title">
                            <p key={article.id}>
                                <Link to={`/articles/${article.id}`} className="article_title">
                                    {article.title}
                                </Link>
                            </p>
                        </div>
                        <div className="deleteArticle">
                            <button onClick={() => {deleteArticle(article.id)}}>Delete</button>
                        </div>
                        <div className="editArticle">
                            <Link to={`/${article.id}/edit`} className="article_title">
                                Edit
                            </Link>
                        </div>
                        <div className="articleContainer">{article.articleText}</div>
                    </div>
                );
            })}
        </div>
    )
}

export default Home;