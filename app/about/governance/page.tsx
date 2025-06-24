import type { Metadata } from "next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Governance - Website",
  description: "Governance structure and information.",
}

const GovernancePage = () => {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6">Governance</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Governance Principles</h2>
        <p className="text-gray-700 mb-4">
          Our governance is guided by the following principles to ensure effective and responsible decision-making:
        </p>

        <ul className="space-y-4">
          <li className="flex items-start">
            <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2 mr-3 flex-shrink-0"></div>
            <div>
              <span className="font-medium">Independence:</span>
              <p className="text-gray-600 mt-1">Decisions are made without undue influence from any external party.</p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2 mr-3 flex-shrink-0"></div>
            <div>
              <span className="font-medium">Transparency:</span>
              <p className="text-gray-600 mt-1">
                All governance processes and decisions are open and accessible to stakeholders.
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2 mr-3 flex-shrink-0"></div>
            <div>
              <span className="font-medium">Accountability:</span>
              <p className="text-gray-600 mt-1">Decision-makers are responsible for their actions and outcomes.</p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2 mr-3 flex-shrink-0"></div>
            <div>
              <span className="font-medium">Participation:</span>
              <p className="text-gray-600 mt-1">
                Stakeholders are encouraged to participate in governance processes and decision-making.
              </p>
            </div>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Governance Structure</h2>
        <p className="text-gray-700 mb-4">
          Our governance structure is designed to promote collaboration and shared responsibility. It includes the
          following key components:
        </p>

        <ul className="space-y-4">
          <li className="flex items-start">
            <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2 mr-3 flex-shrink-0"></div>
            <div>
              <span className="font-medium">Board of Trustees:</span>
              <p className="text-gray-600 mt-1">
                The Board of Trustees is responsible for overseeing the organization's strategic direction and ensuring
                its long-term sustainability.
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2 mr-3 flex-shrink-0"></div>
            <div>
              <span className="font-medium">Executive Leadership:</span>
              <p className="text-gray-600 mt-1">
                The Executive Leadership team is responsible for implementing the organization's strategic plan and
                managing day-to-day operations.
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2 mr-3 flex-shrink-0"></div>
            <div>
              <span className="font-medium">Advisory Council:</span>
              <p className="text-gray-600 mt-1">
                The Advisory Council provides expert advice and guidance to the Board of Trustees and Executive
                Leadership team on key issues.
              </p>
            </div>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Democratic Climate Action</h2>
        <p className="text-gray-700 mb-4">
          We believe that addressing climate change requires a democratic and inclusive approach. We are committed to
          engaging with stakeholders from all sectors of society to develop and implement effective climate solutions.
        </p>
        <p className="text-gray-700">
          Climate change is not only an environmental crisis but also a profound social and political challenge.
          Addressing it effectively requires the active participation of citizens, communities, and governments at all
          levels.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Accountability & Reporting</h2>
        <p className="text-gray-700 mb-4">
          We are committed to transparency and accountability in all our governance processes. We regularly report on
          our progress and performance to our stakeholders.
        </p>
        <p className="text-gray-700">
          Our commitment to accountability extends to all levels of the organization. We have established clear
          mechanisms for monitoring and evaluating our performance, and we are always striving to improve our governance
          practices.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>How can I get involved in the governance process?</AccordionTrigger>
            <AccordionContent>
              You can get involved by attending community forums, joining advisory committees, or running for a position
              on the Board of Directors.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Where can I find more information about the governance structure?</AccordionTrigger>
            <AccordionContent>
              More information can be found in our governance charter, which is available on our website.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Who do I contact with questions about governance?</AccordionTrigger>
            <AccordionContent>You can contact the governance team at governance@example.com.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  )
}

export default GovernancePage
