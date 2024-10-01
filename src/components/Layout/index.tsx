import { Container, Row } from "react-bootstrap";
import Header from "../Header";
import Footer from "../Footer";
import style from "./style.module.css";
import { useAppDispatch } from "../../hooks";
import { handleMenuBar } from "../../redux/features/Menubar";
interface Props {
  children: React.ReactNode;
}
const Layout: React.FC<Props> = ({ children }) => {
  const dispatch = useAppDispatch();
  return (
    <Container fluid className={style.containerLayout}>
      <Row className={style.header}>
        <Header />
      </Row>
      <Row onClick={() => dispatch(handleMenuBar())} className={style.main}>
        {children}
      </Row>
      <Row className={style.footer}>
        <Footer />
      </Row>
    </Container>
  );
};

export default Layout;
