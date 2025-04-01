import { Link } from "react-router-dom";
import Footer from "../components/Footer";
const backgroundImage = '/assets/background.jpg';

const Home = () => {
  return (
    <div className="bg-black text-white">
      {/* Full-page Welcome Section */}
      <section
        className="h-screen flex flex-col justify-center items-center text-center px-4 bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${backgroundImage})`, // Use the imported image
        }}
      >
        {/* Faded black overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-90"></div> {/* Increased opacity */}

        <h1 className="text-8xl md:text-7xl font-bold mb-6 z-10">Welcome to <span className="text-yellow-300">Shoezie</span></h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-8 z-10">Step into style, walk in comfort.</p>
        <div className="space-x-4 z-10">
          <Link
            to="/signup"
            className="bg-yellow-300 text-black font-bold py-3 px-8 rounded-md hover:bg-yellow-600 transition-colors"
          >
            Get Started
          </Link>
          <Link
            to="/category/all"
            className="bg-transparent border border-yellow-300 text-yellow-300 font-bold py-3 px-8 rounded-md hover:bg-yellow-300 hover:text-black transition-colors"
          >
            Explore Shoes
          </Link>
        </div>
      </section>

      {/* Scrollable Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Featured Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CategoryCard title="Sneakers" image="/placeholder.svg?height=300&width=400" link="/category/sneakers" />
            <CategoryCard
              title="Running Shoes"
              image="/placeholder.svg?height=300&width=400"
              link="/category/running"
            />
            <CategoryCard title="Casual Shoes" image="/placeholder.svg?height=300&width=400" link="/category/casual" />
          </div>
        </section>

        {/* Discount Banner */}
        <section className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black text-center py-12 rounded-lg my-16">
          <h2 className="text-3xl font-bold mb-4">Limited Time Offer!</h2>
          <p className="text-xl mb-6">Get up to 50% off on selected shoes.</p>
          <Link
            to="/sale"
            className="bg-black text-white font-bold py-3 px-8 rounded-md hover:bg-gray-800 transition-colors"
          >
            Shop Now
          </Link>
        </section>

        {/* Why Choose Us */}
        <section className="my-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Shoezie</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard title="Quality Assurance" description="We offer only the finest, handpicked shoes." />
            <FeatureCard title="Fast Shipping" description="Get your shoes delivered in no time." />
            <FeatureCard title="Easy Returns" description="Not satisfied? Return within 30 days, no questions asked." />
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

const CategoryCard = ({ title, image, link }) => (
  <Link to={link} className="group">
    <div className="relative overflow-hidden rounded-lg h-64">
      <img
        src={image || "/placeholder.svg"}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>
    </div>
  </Link>
)

const FeatureCard = ({ title, description }) => (
  <div className="bg-gray-800 p-6 rounded-lg text-center">
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
)

export default Home;