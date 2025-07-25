// src/pages/Home.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  return (
    <>
      {/* Banner principal */}

      <div className="banner-badge bg_image">
        <div className="inner">
        <img style={{marginLeft:'10px',width:'300px'}} src="/assets/images/mineco/02_LOGOS/IA_MINECO-03.png" alt="logo-image" />
          <p className="dsic my-4">
          Bienvenido a la Plataforma IA-Mineco, una herramienta diseñada para potenciar la transformación digital en la planificación pública mediante asistentes virtuales de inteligencia artificial (IA).
          {/* <br/>
          <br/>⚠️ Nota Importante:
          La IA es una herramienta de apoyo y requiere supervisión humana. Los resultados deben ser revisados antes de su uso oficial. */}
          </p>
          <br/>
          <br/>
          {/* <a href="#" className="rts-btn btn-blur">Partcipa</a> */}
        </div>
      </div>

      {/* Sección de búsqueda / generador */}
      <div className="search__generator mt--20">
        {/* <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              <img src="assets/images/icons/10.png" alt="icons" />
              Image
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              <img src="assets/images/icons/11.png" alt="icons" />
              Content
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-contact-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-contact"
              type="button"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              <img src="assets/images/icons/12.png" alt="icons" />
              Voice
            </button>
          </li>
        </ul> */}

        {/* Área de "search option" */}
        {/* <div className="searchoptopn-area">
          <input type="text" placeholder="Describe what you would like to see..." />
          <button>
            Generate <img src="assets/images/icons/13.png" alt="" />
          </button>
        </div> */}

        {/* Contenido de los tabs */}
        <div className="tab-content mt--20" id="pills-tabContent">
          {/* Tab 1: Image */}
          <div
            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <div className="row g-5 my-4 justify-content-center">
              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="single-image-generator">
                  <a href="#" className="thumbnail">
                    <img src="/assets/images/mineco/01_IMAGENES/IA_MINECO-07.png" alt="images" />
                  </a>
                  <div className="inner-content">
                    <div className="left-content-area">
                      <h5 className="title">Asistente de Redacción de Documentos</h5>
                      {/* <p className="disc">
                      Genera borradores de cartas, oficios y documentos oficiales.
                      </p> */}
                    </div>
                    <Link to="/prototipo1" className="rts-btn btn-primary">
                      <span>Explora</span>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="single-image-generator">
                  <a href="#" className="thumbnail">
                    <img src="/assets/images/mineco/01_IMAGENES/IA_MINECO-08.png" alt="images" />
                  </a>
                  <div className="inner-content">
                    <div className="left-content-area">
                      <h5 className="title">Asistente Virtual de IA para Análisis de Expedientes / Inversión para el Desarrollo</h5>
                      {/* <p className="disc">
                      Este asistente analiza expedientes de proyectos de inversión pública, facilitando su evaluación y optimización para un mejor uso de los recursos.
                      </p> */}
                    </div>
                    <Link to="/prototipo2" className="rts-btn btn-primary">
                      <span>Explora</span>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="single-image-generator">
                  <a href="#" className="thumbnail">
                    <img src="/assets/images/mineco/01_IMAGENES/IA_MINECO-09.png" alt="images" />
                  </a>
                  <div className="inner-content">
                    <div className="left-content-area">
                      <h5 className="title">Asistente Virtual de IA para Análisis de Políticas Públicas / Planificación para el Desarrollo</h5>
                      {/* <p className="disc">
                      Este asistente facilita el análisis de políticas públicas, identificando fortalezas, áreas de mejora y comparaciones con modelos internacionales.
                      </p> */}
                    </div>
                    <Link to="/prototipo3" className="rts-btn btn-primary">
                      <span>Explora</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Fin Tab 1 */}

          {/* Tab 2: Content */}
          <div
            className="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <div className="row g-5">
              <div className="col-lg-12">
                <div className="question_answer__wrapper__chatbot">
                  {/* Ejemplo de single pregunta-respuesta */}
                  <div className="single__question__answer">
                    <div className="question_user">
                      <div className="left_user_info">
                        <img src="assets/images/avatar/03.png" alt="avatar" />
                        <div className="question__user">what is openup?</div>
                      </div>
                      <div className="edit__icon">
                        <i className="fa-regular fa-pen-to-square"></i>
                      </div>
                    </div>
                    <div className="answer__area">
                      <div className="thumbnail">
                        <img src="assets/images/avatar/04.png" alt="avatar" />
                      </div>
                      <div className="answer_main__wrapper">
                        <h4 className="common__title">Openup</h4>
                        <p className="disc">
                          The Open Unified Process, is a simplified version of the Rational Unified
                          Process (RUP) used for agile and iterative software development. ...
                        </p>
                      </div>
                    </div>
                    <div className="share-reaction-area">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa-regular fa-bookmark"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa-light fa-thumbs-up"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa-regular fa-thumbs-down"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* ... repite más "single__question__answer" según tu HTML ... */}
                  {/* Por brevedad, omito la repetición de ejemplos idénticos */}
                </div>
              </div>
            </div>
          </div>
          {/* Fin Tab 2 */}

          {/* Tab 3: Voice */}
          <div
            className="tab-pane fade"
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
          >
            <div className="row g-5">
              <div className="col-lg-12">
                <div className="audio-main-generator-start">
                  <form action="#">
                    <div className="ask-for-audio">
                      <textarea placeholder="Here write text" required></textarea>
                      <i className="fa-light fa-pen-to-square"></i>
                      <div className="button-wrapper-generator">
                        <button className="rts-btn btn-primary">
                          Generate
                          <img src="assets/images/icons/06.svg" alt="icons" />
                        </button>
                        <button className="mp3 rts-btn btn-border">
                          MP3
                          <i className="fa-sharp fa-light fa-chevron-down"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>

                <div className="audio-main-wrapper-top-bottom mb--60">
                  <div className="audio-main-wrapper">
                    <div className="audio-player">
                      <div className="timeline">
                        <div className="progress" style={{ width: "0%" }}></div>
                      </div>
                      <div className="controls">
                        <div className="play-container">
                          <div className="toggle-play play"></div>
                        </div>
                        <div className="time">
                          <div className="current">0:00</div>
                          <div className="length">1:44</div>
                        </div>
                        <div className="volume-container">
                          <div className="volume-button">
                            <div className="volume icono-volumeMedium"></div>
                          </div>
                          <div className="volume-slider">
                            <div className="volume-percentage"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="rts-btn btn-primary mt--30">
                    Downloaded
                    <i className="fa-light fa-download"></i>
                  </button>
                </div>

                {/* ... repite más "audio-main-generator-start" y "audio-main-wrapper-top-bottom" ... */}
                {/* Omitido para no repetir, pero la misma conversión: class -> className */}
              </div>
            </div>
          </div>
          {/* Fin Tab 3 */}
        </div>
      </div>
      <div className="copyright-area-bottom">
				<p> Un proyecto con la asistencia técnica de la <a href="https://redciudadana.org/">Asociación Civil Red Ciudadana</a> - 2025</p>
			</div>
    </>
  );
}

export default Home;
