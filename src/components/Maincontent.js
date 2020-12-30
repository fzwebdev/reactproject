import React, { Component } from 'react';
import Solution from "./Solution";
import Offersection from './Offersection';
import Homegallery from './Homegallery';
import Testimonial from './Testimonial';
import Newsandblog from './Newsandblog';
function Maincontent() {
  
  const posts = [
    {
      id: 1, 
      iconName:"sept.png",
      title: "Sept", 
      content: "India's first unique pre-learning diagnostic and profiling test based on the Nobel Prize winning concept of Multiple Intelligence.",
      classname: 'bg_1'
    },
    {
      id: 2, 
      iconName:"icon1.png",
      title: 'Learn [K-8]', 
      content: "Let the student enter into the world of Self-Learning through the Students' dashboard of Swa-Adhyayan.",
      classname: 'bg_2'
    },
    {
      id: 3, 
      iconName:"icon3.png",
      title: 'Assessment [K-8]', 
      content: "We provide complete assessment solution to the child at any point of time irrespective of the academic calender.",
      classname: 'bg_3'
    },
    {
      id: 4, 
      iconName:"icon4.png",
      title: 'Sharing', 
      content: "Audio|Video, Images, Teacher's teaching videos, scanned question paper etc can be shared with groups, the class or student. ",
      classname: 'bg_4'
    }
  ];
  const offers = [
    {
      id: 1, 
      iconName:"septstatus.png",
      title: "Sept status", 
      content: "Sept status",
      classname: 'bg_offer_1'
    },
    {
      id: 2, 
      iconName:"student.png",
      title: 'Student List', 
      content: "Student List",
      classname: 'bg_offer_2'
    },
    {
      id: 3, 
      iconName:"attendance.png",
      title: 'Attendance', 
      content: "Attendance",
      classname: 'bg_offer_3'
    },
    {
      id: 4, 
      iconName:"timetable.png",
      title: 'Timetable', 
      content: "Timetable",
      classname: 'bg_offer_4'
    },
    {
      id: 5, 
      iconName:"swalearning.png",
      title: 'Swa-Learning', 
      content: "Swa-Learning",
      classname: 'bg_offer_5'
    },
    {
      id: 6, 
      iconName:"assessment.png",
      title: 'Swa-Assessment', 
      content: "Swa-Assessment",
      classname: 'bg_offer_6'
    },
    {
      id: 7, 
      iconName:"marksentry.png",
      title: 'Marks Entry', 
      content: "Marks Entry",
      classname: 'bg_offer_1'
    },
    {
      id: 8, 
      iconName:"report.png",
      title: 'Report', 
      content: "Report",
      classname: 'bg_offer_2'
    },
    {
      id: 9, 
      iconName:"swasharing.png",
      title: 'Swa-Sharing', 
      content: "Swa-Sharing",
      classname: 'bg_offer_4'
    }
  ];
  const gallery = [
    {
      id: 1, 
      iconName:"gallery-01.jpg",
      alt: "", 
    },
    {
      id: 2, 
      iconName:"gallery-02.JPG",
      alt: "",
    },
    {
      id: 3, 
      iconName:"gallery-03.JPG",
      alt: "",
    },
    {
      id: 4, 
      iconName:"gallery-04.JPG",
      alt: "",
    },
    {
      id: 5, 
      iconName:"gallery-05.JPG",
      alt: "", 
    },
    {
      id: 6, 
      iconName:"gallery-06.JPG",
      alt: "",
    },
    {
      id: 7, 
      iconName:"gallery-07.JPG",
      alt: "",
    },
    {
      id: 8, 
      iconName:"gallery-08.JPG",
      alt: "",
    },
    {
      id: 9, 
      iconName:"gallery-09.JPG",
      alt: "",
    }
  ];
  const testimonial = [
    {
      id: 1, 
      icon:"rekha.png",
      name: "Rekha Sharma", 
      'title':'Principal',
      'desc':"From a Principal's point of view, this comprehensive LMS package is an indispensable tool for all students and their educators. The laid-out pattern of    reportage for Principals/HODs as also for parents,teachers and.."
    },
    {
      id: 2, 
      icon:"manjulika.png",
      name: "Manjulika Ghosh", 
      'title':'HOD (Hindi)',
      'desc':"स्वाध्ययन में 2000 से भी ज्यादा प्रश्नों ने मुझे बहुत आकर्षित किया। अंको के अनुसार प्रश्न संरचना करना, प्रसंग के अनुसार भाषा को एक नया मोड़ देना, ऐसे अनगणित प्रश्नों को सुनने से वाचन और लेखन की श्रमता स्वतः बढ़ जाएगी हिंदी बोलने और लिखने की झिझक भी मिट जाएगी।"
    },
    {
      id: 3, 
      icon:"urmil.png",
      name: "Urmila Gagroo", 
      'title':'PGT (English)',
      'desc':"The Swa-adhyayan Entrant's Profiling Test (  SEPT )  is   an    outstanding unique assessmenttool which is    testing  a   child  at    five different levels. This five-into-one moduleencompasses every aspect of    a .."
    },
    {
      id: 4, 
      icon:"subhra.png",
      name: "Subhra Mazumdar", 
      'title':'Grandmother',
      'desc':"The ‘Sharing Concept’ feature, a   collaborative platform among parents, schoolauthorities, teachers and learners, is   a   facility that makes learners feel they are the fulcrum of   their educational progress. Parents too,.."
    },
    {
      id: 5, 
      icon:"neha.png",
      name: "Neha", 
      'title':'Parent',
      'desc':"I   feel that the ‘Gamification’ segment is   going to    be    the favourite of    all    children.  It’s fun and the knowledge content is   going to    keep the child happily engaged and enthused!"
    },
    {
      id: 6, 
      icon:"swati.png",
      name: "Swati", 
      'title':'Parent',
      'desc':"For me,  the auto-generating test papers is   a   boon! I  am highly impressed to imagine  that  these  can  be  assessed  by  the  teacher  and  also  by  the  learner. It assures all parents of the utility of the whole exercise."
    },
    
  ];
  
  return (
    <div className="gt_main_content_wrap">
      {/* <!--Offer Wrap start--> */}
        <Solution posts={posts}/>  
      {/* <!--offer Wrap End--> */}
        <Offersection posts={offers}/>
        <Homegallery posts={gallery}/>
        <Testimonial posts={testimonial}/>
        {/* <Newsandblog posts={testimonial}/> */}
        <div className="back-to-top">
          <a href="#home"><i className="fa fa-angle-up"></i></a>
        </div>  
    </div>
  );
}

export default Maincontent;