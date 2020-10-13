import React, { Fragment } from "react";
import food from '../../img/Landing/Iconos/1-alimento-bueno.png';
import job from '../../img/Landing/Iconos/2-empleo.png';
import education from '../../img/Landing/Iconos/3-educacion.png';
import comunity from '../../img/Landing/Iconos/4-comunidad.png';
import './styles/motivationSectionF.css'

const motivationSectionF = () => {
  return (
    <Fragment>
      <div className="textMotivacionSection">
        <h1>NUESTRA MOTIVACIÓN</h1>
      </div>
      <div className="containerMotivation">
        <div className="eachMotivation">
          <img className="imgDonate2" src={food} alt="food"/>
          <div className="descriptionMotivation">
            <p>
              Gestionamos <strong>almuerzos nutritivos</strong> para quienes más
              lo necesitan{" "}
            </p>
          </div>
        </div>

        <div className="eachMotivation">
          <img className="imgDonate2" src={job} alt="job" />
          <div className="descriptionMotivation">
            <p>
              {" "}
              Fomentamos <strong>empleo</strong> en restaurantes y sectores
              productivos vulnerables
            </p>
          </div>
        </div>

        <div className="eachMotivation">
          <img className="imgDonate2" src={education} alt="education" />
          <div className="descriptionMotivation">
            <p>
              {" "}
              <strong>Educamos</strong> sobre nutrición y gastronomía a
              comunidades locales
            </p>
          </div>
        </div>

        <div className="eachMotivation">
          <img className="imgDonate2" src={comunity} alt="comunity" />
          <div className="descriptionMotivation">
            <p>
              {" "}
              Forjamos redes que apoyen el fortalecimiento de la{" "}
              <strong>comunidad</strong>
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default motivationSectionF;
