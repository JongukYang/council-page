import React, { useEffect, useState } from "react";
import axios from "axios";

/*
function GetCategory() {
    const [category, setCategory] = useState({});

    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/toyseven/voc/category")
            .then((response) => {
                setCategory(response.data);
            });
    }, []);

    const categories = Object.values(category).map((item) => (
        <option key={item.id} value={item.id}>
            {item.displayName}
        </option>
    ));

    return categories;
}
*/
const HandleQuestionSubmit = async ({ item }) => {
    const response = await axios
        .post("https://jsonplaceholder.typicode.com/posts", item, {
            headers: {
                "Content-type": "application/json",
                Accept: "application/json",
            },
        })
        .then((response) => {
            console.log("status : " + response.status);
        })
        .catch((error) => {
            console.log("error : " + error);
        });
};

function ComQuestion() {
    //const categories = GetCategory();

    //const [categoryId, setCategoryId] = useState(1);
    const [title, setTitle] = useState("");
    //const [email, setEmail] = useState("");
    const [body, setbody] = useState("");
    const [stationId, setStationId] = useState("ST-4");

    const item = {
        //categoryId: categoryId,
        title: title,
        body: body,
        //email: email,
        //stationId: stationId,
    };

    return (
        <>
            <h2 align="center">게시글 작성</h2>
            <div className="voc-view-wrapper">
                <div className="voc-view-row">
                    <label>제목</label>
                    <input
                        onChange={(event) => setTitle(event.target.value)}
                    ></input>
                </div>
                <div className="voc-view-row">
                    <label>내용</label>
                    <textarea
                        onChange={(event) => setbody(event.target.value)}
                    ></textarea>
                </div>
                <button
                    className="voc-view-go-list-btn"
                    onClick={() => HandleQuestionSubmit({ item })}
                >
                    등록
                </button>
            </div>
        </>
    );
}

export default ComQuestion;
