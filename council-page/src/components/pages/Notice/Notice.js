import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import EachPost from "./Notice_EachPost";
import { PagenumberDiv, PagingSection } from "./styledComponenet";
import Nav_Notice from "./Nav_Notice";

function MainNotice() {
  const [hrefState, setHrefState] = useState('chongdae');
    const [list, setList] = useState([]);
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState([]);

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
        <div className="container">
          <Nav_Notice setHrefState={setHrefState}/>
    {/* <Body_office hrefState={hrefState} /> */}
        <div className="notice-title">주요 공지사항</div>
            <Table className="common-table">
                <thead>
                    <tr>
                        <td>번호</td>
                        <td>제목</td>
                        <td>작성자</td>
                        <td>작성일</td>
                        <td>조회수</td>
                    </tr>
                </thead>
                <tbody>
                    {list.map((element) => (
                        <tr>
                            <EachPost
                                postID={element.id}
                                title={element.title}
                                userId={element.userId}
                            />
                        </tr>
                    ))}
                </tbody>
            </Table>

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
        </div>
    );
}

export default MainNotice;
