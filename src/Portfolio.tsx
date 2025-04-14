import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Github, Linkedin } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 text-gray-800">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">
          Matheus dos Santos Cunha Silva
        </h1>
        <p className="text-lg">
          Backend Developer | Node.js, Kafka, GraphQL, MongoDB, AWS, NewRelic
        </p>
        <div className="mt-4 flex justify-center gap-4">
          <a
            href="https://github.com/mathsant"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline">
              <Github className="mr-2" /> GitHub
            </Button>
          </a>
          <a
            href="https://www.linkedin.com/feed/?trk=homepage-basic_sign-in-submit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline">
              <Linkedin className="mr-2" /> LinkedIn
            </Button>
          </a>
        </div>
      </header>

      <section className="max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p>
          I'm a backend developer with 4+ years of experience focused on
          building scalable APIs, event-driven systems, and modern backend
          architectures using Node.js, Kafka, GraphQL, and MongoDB. I love clean
          code, performance optimization, and async team collaboration.
        </p>
        <p className="mt-2">
          Open to remote long-term contracts. Comfortable communicating in
          English. Let's build something great together!
        </p>
      </section>

      <section className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent>
              <h3 className="text-xl font-semibold">União Sistemas</h3>
              <p className="text-sm mt-2">
                ERP backend system for business control and automation.
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Stack: Node.js, MongoDB, REST, Docker
              </p>
              <a
                href="https://github.com/mathsant/Uniao_Sistemas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-sm mt-2 inline-block"
              >
                View on GitHub
              </a>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h3 className="text-xl font-semibold">Cash Flow API</h3>
              <p className="text-sm mt-2">
                Personal finance API for tracking income, expenses, and monthly
                summaries.
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Stack: .NET 8, C#, REST, In-memory Storage
              </p>
              <a
                href="https://github.com/mathsant/cash-flow-dotnet-api"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-sm mt-2 inline-block"
              >
                View on GitHub
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="text-center mt-16">
        <h2 className="text-xl font-semibold mb-2">Let's Work Together</h2>
        <p className="mb-4">
          Feel free to reach out by email if you have a project in mind.
        </p>
        <a
          href="mailto:mathsant_99@hotmail.com"
          className="text-blue-600 font-medium"
        >
          mathsant_99@hotmail.com
        </a>
      </section>
    </div>
  );
}
