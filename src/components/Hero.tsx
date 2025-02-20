import Image from "next/image"

export default function Hero() {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <Image
          src="/placeholder.svg?height=150&width=150"
          alt=""
          width={150}
          height={150}
          className="rounded-full mx-auto mb-6"
        />
        <h1 className="text-4xl font-bold mb-2">sajjad ahmed mohammed</h1>
        <p className="text-xl mb-8">Web Developer & Designer</p>

      </div>
    </section>
  )
}

