import React, { useState, useEffect, useCallback } from 'react'
import {
  PostSection,
  PostTitle,
  PostListDiv,
  LoadingDiv,
  PagenumberDiv,
  PagingSection,

}from './styledComponent';
import EachPost from './Communication_EachPost.js'
import axios from 'axios';

const initialPostList=[
    {id:1, title:'총학생회 첫 홈페이지 게시판'},
    {id:2, title:'멋사가 총학생회 홈페이지 만들다'},
    {id:3, title:'총학생회 x 멋쟁이사자처럼'},
]



function Communication() {

  const [postList,setPostList] = useState([]); //postList 변수 정의하고 setPostList함수로 부른다. 
  const[page, setPage] = useState(1);
  const [pages,setPages] = useState([]);

  // const addPost = useCallback(() =>{
  //       setPostList((initialPostList) =>[
  //           ...initialPostList, 
  //           {id:4, title:'한성학보, 시사N 대학기자상 취재'},
  //       ]);
  // },[postList]); //postList가 바뀌면 새로 바꿔주세요 

  const getPostList = useCallback(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
        const lastPage = Math.ceil(100 / 10); //10개씩 가지고오고 //count?로 바꿔야할듯
        const tempPages = [];
        for (let i = 1; i <= lastPage; i++) {
        tempPages.push(i); //배열에 push
        }
        setPages(tempPages);
        
        setPostList(response.data.results);
        //console.log(response);
        })
    });

    useEffect(getPostList, [page]); //page가 바뀔 때 마다
  return (
    <>
      <PostSection>
      <PostTitle>전체 게시판</PostTitle>

      <PostListDiv>
        {postList === null ?(
          <LoadingDiv>아직 기록된 글이 없습니다</LoadingDiv>
        ):(
          <ul>
            {postList.map((element) => (
                    <EachPost
                        key={element.id}
                        postID={element.id}
                        title={element.title}
                    />
            ))}
          </ul>
        )
        }
      </PostListDiv>
      </PostSection>

      <PagingSection>
                <PagenumberDiv onClick={() => {
                if (page > 1) {
                    setPage(page - 1)
                }
                }}>
              
                </PagenumberDiv>
                {pages.map(pageNum => (
                    //pageNum으로 넘김
                <PagenumberDiv key={pageNum} onClick={() => setPage(pageNum)}>{pageNum}</PagenumberDiv>
                ))}
                <PagenumberDiv onClick={() => {
                if (pages.length > page) {
                    setPage(page + 1)
                }
                }}>
                
                </PagenumberDiv>
            </PagingSection>

    </>
  )
}

export default Communication