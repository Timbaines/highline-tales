import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { parseContent } from '@/utils/contentParserUtils.jsx';

function RenderParsed({ content }) {
  return <div data-testid="parsed-root">{parseContent(content)}</div>;
}

describe('parseContent utility', () => {
  it('renders headings and paragraphs from custom tags', () => {
    const input = '[h2]Hello World[/h2]\n\nThis is a paragraph.';
    render(<RenderParsed content={input} />);

    const h2 = screen.getByRole('heading', { level: 2, name: 'Hello World' });
    expect(h2).toBeInTheDocument();

    expect(screen.getByText('This is a paragraph.')).toBeInTheDocument();
  });

  it('renders images with alt, caption, size and remaining content as paragraph', () => {
    const input = '[img src="/path/pic.jpg" alt="Alt text" caption="Nice view" size="small"] More text after image';
    render(<RenderParsed content={input} />);

    const root = screen.getByTestId('parsed-root');
    const img = within(root).getByRole('img', { name: 'Alt text' });
    expect(img).toHaveAttribute('src', '/path/pic.jpg');

    // Caption
    expect(screen.getByText('Nice view')).toBeInTheDocument();

    // Remaining content should become a paragraph
    expect(screen.getByText('More text after image')).toBeInTheDocument();
  });
});
