import React, { useState, useEffect, useCallback } from "react";
import {
    PostSection,
    PostTitle,
    PostListDiv,
    LoadingDiv,
    PagenumberDiv,
    PagingSection,
    PostHeader,
} from "./styledComponent";
import EachPost from "./Communication_EachPost.js";
import axios from "axios";
import ComHeader from "./Communication_Header";
import Nav_communication from "./Nav_communication";
import Banner_communication from "./Banner_communication";

const initialPostList = [
    { id: 1, title: "총학생회 첫 홈페이지 게시판" },
    { id: 2, title: "멋사가 총학생회 홈페이지 만들다" },
    { id: 3, title: "총학생회 x 멋쟁이사자처럼" },
];

function Communication() {
    const [postList, setPostList] = useState([]); //postList 변수 정의하고 setPostList함수로 부른다.
    const [list, setList] = useState([]);
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState([]);

    // const addPost = useCallback(() =>{
    //       setPostList((initialPostList) =>[
    //           ...initialPostList,
    //           {id:4, title:'한성학보, 시사N 대학기자상 취재'},
    //       ]);
    // },[postList]); //postList가 바뀌면 새로 바꿔주세요

    const getPostList = useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                //console.log(response);
                setList(response.data.slice(0, 10));
                console.log(list);
            });
    }, []);

    return (
        <>
            <Banner_communication/>
            <Nav_communication />

            <PostSection>
                <PostTitle>청원 게시판</PostTitle>
                <ComHeader></ComHeader>
                <PostListDiv>
                    {list === null ? (
                        <LoadingDiv>아직 기록된 글이 없습니다</LoadingDiv>
                    ) : (
                        <table className="common-table">
                            <tbody>
                                {list.map((element) => (
                                    <tr>
                                        <EachPost
                                            postID={element.id}
                                            title={element.title}
                                            body={element.body}
                                        />
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </PostListDiv>
            </PostSection>

            <PagingSection>
                <PagenumberDiv
                    onClick={() => {
                        if (page > 1) {
                            setPage(page - 1);
                        }
                    }}
                ></PagenumberDiv>
                {pages.map((pageNum) => (
                    //pageNum으로 넘김
                    <PagenumberDiv
                        key={pageNum}
                        onClick={() => setPage(pageNum)}
                    >
                        {pageNum}
                    </PagenumberDiv>
                ))}
                <PagenumberDiv
                    onClick={() => {
                        if (pages.length > page) {
                            setPage(page + 1);
                        }
                    }}
                ></PagenumberDiv>
            </PagingSection>
        </>
    );
}

export default Communication;
