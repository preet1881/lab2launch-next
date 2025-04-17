// pages/index.tsx
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Lab2Launch – Bridging Research & Innovation</title>
      </Head>

      <main className="relative bg-white text-black overflow-hidden">
        {/* Hero Section with Decorative Elements Near Center Text */}
        <section className="relative flex flex-col items-center justify-center min-h-[90vh] text-center px-6 pt-32 pb-24">
          {/* Center Text and CTA */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="relative inline-block">
              <h1 className="relative text-4xl md:text-6xl font-extrabold leading-tight max-w-4xl inline-block">
                {/* Lab Image Floating Near 'Lab' Word */}
                <span className="relative inline-flex items-center">
                  <span className="text-purple-600 mr-2">Lab</span>
                  <span className="relative w-[2em] h-[2em] md:w-[2.5em] md:h-[2.5em] animate-float-slow">
                    <Image
                      src="/lab.png"
                      alt="Lab setup"
                      fill
                      className="object-contain"
                    />
                  </span>
                </span>
                &nbsp;to&nbsp;
                <span className="relative inline-flex items-center">
                  <span className="relative w-[2em] h-[2em] md:w-[2.5em] md:h-[2.5em] animate-launch-rise">
                    <Image
                      src="/rocket.png"
                      alt="Rocket"
                      fill
                      className="object-contain"
                    />
                  </span>
                  <span className="text-sky-600 ml-2">Launch</span>
                </span>
              </h1>
            </div>
            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl">
              Empowering researchers, startups, and investors to turn groundbreaking ideas into scalable impact.
            </p>
            <Link href="/showcase">
              <button className="mt-10 bg-black text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition">
                Get Started →
              </button>
            </Link>
          </div>

          <style jsx global>{`
            @keyframes float-slow {
              0% { transform: translateY(0); }
              50% { transform: translateY(-6px); }
              100% { transform: translateY(0); }
            }
            @keyframes rocket-rise {
              0% { transform: translateY(0) rotate(-2deg); }
              50% { transform: translateY(-10px) rotate(2deg); }
              100% { transform: translateY(0) rotate(-2deg); }
            }
            .animate-float-slow {
              animation: float-slow 4s ease-in-out infinite;
            }
            .animate-launch-rise {
              animation: rocket-rise 5s ease-in-out infinite;
            }
          `}</style>
        </section>


        <section className="bg-white text-black py-24 px-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-4">Showcase Research that Deserves the Spotlight</h2>
              <p className="text-lg text-gray-600 mb-6">
                Create a public-facing portfolio for your research. Whether published or ongoing, attract collaborators, investors, and real-world applications.
              </p>
              <Link href="/showcase">
                <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition">
                  Explore Showcase →
                </button>
              </Link>
            </motion.div>

            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Image
                src="/product-showcase.png"
                alt="Research Showcase"
                width={500}
                height={300}
                className="rounded-xl shadow-md"
              />
            </motion.div>
          </div>
        </section>

        <section className="bg-[#f3f4f6] text-black py-24 px-6">
          <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
            
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Image
                src="/product-challenges.png"
                alt="Challenge Hub"
                width={500}
                height={300}
                className="rounded-xl shadow-md"
              />
            </motion.div>

            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-4">Solve Real Problems. Get Funded.</h2>
              <p className="text-lg text-gray-700 mb-6">
                Companies post live R&D challenges. Researchers and labs submit solutions, get recognized, and earn funding or pilot opportunities.
              </p>
              <Link href="/challenges">
                <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition">
                  View Challenges →
                </button>
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="bg-white text-black py-24 px-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
            
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-4">Find the Right Co-Founder</h2>
              <p className="text-lg text-gray-600 mb-6">
                Bring together researchers and business minds. Match based on domain, experience, and startup intent to build deep-tech ventures from the ground up.
              </p>
              <Link href="/match">
                <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition">
                  Join the Matchmaking →
                </button>
              </Link>
            </motion.div>

            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Image
                src="/product-match.png"
                alt="Co-founder Match"
                width={500}
                height={300}
                className="rounded-xl shadow-md"
              />
            </motion.div>

          </div>
        </section>

        <section className="bg-[#f3f4f6] text-black py-24 px-6">
          <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">

            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Image
                src="/product-ip.png"
                alt="IP Marketplace"
                width={500}
                height={300}
                className="rounded-xl shadow-md"
              />
            </motion.div>

            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-4">Access and Commercialize Patents</h2>
              <p className="text-lg text-gray-700 mb-6">
                A searchable marketplace of unused, impactful patents across sectors. Browse by domain, submit use cases, or license for your next breakthrough.
              </p>
              <Link href="/ip">
                <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition">
                  Browse IP Marketplace →
                </button>
              </Link>
            </motion.div>

          </div>
        </section>

        <section className="bg-white text-black py-24 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">

          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-4">Invest with Confidence. Fund with Safety.</h2>
            <p className="text-lg text-gray-600 mb-6">
              Our funding model leverages credit-default swaps to make R&D investing safer for VCs and corporate investors—while giving researchers long-term support.
            </p>
            <Link href="/funding">
              <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition">
                Apply for Funding →
              </button>
            </Link>
          </motion.div>

          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image
              src="/product-funding.png"
              alt="Funding Platform"
              width={500}
              height={300}
              className="rounded-xl shadow-md"
            />
          </motion.div>

        </div>
      </section>

      <footer className="bg-[#000e1a] text-gray-400 px-6 py-16 mt-24">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 text-sm">
            
            {/* Brand and Email CTA */}
            <div className="md:col-span-2 max-w-sm">
              <h3 className="text-white text-lg font-semibold mb-3">Lab2Launch</h3>
              <p className="text-gray-400 mb-4">
                Get early access to innovation stories, tools, and funding updates.
              </p>

              <form className="flex items-center gap-2">
                <input
                  type="email"
                  placeholder="you@university.edu"
                  className="flex-1 px-4 py-2 rounded-full text-black focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full font-medium"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><Link href="/showcase">Research Showcase</Link></li>
                <li><Link href="/challenges">R&D Challenges</Link></li>
                <li><Link href="/match">Co-founder Match</Link></li>
                <li><Link href="/ip">IP Marketplace</Link></li>
                <li><Link href="/funding">Funding Model</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/community">Community</Link></li>
                <li><Link href="/cases">Case Studies</Link></li>
                <li><Link href="/tools">Tools</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/careers">Careers</Link></li>
                <li><Link href="/media">Media</Link></li>
                <li><Link href="/terms">Terms</Link></li>
                <li><Link href="/privacy">Privacy</Link></li>
              </ul>
            </div>
          </div>

          {/* Social & Footer bottom */}
          <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between text-xs">
            <p>© {new Date().getFullYear()} Lab2Launch. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Twitter</a>
              <a href="#" className="hover:text-white">LinkedIn</a>
              <a href="#" className="hover:text-white">Instagram</a>
              <a href="mailto:hello@lab2launch.in" className="hover:text-white">Email</a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
