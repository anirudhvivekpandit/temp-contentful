import React from 'react'
import heroImg from './assets/hero.svg'
const Hero = () => {
  return (
<div className='mainhero'><div className='hero-center'>
        <div className = 'hero-title'>
            <h2>Contenful CMS</h2>
        </div>
        <div className='hero-body'>
            <h4>Swag semiotics etsy chicharrones you probably haven't heard of them vice health goth sriracha. Viral hell of thundercats cray swag paleo kombucha, DIY solarpunk iPhone gluten-free. Aesthetic neutra ramps letterpress readymade tousled lumbersexual schlitz yuccie bruh ugh cupping. Organic distillery prism, same pok pok blue bottle subway tile activated charcoal semiotics sus big mood kinfolk salvia taxidermy echo park. Marxism banjo ramps, pour-over iPhone lomo YOLO meditation vibecession hashtag tbh brunch raw denim letterpress you probably haven't heard of them. Sriracha intelligentsia small batch kogi green juice slow-carb big mood aesthetic gluten-free bicycle rights synth mukbang artisan seitan lumbersexual.</h4>
        </div>
        <img className='image-container' src = {heroImg} alt = 'image is missing'></img>
    </div></div>
  )
}

export default Hero;