import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from "../components/Footer/Footer";
import TopBar from "../components/Topbar/Topbar";
import Content from "../components/Content/Content";

const Article = () => {
  const { id } = useParams(); // 取得URL參數id

  return (
    <div>
      <TopBar/>
      <Content id={id}/> {/* 將id傳遞給Content組件 */}
      <Footer/>
    </div>
  );
}

export default Article;