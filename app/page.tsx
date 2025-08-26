"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { MailIcon, PhoneIcon, LinkedinIcon, GithubIcon, CheckCircleIcon, BookOpenIcon, AwardIcon, UsersIcon, LanguagesIcon, SendHorizonalIcon } from "lucide-react";
import React, { useState } from "react";

const socialLinks = [
  {
    icon: <LinkedinIcon className="w-5 h-5 mr-2" />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tanvics434/",
  },
];

const githubProjects = [
  {
    name: "Anna, My virtual assistant",
    github: "https://github.com/your-github-link/anna",
    tech: ["Large Language Models (LLMs)", "SpeechRecognition", "HTML", "CSS", "JavaScript"],
    desc: `Developed "Anna", a conversational virtual assistant with speech recognition capabilities, allowing users to interact via voice commands. Integrated with an advanced Large Language Model (LLM) using the Gemini API, enabling Anna to answer a wide range of questions with context-awareness. It serves as an example of integrating AI capabilities with Speech Recognition technology to create a seamless and interactive user experience.`,
  },
  {
    name: "HateShield",
    github: "https://github.com/your-github-link/hateshield",
    tech: ["HuggingFace", "Pytorch", "FastAPI"],
    desc: `Developed and designed a hackathon team project: a browser extension for detecting and blocking multilingual hate speech, including English and Hindi, on social media platforms. Led Web Development and Design. The project achieved a 99% accuracy rate in detecting English hate speech, enabling real-time content moderation.`,
  },
];

const education = [
  {
    year: "2023-2027",
    degree: "B.TECH (Computer Engineering)",
    institute: "Delhi Technological University, New Delhi",
    score: "7.837 CGPA"
  },
  {
    year: "2023",
    degree: "CBSE (Class XII)",
    institute: "Sachdeva Public School, Pitampura",
    score: "91.6%"
  },
  {
    year: "2021",
    degree: "CBSE (Class X)",
    institute: "Sachdeva Public School, Pitampura",
    score: "97.6%"
  },
];

const skills = [
  {
    title: "Languages",
    items: ["C", "C++", "Python", "HTML"]
  },
  {
    title: "Technologies & Concepts",
    items: ["Data Structures and Algorithms (DSA)", "Object Oriented Programming (OOPS)", "Operating System (OS)", "Database Management System (DBMS)", "Computer Networks (CN)"]
  },
  {
    title: "Machine Learning Tools",
    items: ["Pandas", "NumPy", "Scikit-Learn", "XGBoost", "ANN", "CNN"]
  },
  {
    title: "Design Tools",
    items: ["Figma", "Canva"]
  },
  {
    title: "Certificates",
    items: ["Intro to Machine Learning", "Intermediate Machine Learning (by Kaggle)"]
  }
];

const awards = [
  {
    title: "Vihaan 007 - 'Best Freshers Team' by IEEE DTU",
    desc: "Awarded for the HateShield project, recognized for its innovative approach and execution as a first-year team in the Vihaan 007 Hackathon."
  },
  {
    title: "Top 25 Teams, Smart India Hackathon (SIH)",
    desc: "Got selected in the top 25 teams in DTU's internal hackathon for SIH during both first and second year (2023 and 2024)."
  },
  {
    title: "French Olympiad Winner",
    desc: "Won silver (2016 and 2017) and gold (2018) in the French Olympiad for three consecutive years."
  }
];

const responsibilities = [
  {
    title: "Ex-Member, Artificial Intelligence and Machine Learning Society (AIMS), DTU",
    items: [
      "Hands-on experience with Machine Learning models like Scikit-learn and XGBoost.",
      "Participated in competitions to enhance understanding of AI/ML concepts and applications."
    ]
  },
  {
    title: "Events Co-Head, Nrit - The Dance Society of DTU",
    items: [
      "Led a team of 30+ for organizing and managing cultural events, showing leadership and teamwork.",
      "Represented society in inter-college fests with impactful performances."
    ]
  }
];

const extras = [
  "Participated in Startup Weekend by Entrepreneurship cell, DTU.",
  "Completed A1 and A2 French levels at Alliance Française de Delhi."
];

function ContactMeModal() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2 text-violet-700 border-violet-300 hover:bg-violet-50"><MailIcon className="w-4 h-4" />Contact Me</Button>
      </DialogTrigger>
      <DialogContent>
        {!submitted ? (
          <form className="space-y-5 mt-2" onSubmit={handleSubmit} aria-label="Contact Form">
            <DialogHeader>
              <DialogTitle>Contact Me</DialogTitle>
              <DialogDescription>Feel free to say hello! I'll get back as soon as possible.</DialogDescription>
            </DialogHeader>
            <div>
              <Label htmlFor="contact-name">Name</Label>
              <Input id="contact-name" name="name" value={form.name} onChange={handleChange} required minLength={2} placeholder="Your Name" aria-required="true" disabled={loading} />
            </div>
            <div>
              <Label htmlFor="contact-email">Email</Label>
              <Input id="contact-email" type="email" name="email" value={form.email} onChange={handleChange} required placeholder="you@example.com" aria-required="true" disabled={loading} />
            </div>
            <div>
              <Label htmlFor="contact-message">Message</Label>
              <Textarea id="contact-message" name="message" value={form.message} onChange={handleChange} required minLength={5} maxLength={500} placeholder="Let's connect!" aria-required="true" rows={4} disabled={loading} />
            </div>
            <DialogFooter>
              <Button type="submit" disabled={loading} className="w-full bg-violet-700 hover:bg-violet-600 text-white mt-2" aria-busy={loading}>
                {loading ? "Sending..." : (<><SendHorizonalIcon className="w-4 h-4 mr-1" />Send</>)}
              </Button>
            </DialogFooter>
          </form>
        ) : (
          <div className="flex flex-col items-center gap-4 mt-5">
            <CheckCircleIcon className="w-10 h-10 text-green-600" />
            <h2 className="text-xl font-bold text-violet-800">Thank you!</h2>
            <p className="text-center text-gray-600">Your message has been received.<br />I'll reach out if a response is necessary.</p>
            <DialogClose asChild>
              <Button className="mt-2">Close</Button>
            </DialogClose>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

function Portfolio() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Header */}
      <nav className="flex items-center justify-between px-8 py-4 border-b bg-white/80 backdrop-blur z-20 shadow-sm sticky top-0">
        <span className="text-xl font-bold text-violet-700 tracking-tight">Tanvi</span>
        <div className="flex gap-4 items-center">
          <a href="mailto:23cs434@dtu.ac.in" className="flex items-center text-gray-700 hover:text-violet-600"><MailIcon className="w-5 h-5 mr-1" />23cs434@dtu.ac.in</a>
          <a href="tel:+919871315002" className="flex items-center text-gray-700 hover:text-violet-600"><PhoneIcon className="w-5 h-5 mr-1" />+91 9871315002</a>
          <a href="https://www.linkedin.com/in/tanvics434/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-violet-600"><LinkedinIcon className="w-5 h-5 mr-1" />LinkedIn</a>
          <ContactMeModal />
        </div>
      </nav>
      {/* Main Content */}
      <div className="max-w-5xl mx-auto w-full px-4 md:px-8 flex flex-col md:flex-row gap-8 py-10 md:py-14">
        {/* Left Sidebar */}
        <aside className="w-full md:w-1/3 flex flex-col gap-6">
          {/* Profile */}
          <Card className="bg-gradient-to-tr from-violet-100/60 to-blue-100/40 border-none">
            <CardHeader className="flex flex-col items-center gap-1 pb-2">
              <div className="w-24 h-24 rounded-full bg-violet-400 flex items-center justify-center text-white text-4xl font-semibold mb-2 shadow-lg aspect-square">T</div>
              <CardTitle className="text-center text-2xl">Tanvi</CardTitle>
              <CardDescription className="text-center text-violet-600">Undergraduate - Computer Engineering</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-2">
              <div className="text-xs text-gray-600">Roll No: 2K23/CS/434</div>
              <div className="flex gap-2 mt-1">
                <a href="https://www.linkedin.com/in/tanvics434/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><LinkedinIcon className="w-5 h-5 hover:text-violet-700" /></a>
                <a href="mailto:23cs434@dtu.ac.in" aria-label="Email"><MailIcon className="w-5 h-5 hover:text-violet-700" /></a>
                <a href="tel:+919871315002" aria-label="Phone"><PhoneIcon className="w-5 h-5 hover:text-violet-700" /></a>
              </div>
            </CardContent>
          </Card>
          {/* Skills */}
          <Card className="bg-white/75 border-none shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2"><BookOpenIcon className="w-5 h-5" />Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {skills.map(({ title, items }) => (
                  <li key={title}>
                    <div className="font-semibold text-sm mb-1 text-violet-700">{title}</div>
                    <ul className="flex flex-wrap gap-1">
                      {items.map(i => <li key={i}><span className="inline-block bg-violet-100 text-violet-700 px-2 py-0.5 rounded text-xs">{i}</span></li>)}
                    </ul>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          {/* Extra-curricular */}
          <Card className="bg-white/75 border-none shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2"><LanguagesIcon className="w-5 h-5" />Extra-curricular</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-4 text-sm space-y-2">
                {extras.map(e => <li key={e}>{e}</li>)}
              </ul>
            </CardContent>
          </Card>
        </aside>
        {/* Right Main Column */}
        <section className="w-full md:w-2/3 flex flex-col gap-7">
          {/* Education */}
          <Card className="bg-white/75 border-none shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2"><BookOpenIcon className="w-5 h-5" />Education</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {education.map(e => (
                  <div key={e.degree} className="flex flex-col md:flex-row justify-between md:items-center gap-1 border-b pb-2 last:border-b-0 last:pb-0">
                    <span><span className="font-bold text-violet-700">{e.degree}</span> <span className="text-xs text-gray-500 ml-1">({e.year})</span></span>
                    <span className="text-sm text-gray-700">{e.institute}</span>
                    <span className="text-sm text-violet-700 font-semibold">{e.score}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          {/* Projects */}
          <Card className="bg-white/75 border-none shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2"><GithubIcon className="w-5 h-5" />Projects</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              {githubProjects.map((project) => (
                <div key={project.name} className="border bg-violet-50/50 border-violet-100 rounded-lg p-3">
                  <div className="flex flex-wrap gap-2 items-center justify-between">
                    <span className="font-semibold text-violet-800 text-lg">{project.name}</span>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs text-violet-700 hover:underline"><GithubIcon className="w-4 h-4" />Github</a>
                  </div>
                  <div className="mt-1 text-sm text-gray-700">{project.desc}</div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {project.tech.map(t => <span key={t} className="bg-violet-200 text-violet-900 px-2 py-0.5 rounded text-xs">{t}</span>)}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
          {/* Awards */}
          <Card className="bg-white/75 border-none shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2"><AwardIcon className="w-5 h-5" />Achievements & Awards</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-4 text-sm space-y-3">
                {awards.map(a => (
                  <li key={a.title} className="leading-tight"><span className="font-medium text-violet-800">{a.title}</span><br /><span className="text-gray-700">{a.desc}</span></li>
                ))}
              </ul>
            </CardContent>
          </Card>
          {/* Responsibilities */}
          <Card className="bg-white/75 border-none shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2"><UsersIcon className="w-5 h-5" />Responsibilities</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-2">
                {responsibilities.map(r => (
                  <li key={r.title}>
                    <span className="font-semibold text-violet-700">{r.title}</span>
                    <ul className="list-disc pl-5">
                      {r.items.map(i => <li className="text-gray-700" key={i}>{i}</li>)}
                    </ul>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>
      </div>
      {/* Footer */}
      <footer className="w-full pt-10 pb-6 flex flex-col gap-2 items-center text-xs text-gray-600 mt-auto bg-transparent">
        <div className="flex gap-3 items-center">
          <span>Made with <span className="text-violet-700">&#9829;</span> by Tanvi</span>
          <span>|</span>
          {socialLinks.map(({label, icon, href}) => (
            <a href={href} key={label} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-violet-700">{icon}{label}</a>
          ))}
        </div>
        <span className="text-gray-400">&copy; {new Date().getFullYear()} Tanvi. All rights reserved.</span>
      </footer>
    </main>
  );
}

export default Portfolio;
