import React from 'react'
import cvData from './data/cv-data'
import { Header } from './components/Header'
import { Section } from './components/Section'
import { Experience } from './components/Experience'
import { Education } from './components/Education'
import { Interests } from './components/Interests'

function App() {
  return (
    <div className="min-h-screen">
      <Section>
        <Header
          name={cvData.name}
          title={cvData.title}
          contactInfo={cvData.contactInfo}
          webPresence={cvData.webPresence}
        />
      </Section>

      <Section>
        <p>{cvData.summary}</p>
      </Section>

      <Section title="experience">
        <Experience experiences={cvData.experience} />
      </Section>

      <Section title="interests & hobbies">
        <Interests interests={cvData.interestsAndHobbies} />
      </Section>

      <Section title="education">
        <Education education={cvData.education} />
      </Section>
    </div>
  )
}

export default App

