"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DollarSign,
  TrendingUp,
  Globe,
  ArrowRight,
  Download,
  Target,
  BarChart3,
} from "lucide-react";
import { useDownloadPage } from "@/hooks/use-download-page";

export default function FinanceProgrammePage() {
  const { downloadPageContent } = useDownloadPage();

  const handleDownload = async () => {
    await downloadPageContent(
      "Climate Finance Transformation Programme",
      "finance-strategy.html"
    );
  };

  const focusAreas = [
    {
      icon: TrendingUp,
      title: "Climate Risk Disclosure",
      description:
        "Supporting the adoption of global taxonomy and climate risk disclosure frameworks to align financial flows with climate objectives.",
      initiatives: [
        "TCFD implementation support",
        "Climate risk assessment methodologies",
        "Financial sector capacity building",
        "Regulatory framework development",
      ],
    },
    {
      icon: Target,
      title: "Investment Alignment",
      description:
        "Aligning public spending and private portfolios with net-zero goals and Paris Agreement commitments.",
      initiatives: [
        "Green investment criteria development",
        "Portfolio alignment methodologies",
        "Public procurement green standards",
        "Sustainable finance guidelines",
      ],
    },
    {
      icon: BarChart3,
      title: "Carbon Tax Reform",
      description:
        "Developing proposals for carbon emission tax reform to incentivize low-carbon investments and behaviors.",
      initiatives: [
        "Carbon pricing mechanism design",
        "Tax policy reform proposals",
        "Revenue recycling strategies",
        "Economic impact assessments",
      ],
    },
    {
      icon: Globe,
      title: "International Finance",
      description:
        "Engaging with international financial institutions to mobilize climate finance for Nigeria's transition.",
      initiatives: [
        "Climate finance mobilization strategies",
        "International partnership development",
        "Blended finance mechanisms",
        "Green bond market development",
      ],
    },
  ];

  const keyObjectives = [
    "Transform Nigeria's public and private financial system to align with the Paris Agreement",
    "Drive ecological transition through innovative financing mechanisms",
    "Support adoption of global taxonomy and climate risk disclosure",
    "Align public spending and private portfolios with net-zero goals",
    "Develop carbon emission tax reform proposals",
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-yellow-600 via-amber-600 to-yellow-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-19%20at%2007.04.25%20%282%29-5Z5SA4KNgnSTHVakabvsuKhawPfNXa.jpeg"
            alt="Solar-powered agricultural finance solutions"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container-max relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/20">
              <DollarSign className="w-4 h-4 mr-2" />
              Finance Programme
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Climate Finance Transformation
            </h1>
            <p className="text-xl md:text-2xl text-yellow-100 mb-8 leading-relaxed">
              Transforming Nigeria's public and private financial system,
              aligning it with the Paris Agreement to drive ecological
              transition through innovative financing mechanisms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-white text-primary-900 hover:bg-primary-50"
                onClick={handleDownload}
              >
                Download Finance Strategy
                <Download className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Programme Objectives */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
                Programme Objectives
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The Finance Programme aims to transform Nigeria's public and
                private financial system, aligning it with the Paris Agreement
                to drive ecological transition. We focus on innovative financing
                mechanisms that can accelerate climate action while ensuring
                economic growth.
              </p>

              <div className="space-y-4">
                {keyObjectives.map((objective, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                      <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    </div>
                    <p className="text-gray-700">{objective}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-19%20at%2007.04.24-hPwXfajctpd0AWBEKeXdRKDQfifiwI.jpeg"
                alt="Solar-powered agricultural systems"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-primary-600 mb-1">
                  $50B
                </div>
                <div className="text-gray-600 text-sm">
                  Climate Finance Target
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
              Key Focus Areas
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach addresses all aspects of financial
              system transformation for climate action.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {focusAreas.map((area, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex items-start mb-6">
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <area.icon className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                        {area.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {area.description}
                  </p>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Key Initiatives:
                    </h4>
                    <ul className="space-y-2">
                      {area.initiatives.map((initiative, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-sm text-gray-600"
                        >
                          <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {initiative}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* International Dialogue */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-19%20at%2007.04.25%20%284%29-rDAQ3BurDyOnkDncSxLFzndekhLbzc.jpeg"
                alt="Sustainable agricultural development"
                className="rounded-2xl shadow-lg"
              />
            </div>

            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                International Financial Dialogue
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The programme will be in ongoing dialogue with international
                financial institutions such as the World Bank, African
                Development Bank, Islamic Development Bank, and others to
                mobilize climate finance.
              </p>

              <div className="bg-yellow-50 p-6 rounded-xl mb-6">
                <h3 className="font-semibold text-yellow-900 mb-3">
                  Strategic Partnerships
                </h3>
                <p className="text-yellow-800">
                  We work closely with multilateral development banks, climate
                  funds, and international financial institutions to unlock
                  climate finance for Nigeria's transition.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-yellow-600 font-bold text-sm">1</span>
                  </div>
                  <span className="text-gray-700">
                    Multilateral development bank engagement
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-yellow-600 font-bold text-sm">2</span>
                  </div>
                  <span className="text-gray-700">
                    Climate fund access and mobilization
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-yellow-600 font-bold text-sm">3</span>
                  </div>
                  <span className="text-gray-700">
                    Innovative financing mechanism development
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Analysis */}
      <section className="section-padding bg-yellow-600 text-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-6">
              Research & Analysis
            </h2>
            <p className="text-xl text-yellow-100 max-w-3xl mx-auto">
              Our finance programme is supported by comprehensive research and
              analysis to inform policy and investment decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-xl font-semibold mb-4">
                Financial Risk Assessment
              </h3>
              <p className="text-yellow-100 mb-4">
                Comprehensive analysis of climate-related financial risks and
                opportunities in Nigeria's financial sector.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-xl font-semibold mb-4">Policy Frameworks</h3>
              <p className="text-yellow-100 mb-4">
                Development of regulatory frameworks and policies to support
                sustainable finance in Nigeria.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-xl font-semibold mb-4">Market Development</h3>
              <p className="text-yellow-100 mb-4">
                Analysis of green finance markets and opportunities for
                sustainable investment growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="section-padding">
        <div className="container-max">
          <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-3xl p-8 lg:p-16 text-center">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
              Transform Nigeria's Financial System for Climate
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join us in aligning Nigeria's financial system with climate
              objectives. Whether you're from the financial sector, government,
              or civil society, there are opportunities to contribute.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-yellow-600 hover:bg-yellow-700"
                asChild
              >
                <a
                  href="mailto:info@yelfclimatetrustfoundation.org?subject=Partner With Us"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Partner With Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
