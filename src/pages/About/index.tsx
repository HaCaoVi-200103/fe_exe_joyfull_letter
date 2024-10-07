import { Col, Container, Image, Row } from "react-bootstrap";
import Layout from "../../components/Layout";
import style from "./style.module.css";
import logo from "../../assets/logo.png";
const About = () => {
  return (
    <Layout>
      <Container fluid className="mt-5 mb-5">
        <Row className="justify-content-center gap-3">
          <Col md={2} className={style.boxImage}>
            <Image
              className={style.imageAbout}
              fluid
              src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-1/456697066_1027605138776342_1264069929140463207_n.jpg?stp=dst-jpg_s100x100&_nc_cat=100&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=P_8fJBfEBjMQ7kNvgFty1bV&_nc_ht=scontent.fsgn5-5.fna&oh=00_AYCL5KNoRrUwIshclnfSkCzhxiww8NTTPRnUOwIPBOB_HA&oe=66FF9157"
            />
            <div className={style.des}>CMO: My Dieu</div>
          </Col>
          <Col md={2} className={style.boxImage}>
            <Image
              className={style.imageAbout}
              fluid
              src="https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-1/458086237_1895856840911575_6473358199248399052_n.jpg?stp=dst-jpg_s200x200&_nc_cat=105&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=GQ18dzAQ9RwQ7kNvgFEdrhe&_nc_ht=scontent.fsgn5-9.fna&_nc_gid=AW5-5fQr6gZUYMW52ZD7Xri&oh=00_AYDQc9hS5lpB2M57esq_GV_DQ8B9JdZIpCGZQ6SYSsV22w&oe=66FF61B9"
            />
            <div className={style.des}>CTO: Cao Vi</div>
          </Col>
          <Col md={2} className={style.boxImage}>
            <Image
              className={style.imageAbout}
              fluid
              src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-1/366700512_1530289277506357_2223778206450807249_n.jpg?stp=cp6_dst-jpg_s200x200&_nc_cat=100&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=LtnKBQPzTXcQ7kNvgF4qaJb&_nc_ht=scontent.fsgn5-5.fna&_nc_gid=AF1797iq99ZVbZKGV8hs8Rb&oh=00_AYCZwrcVbAnjfQWJqaqlKtwcq_-9fi4xMuOtuzCiNtnLhg&oe=66FF929C"
            />
            <div className={style.des}>CEO: Quoc Hao</div>
          </Col>
          <Col md={2} className={style.boxImage}>
            <Image
              className={style.imageAbout}
              fluid
              src="https://scontent.fsgn5-15.fna.fbcdn.net/v/t39.30808-1/457399142_506344935425055_3057663492881626930_n.jpg?stp=dst-jpg_s200x200&_nc_cat=111&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=uzTT3wYLfAkQ7kNvgHtyyip&_nc_ht=scontent.fsgn5-15.fna&oh=00_AYA8iNOHmkxz-t99kd7R_NtcMe0Jnv5xkP-uq06xbrMCfw&oe=66FF82DC"
            />
            <div className={style.des}>CFO: Uyen Quan</div>
          </Col>
          <Col md={2} className={style.boxImage}>
            <Image
              className={style.imageAbout}
              fluid
              src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-1/461255114_1601833653764325_6132804684273182755_n.jpg?stp=dst-jpg_s200x200&_nc_cat=110&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=jL-5DNoJTacQ7kNvgHggcKj&_nc_ht=scontent.fsgn5-10.fna&_nc_gid=AtvRzCLQsvogBgZvy2feaYn&oh=00_AYDxQgOj2wpIN_VDAmHZqT_RGHJc13P-xh8-_1pTO8NaWw&oe=66FF98D5"
            />
            <div className={style.des}>CPO: Huynh Huong</div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={7} className={style.boxP}>
            <p className={style.paragraphAbout}>
              <strong>CMO: My Dieu</strong> - Responsible for managing and
              coordinating marketing activities, brand development, and product
              promotion.
            </p>
            <p className={style.paragraphAbout}>
              <strong>CTO: Cao Vi</strong> - Oversees technology and technical
              aspects, ensuring the company's systems and technological
              solutions operate efficiently.
            </p>
            <p className={style.paragraphAbout}>
              <strong>CEO: Quoc Hao</strong> - The company's top leader,
              directing overall strategic and business development activities.
            </p>
            <p className={style.paragraphAbout}>
              <strong>CFO: Uyen Quan</strong> - Manages financial operations,
              budgeting, and ensures the company's financial stability.
            </p>
            <p className={style.paragraphAbout}>
              <strong>CPO: Huynh Huong</strong> - In charge of product
              management, ensuring products meet market and customer needs.
            </p>
          </Col>
          <Col
            md={5}
            className="d-flex align-items-center justify-content-center"
          >
            <Image src={logo} fluid />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default About;
