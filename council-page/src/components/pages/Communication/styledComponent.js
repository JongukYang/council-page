import styled from 'styled-components';

export const PostSection = styled.div`
    margin: 0px auto;
    margin-top: 20px;
    width: 90%;
    display: flex;
    flex-direction: column;
`;

export const PostTitle = styled.span`
    margin-top: 10px;
    margin-bottom: 5px;
    font-family: 'Black Han Sans', sans-serif;
    font-size: 25px;
`;

export const PostListDiv = styled.div`
    font-size: 16px;
    font-family: 'Noto Sans KR', sans-serif;
`;

export const LoadingDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 15px;
`;

export const EachPostLi = styled.li`
    margin: 14px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const PagenumberDiv = styled.div`
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #f39926;
    border-radius: 5px;
`;

export const PagingSection = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 0px auto;
    width: 150px;
    margin-top: 20px;
`;