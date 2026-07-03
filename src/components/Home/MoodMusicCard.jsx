import { useMusic } from '../Music/MusicProvider'
import { MusicNoteIcon, PlayIcon, PauseIcon, SpeakerIcon, SpeakerMuteIcon } from './Icons'
import bgVideo from '../../assets/video/mood-card-bg.mp4'
import './MoodMusicCard.css'

export default function MoodMusicCard() {
  const { track, isPlaying, isMuted, progress, togglePlay, toggleMute, seekTo } = useMusic()

  const handleSeek = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const ratio = Math.min(Math.max((event.clientX - rect.left) / rect.width, 0), 1)
    seekTo(ratio)
  }

  return (
    <div className="mh-mood-card">
      <video
        className="mh-mood-card__video"
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />
      <span className="mh-mood-card__wash" aria-hidden="true" />

      <div className="mh-mood-card__content">
        <div className="mh-mood-card__header">
          <MusicNoteIcon size={14} className="mh-mood-card__icon" />
          <span className="mh-mood-card__label">CURRENT MOOD</span>
          <button
            type="button"
            className="mh-mood-card__mute"
            onClick={toggleMute}
            aria-label={isMuted ? 'Unmute music' : 'Mute music'}
            aria-pressed={isMuted}
          >
            {isMuted ? <SpeakerMuteIcon size={13} /> : <SpeakerIcon size={13} />}
          </button>
        </div>

        <div className="mh-mood-card__track">
          <span className="mh-mood-card__title">{track.title}</span>
          <span className="mh-mood-card__artist">{track.artist}</span>
        </div>

        <div className="mh-mood-card__row">
          <button
            type="button"
            className="mh-mood-card__progress"
            onClick={handleSeek}
            aria-label="Seek"
          >
            <span className="mh-mood-card__progress-fill" style={{ width: `${progress * 100}%` }} />
          </button>

          <button
            type="button"
            className="mh-mood-card__play"
            onClick={togglePlay}
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? <PauseIcon size={12} /> : <PlayIcon size={12} className="mh-mood-card__play-icon" />}
          </button>
        </div>
      </div>
    </div>
  )
}
