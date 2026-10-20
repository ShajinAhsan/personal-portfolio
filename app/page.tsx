import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Work from "@/components/Work";

export default function Home() {
  return (
    <div
      id="top"
      className="min-h-screen w-full overflow-x-clip antialiased"
      style={{
        background: "var(--bg)",
        color: "var(--text)",
        paddingTop: "var(--safe-area-inset-top)",
        boxSizing: "border-box",
      }}
    >
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
