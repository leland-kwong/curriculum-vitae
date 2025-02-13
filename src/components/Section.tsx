import React from 'react';

interface SectionProps {
  title?: string;
  children: React.ReactNode;
}

export function Section({ title, children }: SectionProps) {
  return (
    <section className="Section">
      {title && (
        <h3 className={`SectionTitle Section_${title} ttu uppercase normal tracked`}>
          {title}
        </h3>
      )}
      {children}
    </section>
  );
}