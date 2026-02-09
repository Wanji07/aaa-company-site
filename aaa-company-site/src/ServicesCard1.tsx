import TiltedCard from './TiltedCard';
import StructuralImage from './assets/Structural.jpg';
import PrintingImage from './assets/Printing.png';
import LayoutImage from './assets/Layout.jpg';

function ServicesCard1() {
    return(
        <>
            <div id="cardsContainer" className="gap-8 mt-10 grid grid-cols-3 p-8 place-items-center">
            <TiltedCard
                imageSrc={StructuralImage}
                altText="Structural & Fabrication"
                captionText="Structural & Fabrication"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.05}
                showMobileWarning={false}
                showTooltip
                displayOverlayContent
                overlayContent={
                    <p className=" p-4 rounded-sm bg-white tilted-card-demo-text">
                    Structural & Fabrication
                    </p>
                }
                />
            <TiltedCard
                imageSrc={PrintingImage}
                altText="Printing & Production"
                captionText="Printing & Production"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.05}
                showMobileWarning={false}
                showTooltip
                displayOverlayContent
                overlayContent={
                    <p className=" p-4 rounded-sm bg-white tilted-card-demo-text">
                    Printing & Production
                    </p>
                }
                />
            <TiltedCard
                imageSrc={LayoutImage}
                altText="Design & Layout"
                captionText="Design & Layout"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.05}
                showMobileWarning={false}
                showTooltip
                displayOverlayContent
                overlayContent={
                    <p className=" p-4 rounded-sm bg-white tilted-card-demo-text">
                    Design & Layout
                    </p>
                }
                />
            </div>
        </>
    )
}

export default ServicesCard1