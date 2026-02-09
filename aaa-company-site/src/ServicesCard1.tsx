import TiltedCard from './TiltedCard';

function ServicesCard1() {
    return(
        <>
            <div id="cardsContainer" className="mt-10 grid grid-cols-3 p-8 place-items-center">
            <TiltedCard
                imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
                altText="Kendrick Lamar - GNX Album Cover"
                captionText="We design and fabricate durable structures built to support high-impact outdoor and indoor advertising."
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
                imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
                altText="Kendrick Lamar - GNX Album Cover"
                captionText="High-quality large-format printing and production services that bring your visuals to life with clarity and precision."
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
                imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
                altText="Kendrick Lamar - GNX Album Cover"
                captionText="Creative layout and design solutions tailored to present your brand clearly, effectively, and professionally."
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