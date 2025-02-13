import { marked } from 'marked';

export function trimIndentation(source: string): string {
  const indentationSpacesRegex = /^(\x20+)/gm;
  const indentationTabsRegex = /^(\t+)/gm;

  function detectIndentation(source: string): string | null {
    const spaces = source.match(indentationSpacesRegex);
    const tabs = source.match(indentationTabsRegex);

    if (!spaces && !tabs) return null;
    if (spaces && tabs) throw new Error('mixed spaces and tabs');

    const indentations = (spaces || tabs).sort((a, b) => a.length - b.length);
    const initialIndentation = indentations[0];
    const initialIndentationSize = initialIndentation.length;

    for (let i = 1; i < indentations.length; i++) {
      const currentIndentation = indentations[i];
      const currentIndentationSize = currentIndentation.length;
      if (currentIndentationSize % initialIndentationSize !== 0) {
        throw new Error(
          `indentation is uneven: [${initialIndentation}] of size [${initialIndentationSize}] vs [${currentIndentation}] of size [${currentIndentationSize}]`
        );
      }
    }

    return indentations[0];
  }

  const indentation = detectIndentation(source);
  if (!indentation) return source;
  
  const regex = new RegExp(indentation, 'g');
  return source.replace(regex, '');
}

export function renderMarkdown(content: string): string {
  return marked(trimIndentation(content));
}