import React from 'react'
import styled from 'styled-components';

const Title = styled.h1`
    font-family: 'Darker Grotesque';
    color: #E9ECEF;
`
const SubTitle = styled.p`
    font-family: 'Darker Grotesque';
    color: #E9ECEF;
    font-size: 30px;
`
const Container = styled.div`
    min-height: 30rem;
`


const Bio = () => {
    
    return (
        <Container id="bio" className="p-3 p-sm-4 p-lg-9 m-5 align-items-center flex-column flex-md-row">                                 
            <Title className="display-4 text-center" >Hi! My name is Georgina Pérez</Title>
            <div>
                <SubTitle className="font-weight-normal mb-0 text-center">I am Front-End Developer and I'm passionate about science 
                and technology so in the future, I'd love to mix both paths promoting creative solutions.</SubTitle>
                <SubTitle className="font-weight-normal text-center">I am currently focused on designing, building, and maintaining 
                efficient, reusable, and reliable javascript code. I have developed web 
                applications with React, javascript, CSS3, and HTML5 technologies.</SubTitle>
            </div>
        </Container>   
    );
}
export default Bio;