import React from 'react';

/**
 * PARSE AND RENDERS CONTENT WITH HEADINGS AND IMAGES
 * STYLING IS HANDLED BY GLOBAL .PROSE CLASSES
 *
 * @param {string} content - The content string to parse
 * @returns {Array|null} Array of React elements or null
 *
 * SUPPORTED FORMATS:
 * - HEADINGS: [h2]Heading Text[/h2]
 * - IMAGES: [img src="/path/to/image.jpg" alt="Alt text" caption="Optional caption" size="full|medium|small"]
 */
export function parseContent(content) {
    if (!content) return null;

    // SPLIT CONTENT INTO SECTIONS BASED ON HEADING OR IMAGE TAGS
    // SUPPORTS: <br><br>, <br/><br/>, <br /> <br />, AND TWO OR MORE LINES
    const sections = content
        .split(/\s*(?:<br\s*\/?>(?:\s|\r?\n)*){2,}|(?:\r?\n){2,}/i)
        .map(s => (typeof s === 'string' ? s.trim() : s))
        .filter(s => s);

    return sections.map((section, index) => {
        try {
            // CHECK FOR HEADING PATTERN: [h1]...[/h1] through [h6]...[/h6]
            // Enforce matching closing level using a backreference
            const headingMatch = section.match(/^\[h([1-6])]([\s\S]*?)\[\/h\1]/);

            // CHECK FOR IMAGE PATTERN: [img src="/path/to/image.jpg" alt="Alt text" caption="Optional caption" size="full|medium|small"]
            const imageMatch = section.match(/^\[img\s+src="([^"]+)"(?:\s+alt="([^"]*)")?(?:\s+caption="([^"]*)")?(?:\s+size="([^"]*)")?]/);

            // IF SECTION CONTAINS A HEADING
            if (headingMatch) {
                const headingLevel = parseInt(headingMatch[1], 10) || 2;
                const headingText = headingMatch[2] || '';
                const remainingContent = section.substring(headingMatch[0].length).trim();

                // RENDER HEADING BASED ON LEVEL
                const renderHeading = () => {
                    switch (headingLevel) {
                        case 1: return <h1>{headingText}</h1>;
                        case 2: return <h2>{headingText}</h2>;
                        case 3: return <h3>{headingText}</h3>;
                        case 4: return <h4>{headingText}</h4>;
                        case 5: return <h5>{headingText}</h5>;
                        case 6: return <h6>{headingText}</h6>;
                        default: return <h2>{headingText}</h2>;
                    }
                };

                return (
                    <div key={index}>
                        {renderHeading()}
                        {remainingContent && (
                            Array.isArray(remainingContent)
                                ? remainingContent
                                : parseContent(remainingContent)
                        )}
                    </div>
                );
            }

            // IF SECTION CONTAINS AN IMAGE
            if (imageMatch) {
                const imgSrc = imageMatch[1] || '';
                const imgAlt = imageMatch[2] || '';
                const imgCaption = imageMatch[3] || '';
                const imgSize = imageMatch[4] || 'full'; // DEFAULT TO FULL SIZE
                const remainingContent = section.substring(imageMatch[0].length).trim();

                return (
                    <div key={index}>
                        <figure data-size={imgSize}>
                            <img
                                src={imgSrc}
                                alt={imgAlt}
                                data-size={imgSize}
                            />
                            {imgCaption && (
                                <figcaption>{imgCaption}</figcaption>
                            )}
                        </figure>
                        {remainingContent && parseContent(remainingContent)}
                    </div>
                );
            }

            // REGULAR PARAGRAPH
            return <p key={index}>{section}</p>;
        } catch (error) {
            console.error('Error parsing content section:', error);
            return <p key={index}>{section}</p>;
        }
    });
}