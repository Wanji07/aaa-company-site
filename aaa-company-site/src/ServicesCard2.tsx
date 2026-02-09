import TiltedCard from './TiltedCard';

function ServicesCard2() {
    return(
        <>
            <div id="cardsContainer" className="mt-10 grid grid-cols-3 p-8 place-items-center">
            <TiltedCard
                imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
                altText="Kendrick Lamar - GNX Album Cover"
                captionText="Eye-catching indoor and outdoor signage solutions designed to maximize visibility and brand recognition."
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
                imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
                altText="Kendrick Lamar - GNX Album Cover"
                captionText="Reliable maintenance and replacement services to keep your signs functional, safe, and visually appealing."
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
                    Maintenance & Replacement
                    </p>
                }
                />
            <TiltedCard
                imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
                altText="Kendrick Lamar - GNX Album Cover"
                captionText="Mobile and outdoor advertising options that extend your brand’s reach to a wider audience."
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
                    Advertising Media
                    </p>
                }
                />
            </div>
        </>
    )
}

export default ServicesCard2