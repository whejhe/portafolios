/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Navbar from "../components/layout/Navbar.js";
import ListStaticProject from '../components/common/ListStaticProject.jsx';
import { techIcons, techUrls } from '../utils/importTechIcons.js';
import { useTranslation } from "react-i18next";
import 'swiper/css';
function App() {
    const { t } = useTranslation();

    return (
        <div>
            <Navbar />

            {/* HOME */}
            <div id="home-container" className="home-container section">
                <header className="flex flex-col">
                    <div className="text-container">
                        <h1 className="title">Carlos Fernández González</h1>
                        <p className="parrafo">{t("titulo-inicio")}</p>
                    </div>
                    <div className="tech-container">
                        <h2>&lt;Tech./&gt;</h2>
                        <ul className="list-tech">
                            {Object.keys(techIcons).map((icon, index) => (
                                <li key={index}>
                                    <a href={techUrls[icon]} target="_blank" rel="noopener noreferrer">
                                        <img className="icons-tech" src={techIcons[icon]} alt={icon.replace(/\.[^/.]+$/, "")} />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </header>
            </div>

            {/* ABOUT */}
            <div id="about-container" className='about-container section'>
                <main className="min-h-screen flex flex-col items-center justify-center p-4">
                    <div className='container-main'>
                        <h2 className="text-3xl font-bold mb-4">{t("sobre-mi")}</h2>
                        <p className="text-lg mb-4">{t("sobre-mi-parrafo")}</p>
                        <h3 className="text-2xl font-bold mb-4">{t("title")}</h3>
                        <ul className="ml-8 list-title">
                            <li className='item-formacion'>{t("grado-sup")}</li>
                            <li className='item-formacion'>{t("grado-medio")}</li>
                            <li className='item-formacion'>{t("fpe-web")}</li>
                            <li className='item-formacion'>{t("fpe-solar")}</li>
                        </ul>
                    </div>
                </main>
            </div>

            {/* SKILLS */}
            <div id="skills-container" className='skills-container section'>
                <main className="min-h-screen flex flex-col items-center justify-center p-4">
                    <h2 className="text-3xl font-bold mb-4">Habilidades Técnicas</h2>
                    <ul className="list-skills ml-8">
                        <li className='item-skills'>Lenguajes de programación: HTML, CSS, Java, JavaScript, TypeScript</li>
                        <li className='item-skills'>Herramientas de desarrollo web: Eclipse, Apache NetBean, Visual Studio Code</li>
                        <li className='item-skills'>Gestión de bases de datos: MySQL, Microsoft SQL Server, MongoDB</li>
                        <li className='item-skills'>Frameworks: Angular, Vue.js, React, Express.js</li>
                        <li className='item-skills'>Sistemas operativos: Windows, Linux</li>
                        <li className='item-skills'>Otras aplicaciones: Photoshop, docker, git, github</li>
                    </ul>
                </main>
            </div>

            {/* PROJECTS */}
            <div id="projects-container" className="projects-container section">
                <h3 className="title">{t("paginas-estaticas")}</h3>
                <ListStaticProject></ListStaticProject>
            </div>

            {/* CONTACT */}
            <div id="contact-container" className="contact-container section">
                <main className="min-h-screen flex flex-col items-center justify-center p-4">
                    <h2 className="mb-6 title-contact">Contact Me</h2>
                    <form>
                        <div className="row mb-4 container-item">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                type="text"
                                placeholder="Your Name"
                            />
                        </div>
                        <div className="row mb-4 container-item">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Your Email"
                            />
                        </div>
                        <div className="row mb-6 container-item">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                Message
                            </label>
                            <textarea
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="message"
                                rows="5"
                                placeholder="Your Message"
                            ></textarea>
                        </div>
                        <div className="row flex items-center justify-between container-item">
                            <button
                                className="button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button"
                            >
                                Send
                            </button>
                        </div>
                    </form>
                </main>
            </div>


        </div>
    );
}

export default App;
