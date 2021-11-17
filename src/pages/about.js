import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'

const AboutPage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>About — {site.siteMetadata.title}</title>
        <meta name="description" content={"About page of Brian. " + site.siteMetadata.description} />
      </Helmet>
      <Container className="section about">
          <div 
            className="banner" 
            style={{backgroundImage: `url(https://images.unsplash.com/photo-1614224353251-501960ff5c5c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1629&q=80)`}}
          />
        <Row className="header">
          <Col sm={12} md="auto">
            <Image roundedCircle src="/assets/arsstro.jpg"></Image>
          </Col>
          <Col sm={12} md="auto" className="text">
            <h2>{site.siteMetadata.home.name}</h2>
            <p>{site.siteMetadata.home.role}</p>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md={9}>
            <h5>
            <p> Привет меня зовут Арсений , я увлеченный разработчик  интересуюсь многими направлениями 
  в it : frontend , backend , computer sciences, решаяю задачи прокачиваю свои умения. Люблю много читать и экспереминтировать с кодом. 
  Писал проекты в среде Visual Studio(2017/19) , Visual Studio Code , Web Storm : C# .net , ASP .NET web разработка , так же  использовал (React-Redux,Node-Express js ,Html5 , CSS3 ,Saas) в  приложениях . Люблю читать книги , из любимых авторов: Эндрю Таненбаум и серии книг classic computer science , CLR via C# .NET , o'reilly books (javascript).
В университете : </p>
Цифровая обработка сигналов( практика )в среде Matlab ,  С / C++ (встроенные системы ).
СУБД Mycrosoft SQL server 2016 курсовые , контрольные , лабораторные работы для студентов .
  веду свой небольшой блог.,

 <p>Очень хочется получить опыт промышленной разработки .</p>
              </h5>
              <Col>
              <Card border="warning" style={{ width: 'auto' }}>
          <Col sm="auto" md="auto">
          <Image roundedCircle src="graduation.png"></Image>
          </Col>
        <Card.Body>
      <Card.Title>Образования университеты:</Card.Title>
      <Card.Text>
     <p> МИИТ - Национальная экномика 2012,</p>
      <p> РГРТУ - Радиоэлектроника 2022.</p>
      </Card.Text>
    </Card.Body>
  </Card>
  </Col>
  </Col>
        </Row>
      </Container>
    </Layout>
  )
}
export default AboutPage
export const pageQuery = graphql`
  query AboutPageQuery{
    site {
      siteMetadata {
        title
        description
        home {
          name
          role
          location
        }
      }
    }
  }
`