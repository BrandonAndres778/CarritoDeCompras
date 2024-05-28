import "bootstrap/dist/css/bootstrap.min.css";
import Productos from "./productos";

const Inicio = () => {
  return (
    <section className="Hero">
      <div className="card text-bg-dark text-white border-0">
        <img src="/recursos/portada.jpg" className="card-img" alt="Background" height="560px" ></img>
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <h5 className="card-title display-3 fw-bolder mb-0">¡TODO LO QUE BUSCAS A MITAD DE PRECIO!</h5>
          <p className="card-text lead fs-2">
            <small>LOS MEJORES PRODUCTOS DE TODO TIPO</small>
          </p>
        </div>
      </div>
     <Productos/>
    </section>
  );
};

export default Inicio;
