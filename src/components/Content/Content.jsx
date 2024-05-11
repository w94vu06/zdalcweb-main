import React, { useState, useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './Content.css';


function extractYouTubeId(url) {
    if (!url || !url.includes('v=')) {
        return null;
    }
    var video_id = url.split('v=')[1];
    var ampersandPosition = video_id.indexOf('&');
    if (ampersandPosition != -1) {
        video_id = video_id.substring(0, ampersandPosition);
    }
    return video_id;
}

const Content = ({ id }) => {
    const [post, setPost] = useState(null);

    useEffect(() => {
        console.log(id);
        fetch(`http://localhost:3000/posts/${id}`)
            .then(response => response.json())
            .then(data => setPost(data))
            .catch(error => console.error('Error:', error));
    }, [id]);

    return (
        <div className=''>
            <div className='imageContainerContent'>
                <div className="text">
                    <h1>最新活動</h1>
                </div>
            </div>
            <Container className="my-4">
                <Row className="justify-content-md-center">
                    <Col md={10} sm={12}>
                        <div className="content-box shadow p-3 mb-5 bg-white rounded">
                            <div className="text-box">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <div className='text-secondary'>您現在的位置：</div>
                                        <li className="breadcrumb-item"><a href="/">首頁</a></li>
                                        <li className="breadcrumb-item"><a href="/">最新活動</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">{post && post.title}</li>
                                    </ol>
                                </nav>
                                <h1 className='contentTitle'>{post && post.title}</h1>
                            </div>
                            {/* YouTube */}
                            {post && extractYouTubeId(post.youtubeLink) && (
                                <div className='youtube'>
                                    <div className="embed-responsive embed-responsive-16by9">
                                        <iframe className="yt" src={`https://www.youtube-nocookie.com/embed/${extractYouTubeId(post.youtubeLink)}`} allowFullScreen></iframe>
                                    </div>
                                </div>
                            )}
                            {/* 摘要 */}
                            <div className='summary' style={{ paddingLeft: '20px', paddingRight: '50px' }}>
                                <h3>摘要</h3>
                                <p>{post && post.summary}</p>
                            </div>
                            {/* 逐列重點 */}
                            <div style={{ paddingLeft: '20px', paddingRight: '20px' }}>
                                <h3>逐列重點</h3>
                                {post && post.keypoints.split('。').map((sentence, index) => (
                                    <p key={index}>{sentence}.</p>
                                ))}
                                <img src="/" className="img-fluid" alt="" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Content;