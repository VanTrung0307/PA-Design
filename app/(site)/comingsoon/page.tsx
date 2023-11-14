'use client'
import { useEffect, useState } from 'react'

const ComingSoonPage = () => {
  const styles = {
    gradientTextDark: {
      backgroundImage: 'linear-gradient(to top right, blue, pink, red)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
  }

  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + 1)

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      if (distance < 0) {
        clearInterval(interval)
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24))
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        )
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((distance % (1000 * 60)) / 1000)
        setCountdown({ days, hours, minutes, seconds })
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <title>{`Coming Soon - PA Design`}</title>
      <section className="flex flex-col items-center justify-center h-full w-full flex-1 mt-[200px] mb-[360px]">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-extrabold text-center lg:text-7xl 2xl:text-8xl">
            <span style={styles.gradientTextDark}>Coming</span>
            <span style={styles.gradientTextDark}>Soon</span>
          </h1>

          <div className="flex justify-center items-center mt-8 mb-8">
            <div className="flex flex-col items-center mx-10">
              <span className="text-4xl font-bold text-black dark:text-white">
                {countdown.days}
              </span>
              <span className="text-sm opacity-70 mt-1 text-black dark:text-white">
                Days
              </span>
            </div>
            <div className="flex flex-col items-center mx-10">
              <span className="text-4xl font-bold text-black dark:text-white">
                {countdown.hours}
              </span>
              <span className="text-sm opacity-70 mt-1 text-black dark:text-white">
                Hours
              </span>
            </div>
            <div className="flex flex-col items-center mx-10">
              <span className="text-4xl font-bold text-black dark:text-white">
                {countdown.minutes}
              </span>
              <span className="text-sm opacity-70 mt-1 text-black dark:text-white">
                Minutes
              </span>
            </div>
            <div className="flex flex-col items-center mx-10">
              <span className="text-4xl font-bold text-black dark:text-white">
                {countdown.seconds}
              </span>
              <span className="text-sm opacity-70 mt-1 text-black dark:text-white">
                Seconds
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ComingSoonPage
