import React from "react"
import styles from "./sound-player.module.css"

function SoundPlayerComponent() {
  function play() {
    const audio = document.getElementById("threaktive-name-sound") as HTMLAudioElement
    audio.play()
  }

  return (
    <div className={styles.wrapper}>
      <button onClick={play}>
        <svg
          fill="#000000"
          height={16}
          width={16}
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 485 485"
          xmlSpace="preserve"
        >
          <g>
            <g>
              <path
                d="M282.5,55.15c-33.5,0-66.3,8.9-95,25.8c-25.6,15.1-47.3,36.1-63.2,61.1H52.7c-29.1,0-52.7,23.6-52.7,52.7v95.5
			c0,29.1,23.6,52.7,52.7,52.7h71.6c15.9,25,37.6,46,63.2,61.1c28.7,16.9,61.5,25.8,95,25.8c7.5,0,13.5-6,13.5-13.5V68.65
			C296,61.25,290,55.15,282.5,55.15z M118.4,315.95H52.7c-14.2,0-25.7-11.5-25.7-25.7v-95.5c0-14.2,11.5-25.7,25.7-25.7h65.7V315.95
			z M269,402.35c-50.7-4.3-96.9-32.8-123.6-76.6v-166.4c26.7-43.8,72.9-72.3,123.6-76.6V402.35z"
              />
              <path
                d="M348.9,137.95c-6.1-4.3-14.5-2.8-18.8,3.4c-4.3,6.1-2.8,14.5,3.4,18.8c27,18.8,43.1,49.7,43.1,82.5s-16.1,63.7-43.1,82.5
			c-6.1,4.3-7.6,12.7-3.4,18.8c2.6,3.8,6.8,5.8,11.1,5.8c2.7,0,5.4-0.8,7.7-2.4c34.2-23.9,54.7-63,54.7-104.6
			S383.1,161.75,348.9,137.95z"
              />
              <path
                d="M401.1,82.05c-6.1-4.3-14.5-2.8-18.8,3.4c-4.3,6.1-2.8,14.5,3.4,18.8c45.3,31.6,72.3,83.3,72.3,138.3
			s-27,106.8-72.3,138.3c-6.1,4.3-7.6,12.7-3.4,18.8c2.6,3.8,6.8,5.8,11.1,5.8c2.7,0,5.4-0.8,7.7-2.4
			c52.5-36.6,83.9-96.6,83.9-160.5S453.7,118.65,401.1,82.05z"
              />
            </g>
          </g>
        </svg>
      </button>

      <audio id="threaktive-name-sound">
        <source src="/audio/threaktive.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  )
}

export default function SoundPlayer() {
  return <SoundPlayerComponent />
}
