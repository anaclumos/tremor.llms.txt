"use client"

//To get started, run "npm i cobe"
import { useEffect, useRef } from "react"
import createGlobe from "cobe"

export default function Example() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    let phi = 4.7

    const globe = createGlobe(canvasRef.current!, {
      devicePixelRatio: 2,
      width: 1200 * 2,
      height: 1200 * 2,
      phi: 0,
      theta: -0.3,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 25000,
      mapBrightness: 13,
      mapBaseBrightness: 0.05,
      baseColor: [0.3, 0.3, 0.3],
      glowColor: [0.15, 0.15, 0.15],
      markerColor: [100, 100, 100],
      markers: [
        // { location: [37.7595, -122.4367], size: 0.03 }, // San Francisco
        // { location: [40.7128, -74.006], size: 0.03 }, // New York City
        // { location: [35.6895, 139.6917], size: 0.03 }, // Tokyo
        // { location: [28.7041, 77.1025], size: 0.03 }, // Delhi
      ],
      onRender: (state: { phi?: number }) => {
        state.phi = phi
        phi += 0.0002
      },
    })

    return () => {
      globe.destroy()
    }
  }, [])

  const features = [
    {
      name: "Global Clusters",
      description: "Enable low-latency global access, enhancing performance.",
    },
    {
      name: "Serverless Triggers",
      description: "Trigger functions automatically for dynamic app behavior.",
    },
    {
      name: "Monitoring & Alerts",
      description:
        "Monitor health with key metrics or integrate third-party tools.",
    },
  ]

  return (
    <>
      <div className="sm:px-3">
        <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center justify-center overflow-hidden rounded-3xl bg-gray-950 pt-24 shadow-xl shadow-black/30">
          <div className="absolute top-[17rem] size-[40rem] rounded-full bg-blue-800 blur-3xl md:top-[20rem]" />
          <div className="z-10 inline-block rounded-lg border border-blue-400/20 bg-blue-800/20 px-3 py-1.5 leading-4 font-semibold tracking-tight uppercase sm:text-sm">
            <span className="bg-gradient-to-b from-blue-200 to-blue-400 bg-clip-text text-transparent">
              Made for the cloud
            </span>
          </div>
          <h2
            id="global-database-title"
            className="z-10 mt-6 inline-block bg-gradient-to-b from-white to-blue-100 bg-clip-text px-2 text-center text-5xl font-bold tracking-tighter text-transparent md:text-8xl"
          >
            The global <br className="md:bock hidden" /> cloud database
          </h2>
          <canvas
            className="absolute top-[10rem] z-20 aspect-square size-full max-w-fit sm:top-[7.1rem] md:top-[12rem]"
            ref={canvasRef}
            style={{ width: 1200, height: 1200 }}
          />
          <div className="z-20 -mt-32 h-[36rem] w-full overflow-hidden md:-mt-36">
            <div className="absolute bottom-0 h-3/5 w-full bg-gradient-to-b from-transparent via-gray-950/95 to-gray-950" />
            <div className="absolute inset-x-6 bottom-12 m-auto max-w-4xl md:top-2/3">
              <div className="grid grid-cols-1 gap-x-10 gap-y-6 rounded-lg border border-white/[3%] bg-white/[1%] px-6 py-6 shadow-xl backdrop-blur md:grid-cols-3 md:p-8">
                {features.map((item) => (
                  <div key={item.name} className="flex flex-col gap-2">
                    <h3 className="bg-gradient-to-b from-blue-300 to-blue-500 bg-clip-text text-lg font-semibold whitespace-nowrap text-transparent md:text-xl">
                      {item.name}
                    </h3>
                    <p className="text-sm leading-6 text-blue-200/40">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
