export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="container-max">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text">About YCTF</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Driving transformative climate action across Nigeria and West Africa through innovative research, policy
              advocacy, and community engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Mission</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We are dedicated to creating a sustainable future through innovative solutions and community
                  engagement. Our mission is to empower individuals and organizations to make a positive impact on the
                  environment and society.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We believe in the power of collaboration and strive to build strong partnerships with stakeholders
                  across various sectors. Together, we can address the pressing challenges facing our planet and create
                  a more equitable and resilient world.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="/images/about-plants.jpg"
                alt="sustainable agriculture"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and shape our approach to climate action and sustainable
              development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Sustainability</h3>
              <p className="text-gray-600 leading-relaxed">
                We prioritize environmental stewardship and responsible resource management in all our initiatives.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                We embrace creativity and seek out new approaches to solve complex climate challenges.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Collaboration</h3>
              <p className="text-gray-600 leading-relaxed">
                We foster partnerships and work together with communities to achieve common goals.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Integrity</h3>
              <p className="text-gray-600 leading-relaxed">
                We uphold the highest ethical standards and act with transparency and accountability.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Community</h3>
              <p className="text-gray-600 leading-relaxed">
                We are committed to serving our communities and creating positive social impact.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                We strive for the highest quality in our research, programs, and community engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Impact</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Through our dedicated work, we're making measurable progress toward a sustainable future for Nigeria and
              West Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-gray-600">Research Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">25+</div>
              <div className="text-gray-600">Partner Organizations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">10,000+</div>
              <div className="text-gray-600">Lives Impacted</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
