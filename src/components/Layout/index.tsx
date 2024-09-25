import { Container, Row } from "react-bootstrap";
import Header from "../Header";
import Footer from "../Footer";
import style from "./style.module.css";
interface Props {
  children: React.ReactNode;
}
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Container fluid className={style.containerLayout}>
      <Row className={style.header}>
        <Header />
      </Row>
      <Row className={style.main}>{children}</Row>
      <Row className={style.footer}>
        <Footer />
      </Row>
    </Container>
  );
};

export default Layout;
