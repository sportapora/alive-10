import { useMediaQuery } from "react-responsive";
import { LazyLoadImage } from "react-lazy-load-image-component";
import BSBig from "../../../../public/Assets/Images/gallery/bookshelfBig.png";
import BottleBig from "../../../../public/Assets/Images/gallery/botolBig.png";
import Images from "./Images";
import { useState } from "react";

const Introduction = ({ theme, bgimg, path }) => {
    const bgColor = theme === "dark" ? "bg-[#ed9948]" : "bg-[#eac09e]";
    const bgImg = bgimg === "shelf" ? BSBig : BottleBig;

    const [filteredPhotos, setFilteredPhotos] = useState([]);

    const handleFilterImage = (category) => {
        if (category != "" && category != "mobile") {
            filteredPhotos ? setFilteredPhotos([]) : filteredPhotos;
            const filtered = Images.filter(
                (image) => image.category === category
            );

            setFilteredPhotos(filtered);
        } else if(category == "mobile") {
            let value = document.getElementById("filterMobile").value

            filteredPhotos ? setFilteredPhotos([]) : filteredPhotos;
            const filtered = Images.filter(
                (image) => image.category === value
            );

            setFilteredPhotos(filtered);
        }
    };

    // Use media query to detect if the screen width is mobile size
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

    return (
        <div
            className={`min-h-[120vh] flex flex-col justify-center items-center p-8 ${bgColor} text-white font-sans`}
        >
            <div className="flex flex-col items-center text-center mt-20">
                <header>
                    <div className="text-3xl md:text-4xl mt-2">GALLERY</div>
                    <div className="text-base md:text-lg mt-2">
                        Harmonize Your Skin Confidence Within
                    </div>
                </header>
            </div>

            {isMobile ? (
                // Dropdown for mobile view
                <select
                    onChange={() => handleFilterImage("mobile")} id="filterMobile"
                    className="w-full max-w-xs mt-8 mb-8 px-4 py-2 text-sm md:text-lg bg-[#ed9948] text-white"
                >
                    <option disabled selected>-- PILIH KATEGORI --</option>
                    <option value="Pleno 1">Pleno 1</option>
                    <option value="Pleno 2">Pleno 2</option>
                    <option value="Pleno 3">Pleno 3</option>
                    <option value="Booth">Booth</option>
                    <option value="Workshop">Workshop</option>
                    <option value="Talkshow">Talkshow</option>
                </select>
            ) : (
                // Navigation links for larger screens
                <nav className="w-full flex flex-wrap justify-center md:justify-between items-center mt-8 mb-8 px-4 md:px-8">
                    <p
                        onClick={() => handleFilterImage("Pleno 1")}
                        className="text-white cursor-pointer no-underline text-sm md:text-lg px-2 md:px-4 py-2 flex-1 text-center"
                    >
                        Pleno 1
                    </p>
                    <p
                        onClick={() => handleFilterImage("Pleno 2")}
                        className="text-white cursor-pointer no-underline text-sm md:text-lg px-2 md:px-4 py-2 flex-1 text-center"
                    >
                        Pleno 2
                    </p>
                    <p
                        onClick={() => handleFilterImage("Pleno 3")}
                        className="text-white cursor-pointer no-underline text-sm md:text-lg px-2 md:px-4 py-2 flex-1 text-center"
                    >
                        Pleno 3
                    </p>
                    <p
                        onClick={() => handleFilterImage("Booth")}
                        className="text-white cursor-pointer no-underline text-sm md:text-lg px-2 md:px-4 py-2 flex-1 text-center"
                    >
                        Booth
                    </p>
                    <p
                        onClick={() => handleFilterImage("Workshop")}
                        className="text-white cursor-pointer no-underline text-sm md:text-lg px-2 md:px-4 py-2 flex-1 text-center"
                    >
                        Workshop
                    </p>
                    <p
                        onClick={() => handleFilterImage("Talkshow")}
                        className="text-white cursor-pointer no-underline text-sm md:text-lg px-2 md:px-4 py-2 flex-1 text-center"
                    >
                        Talkshow
                    </p>
                </nav>
            )}

            <div className="flex justify-center w-full h-auto mt-8">
                {/* Wrapper div to handle centering */}
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full justify-items-center"
                    style={{
                        backgroundColor: bgImg ? "transparent" : "black",
                        backgroundImage: bgImg ? `url(${bgImg})` : "none",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    {/* Render gallery photos */}
                    {filteredPhotos.length > 0
                        ? filteredPhotos.map((image) =>
                              image.images.map((photo, index) => (
                                  <LazyLoadImage
                                      key={index}
                                      className="w-[300px] md:w-[300px]h-auto h-[280px] md:h-[350px] object-cover  my-8 rounded-md"
                                      src={path + "/" + photo}
                                  />
                              ))
                          )
                        : Images.map((photo) =>
                              photo.images.map((image, index) => (
                                  <LazyLoadImage
                                      key={index}
                                      className="w-[300px] md:w-[300px]h-auto h-[280px] md:h-[350px] object-cover  my-8 rounded-md"
                                      src={path + "/" + image}
                                  />
                              ))
                          )}
                </div>
            </div>
        </div>
    );
};

export default Introduction;
