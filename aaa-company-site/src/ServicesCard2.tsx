import TiltedCard from './TiltedCard';
import SignagesImage from './assets/Signages.jpg';
import ConstructionImage from './assets/Construction.jpg';
import LEDImage from './assets/LED.jpg';

function ServicesCard2() {
    return(
        <>
            <div id="cardsContainer" className="gap-8 mt-10 grid grid-cols-3 p-8 place-items-center">
            <TiltedCard
                imageSrc={SignagesImage}
                altText=" Signages"
                captionText="Signages"
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
                    Signages
                    </p>
                }
                />
            <TiltedCard
                imageSrc={ConstructionImage}
                altText="Construction"
                captionText="Construction"
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
                    Construction
                    </p>
                }
                />
            <TiltedCard
                imageSrc={LEDImage}
                altText="LED"
                captionText="LED Advertising Media"
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
                    LED Advertising Media
                    </p>
                }
                />
            </div>
        </>
    )
}

export default ServicesCard2