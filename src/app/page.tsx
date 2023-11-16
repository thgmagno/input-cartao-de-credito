import CreditCard from "@/components/CreditCard"
import Footer from "@/components/Footer"
import Form from "@/components/Form"

export default function Home() {

  return (
    <main className="h-screen md:grid md:grid-cols-2 space-y-10 pt-16">
      {/* Grid Left */}
      <div className="flex items-center justify-center font-sans">
        <CreditCard />
      </div>

      {/* Grid Right */}
      <div className="flex items-center justify-center font-display max-w-[300px] mx-auto pb-10">
        <Form />
      </div>

      <Footer />
    </main>
  )
}
