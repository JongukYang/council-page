import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import { PagenumberDiv, PagingSection } from "./styledComponent";
import Nav_Notice from "./Nav_Notice";
import NotHeader from "./Notice_Header";
import "./Notice.css";
import Banner_notice from "./Banner_notice";

function MainNotice() {
    const [hrefState, setHrefState] = useState("chongdae");
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
            <Banner_notice />
            <Nav_Notice setHrefState={setHrefState} />
            {/* <Body_office hrefState={hrefState} /> */}
            <div className="notice-title">주요 공지사항</div>
            <Table className="notice-table">
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                        <th>조회수</th>
                    </tr>
                </thead>
                <tbody className="notice-tbody">
                    {list.map((element) => (
                        <tr>
                            <td>{element.id}</td>
                            <td>{element.title}</td>
                            <td>{element.userId}</td>
                            <td>작성일</td>
                            <td>조회수</td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <PagingSection className="paging">
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
            <NotHeader />
        </div>
    );
}

export default MainNotice;
