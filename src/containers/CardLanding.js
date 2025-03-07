import { Card } from "react-bootstrap";
import mountain from "../assets/img/fondo.png";
import CardInfo from "../components/Cards/CardInfo/CardInfo";
// import leaf from "../../assets/img/leaf.png";
function CardLanding() {
  return (
    <>
      {/* Sección con imagen de fondo */}
      <div className="position-relative" style={{ height: "90vh" }}>
        <div
          className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{
            backgroundImage: `url(${mountain})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-dark bg-opacity-75 text-white text-center pb-5 mt-5 pt-5 me-5 ms-5 rounded w-75">
            <Card.Title as={"h1"}>Your story starts with us.</Card.Title>
            <Card.Text as={"p"}>
              This is a simple example of a Landing Page you can build using
              Notus React. It features multiple CSS components based on the
              Tailwind CSS design system.
            </Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text>
          </div>
        </div>
        {/* 🏔️ Curva separadora */}
        <svg
          className="position-absolute bottom-0 start-0 w-100"
          viewBox="0 0 900 600"
          xmlns="http://www.w3.org/2000/svg"
          style={{ marginBottom: "-2px" }} // Ajuste fino para eliminar línea visible
        >
          <path
            fill="white"
            d="M0 580L18.8 576.2C37.7 572.3 75.3 564.7 112.8 560.5C150.3 556.3 187.7 555.7 225.2 558.5C262.7 561.3 300.3 567.7 337.8 572C375.3 576.3 412.7 578.7 450.2 575C487.7 571.3 525.3 561.7 562.8 557.7C600.3 553.7 637.7 555.3 675.2 561.5C712.7 567.7 750.3 578.3 787.8 577.3C825.3 576.3 862.7 563.7 881.3 557.3L900 551L900 601L881.3 601C862.7 601 825.3 601 787.8 601C750.3 601 712.7 601 675.2 601C637.7 601 600.3 601 562.8 601C525.3 601 487.7 601 450.2 601C412.7 601 375.3 601 337.8 601C300.3 601 262.7 601 225.2 601C187.7 601 150.3 601 112.8 601C75.3 601 37.7 601 18.8 601L0 601Z"
          ></path>
        </svg>
      </div>
      <section className="container position-relative" style={{ top: "-50px" }}>
        <div className="row justify-content-center align-items-end  ">
          {/* Card Izquierda */}
            <CardInfo number={'primero'} />
          {/* Card del Medio - Más Arriba */}
            <CardInfo number={'Segundo'} />
          {/* Card Derecha */}
            <CardInfo number={'Tercero'} />
        </div>
      </section>
    </>
  );
}

export default CardLanding;
