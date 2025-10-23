
import { useState } from "react";
import { AllProject, DivButtons, ProjectImg, ImgProject } from './style.js';
import { BlueBarAboutUs } from '../../AboutUs/Hero/style.js'





// importar imagens diretamente (recomendado)
import img1 from '../../../assets/PROJETOS (1).jpg';
import img2 from '../../../assets/PROJETOS (2).jpg';
import img3 from '../../../assets/PROJETOS (3).jpg';
import img3_5 from '../../../assets/PROJETOS (3.5).jpg';
import img4 from '../../../assets/PROJETOS (4).jpg';
import img5 from '../../../assets/PROJETOS (5).jpg';
import img6 from '../../../assets/PROJETOS (6).jpg';
import img7 from '../../../assets/PROJETOS (7).jpg';
import img9 from '../../../assets/PROJETOS (9).jpg';
import img11 from '../../../assets/PROJETOS (11).jpg';
import img15 from '../../../assets/PROJETOS (15).jpg';
import img18 from '../../../assets/PROJETOS (18).jpg';
import img19 from '../../../assets/PROJETOS (19).jpg';
import img20 from '../../../assets/PROJETOS (20).jpg';

function Hero() {
  

  // -----------------------------
  // imagens com categoria
  // -----------------------------
  const images = [
    { src: img1, category: "rural" },
    { src: img2, category: "rural" },
    { src: img3, category: "rural" },
    { src: img3_5, category: "rural" },
    { src: img4, category: "usinas" },
    { src: img5, category: "usinas" },
    { src: img6, category: "usinas" },
    { src: img7, category: "rural" },
    { src: img9, category: "rural" },
    { src: img11, category: "usinas" },
    { src: img15, category: "residencial" },
    { src: img18, category: "usinas" },
    { src: img19, category: "usinas" },
    { src: img20, category: "usinas" },
  ];



const [zoomImgSrc, setZoomImgSrc] = useState(null);
const [filterCategory, setFilterCategory] = useState("all");

const filteredImages =
    filterCategory === "all"
        ? images
        : images.filter((img) => img.category === filterCategory);

const handleImageClick = (src) => setZoomImgSrc(src);
const handleCloseZoom = () => setZoomImgSrc(null);


    return (
        <>
            <BlueBarAboutUs>
                <h1>PROJETOS</h1>
            </BlueBarAboutUs>



            <section id="project">
                <AllProject>
                    <h2>  Confira alguns de nossos projetos </h2>
                    <DivButtons style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
                        <button onClick={() => setFilterCategory("all")}>Todos</button>
                    <button onClick={() => setFilterCategory("rural")}>Rural</button>
                    <button onClick={() => setFilterCategory("usinas")}>Usinas</button>
                    <button onClick={() => setFilterCategory("residencial")}>Residencial</button>
                    </DivButtons>
                </AllProject>


               
                <ImgProject>
                    {filteredImages.map((img, index) => (
                        <ProjectImg
                            key={index}
                            src={img.src}
                            alt={img.category}
                            className="project-img"
                            onClick={() => handleImageClick(img.src)}
                        />
                    ))}
                </ImgProject>

                
                {zoomImgSrc && (
                    <div
                        onClick={handleCloseZoom}
                        style={{
                            position: "fixed",
                            inset: 0,
                            backgroundColor: "rgba(0, 0, 0, 0.8)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            zIndex: 9999,
                            cursor: "zoom-out",
                        }}
                    >
                        <img
                            src={zoomImgSrc}
                            alt="Zoom"
                            style={{
                                maxWidth: "90%",
                                maxHeight: "90%",
                                borderRadius: "10px",
                            }}
                        />
                    </div>
                )}








            </section>
        </>
    )
}

export default Hero;