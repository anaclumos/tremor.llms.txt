"use client"

//To get started, run "npm i cobe"
import { RiArrowRightSLine } from "@remixicon/react"
import createGlobe from "cobe"
import { useEffect, useRef } from "react"

function GlobeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(function () {
    let phi = 4
    let globe: ReturnType<typeof createGlobe> | undefined

    if (canvasRef.current) {
      globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: 800 * 2,
        height: 800 * 2,
        phi: 0,
        theta: -0.3,
        dark: 0,
        diffuse: 1.2,
        mapSamples: 30000,
        mapBrightness: 13,
        mapBaseBrightness: 0.01,
        baseColor: [1, 1, 1],
        glowColor: [1, 1, 1],
        markerColor: [100, 100, 100],
        markers: [],
        onRender: function (state) {
          state.phi = phi
          phi += 0.0005
        },
      })
    }

    return function () {
      if (globe) {
        globe.destroy()
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 800, height: 800 }}
      className="absolute top-40 -right-72 z-10 aspect-square size-full max-w-fit transition-transform group-hover:scale-[1.01] sm:top-12 lg:top-0 lg:-right-60"
    />
  )
}

export default function Example() {
  return (
    <>
      <div className="mx-auto w-full max-w-6xl px-3 py-8 sm:py-20">
        <span className="block text-lg font-semibold tracking-tighter text-blue-500">
          AI-Powered
        </span>
        <h2
          id="features-title"
          className="mt-2 inline-block bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-3xl font-bold tracking-tighter text-transparent sm:text-5xl dark:from-gray-50 dark:to-gray-300"
        >
          Revolutionize your customer service
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-7 text-gray-600 dark:text-gray-400">
          Harness the power of AI to provide 24/7 support, reduce response
          times, and increase customer satisfaction with our cutting-edge
          solutions.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-3">
          <a
            href="#"
            className="group relative col-span-1 overflow-hidden rounded-t-2xl rounded-b bg-gray-50 p-8 ring-1 shadow-2xl shadow-black/10 ring-black/5 lg:col-span-2 lg:rounded-l-2xl lg:rounded-r dark:bg-gray-900 dark:ring-white/5"
          >
            <div className="relative z-20">
              <h3 className="text-2xl font-semibold text-gray-950 dark:text-gray-50">
                AI Chatbot Integration
              </h3>
              <p className="mt-4 max-w-sm text-gray-700 dark:text-gray-400">
                Seamlessly integrate our advanced AI chatbots to handle customer
                queries instantly, freeing up your human agents for complex
                issues.
              </p>
              <div className="mt-12 flex w-fit items-center gap-0.5 rounded bg-white/10 px-2 py-1 text-blue-500 backdrop-blur-[3px]">
                <span>Explore features</span>
                <RiArrowRightSLine className="mt-0.5 size-5 transition-all group-hover:translate-x-1 group-hover:opacity-100 sm:opacity-20" />
              </div>
            </div>
            <GlobeCanvas />
          </a>
          <div className="rounded-t rounded-b-2xl bg-gradient-to-br from-blue-400 to-blue-600 p-8 shadow-lg shadow-blue-500/20 lg:rounded-l lg:rounded-r-2xl">
            <figure className="flex h-full flex-col justify-between">
              <blockquote className="text-base font-medium text-gray-50 sm:text-lg/8">
                <p className="relative bg-gradient-to-br from-blue-100 to-white bg-clip-text leading-7 font-medium tracking-tighter text-transparent before:absolute before:top-0 before:right-full">
                  The AI-powered customer support has completely transformed our
                  service capabilities. We've seen a 70% reduction in response
                  times and a significant increase in customer satisfaction
                  scores.
                </p>
              </blockquote>
              <figcaption className="mt-8 flex items-center space-x-4 sm:mt-0">
                <div className="flex-auto">
                  <div className="mt-7 text-sm font-semibold text-gray-50">
                    <div>
                      <span className="absolute inset-0" />
                      Sarah Johnson
                    </div>
                  </div>
                  <span className="text-sm text-blue-200">
                    CX Director, TechInnovate
                  </span>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </>
  )
}
