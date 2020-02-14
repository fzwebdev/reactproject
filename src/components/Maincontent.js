import React, { Component } from 'react';
import Solution from "./Solution";
function Maincontent() {
  const posts = [
    {
      id: 1, 
      title: "Sept Swa-Adhyayan Entrants' Profiling Test", 
      content: "India's first unique pre-learning diagnostic and profiling test based on the Nobel Prize winning concept of Multiple Intelligence.",
      classname: 'bg_1'
    },
    {
      id: 2, 
      title: 'Learn [K-8]', 
      content: "Let the student enter into the world of Self-Learning through the Students' dashboard of Swa-Adhyayan.",
      classname: 'bg_2'
    },
    {
      id: 3, 
      title: 'Assessment [K-8]', 
      content: "We provide complete assessment solution to the child at any point of time irrespective of the academic calender.",
      classname: 'bg_3'
    },
    {
      id: 4, 
      title: 'Sharing', 
      content: "Audio|Video, Images, etc can be shared with groups, teacher's teaching videos can be shared, scanned question paper can be shared with the class or student. ",
      classname: 'bg_4'
    }
  ];
  return (
    <div class="gt_main_content_wrap">
        {/* <!--Offer Wrap start--> */}
          <Solution posts={posts}/>  
        {/* <!--offer Wrap End--> */}
      </div>
  );
}
export default Maincontent;