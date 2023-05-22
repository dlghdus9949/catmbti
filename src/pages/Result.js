import React from "react";
import styled from 'styled-components';
//import cat1 from '../assets/cat1.jpeg';
import Button from "react-bootstrap/Button";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ResultData } from "../assets/data/resultdata";

const Result = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const mbti = searchParams.get('mbti');
    // 최종적으로 도출한 결과 객체
    const [resultData, setResultData] = React.useState({});

    React.useEffect(()=>{
        const result = ResultData.find((s) => s.best === mbti);
        setResultData(result);
    },[mbti])

    console.log(mbti);

    return(
        <Wrapper>
            <Header>
                예비집사 판별기
            </Header>
            <Contents>
                <Title>
                    결과 보기
                </Title>
                <LogoImage>
                    <img src={resultData.image} className="rounded-circle" width={350}/>
                </LogoImage>
                <Desc>
                    예비 집사님과 찰떡 궁합인 고양이는 {resultData.name}입니다.
                </Desc>
                <Button
                    style={{fontFamily:'GangwonEduSaeeum_OTFMediumA'}}
                    onClick={()=>navigate("/")}
                >
                    테스트 다시하기
                </Button>
            </Contents>
        </Wrapper>
    );
}

export default Result;

const Wrapper = styled.div`
    height: 100vh;
    width: 100%;
`

const Header = styled.div`
    font-size: 40pt;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'GangwonEduSaeeum_OTFMediumA';
    `

const Contents = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Title = styled.div`
    font-size: 30pt;
    margin-top: 40px;
    font-family: 'GangwonEduSaeeum_OTFMediumA';
`

const LogoImage = styled.div`
    margin-top: 10px;
`

const Desc = styled.div`
    font-size: 20pt;
    margin-top: 20px;
    font-family: 'GangwonEduSaeeum_OTFMediumA';
`