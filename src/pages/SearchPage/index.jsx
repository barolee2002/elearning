import React from "react";
import { useParams } from "react-router-dom";
import { Col, Row,Button } from "antd";
import NavigationBar from "../../components/NavigationBar";
import axios from "axios";
import './style.css'
import { baseUrl } from "../../baseUrl";

const initState = {
    courseImage : 'https://daotao.ai/media/filer_public_thumbnails/filer_public/e1/ff/e1ffbc0c-071d-425b-a64c-e93a7039cfad/banner_nodejs.png__800x479_crop-smart_subsampling-2_upscale.png',
    courseSubTitle : 'abc',
    courseTitle :'nodejs',
    categoryId : 0,

}
export default function SearchPage() {
    const param = useParams()
    const [searchResult, setSearchResult] = React.useState([])
    React.useEffect (() => {
        const fetchData = async () => {
            // const reponse = await axios.get(`${baseUrl}/...`)
            // setSearchResult(reponse.data)
            setSearchResult([initState,initState,initState,initState,initState])
        }
        fetchData()
        
    }, [searchResult])
    console.log(param.searchInput);
    return (
        <div className="search-page">
            <NavigationBar />
            <Row className="page-content">
                <Col span={6} className="sidebar">

                </Col>
                <Col span={18} className="search-result">
                    {searchResult?.map((resultItem) => (
                        <div className="result-item">
                            <img className="item-image" src={resultItem.courseImage} alt="itemimage" />
                            <p className="sub-title">{resultItem.courseSubTitle}</p>
                            <h3 className="title">
                                {resultItem.courseTitle}
                            </h3>
                            <Button>View Course</Button>

                        </div>
                    ))}
                </Col>
            </Row>
        </div>
    )
}