import React from 'react'

import './SlidingContent.css'

const SlidingContent = () => {
  return (
    <div className="sliding-content-container">
      <div className="sliding-section sliding-section--menu">
        <h2 className="sliding-title">What to Expect</h2>
        <p className="sliding-text">
          <strong>An Exciting Menu:</strong> A fusion of African spices and Mediterranean zest, our menu offers an eclectic range of tantalizing options, from succulent grilled meats to fresh seafood and plant-based delicacies.
        </p>
      </div>

      <div className="sliding-section sliding-section--atmosphere">
        <p className="sliding-text">
          <strong>Exhilarating Atmosphere:</strong> Whether you're enjoying a quiet dinner with family or a vibrant night out with friends, The Fortress delivers an inviting ambiance perfect for any occasion.
        </p>
      </div>

      <div className="sliding-section sliding-section--location">
        <p className="sliding-text">
          <strong>Unmatched Location:</strong> Nestled in Menlyn Maine, Pretoria's lifestyle hub, The Fortress provides the perfect vantage point for a stylish night out, offering scenic views and an upscale, yet relaxed, dining environment.
        </p>
      </div>
    </div>
  )
}

export default SlidingContent
