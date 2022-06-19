import SimpleImageSlider from "react-simple-image-slider";
import img1 from "../../images/img-1.webp";
import img2 from "../../images/img-2.webp";
import img3 from "../../images/img-5.webp";
import img4 from "../../images/img-4.webp";
// import img5 from "../../images/img-1.webp";

const images = [
    { url: img1 },
    { url: img2 },
    { url: img3 },
    { url: img4 },
    // { url: img5 },
];

export const ImageSlider = () => {
    return (
        <div>
            <SimpleImageSlider
                width={"100%"}
                height={"75vh"}
                images={images}
                showBullets={false}
                showNavs={true}
                style={{ cursor: "pointer" }}
                navSize={60}
                navMargin={20}
            />
        </div>
    );
};
