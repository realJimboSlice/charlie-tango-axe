const rules = [
  {
    id: "color-contrast-enhanced",
    tags: ["cat.color", "wcag2aaa", "wcag146", "ACT"],
    description:
      "Ensures the contrast between foreground and background colors meets WCAG 2 AAA enhanced contrast ratio thresholds",
    help: "Elements must meet enhanced color contrast ratio thresholds",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.9/color-contrast-enhanced?application=axe-puppeteer",
  },
  {
    id: "color-contrast",
    tags: [
      "cat.color",
      "wcag2aa",
      "wcag143",
      "TTv5",
      "TT13.c",
      "EN-301-549",
      "EN-9.1.4.3",
      "ACT",
    ],
    description:
      "Ensures the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds",
    help: "Elements must meet minimum color contrast ratio thresholds",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.9/color-contrast?application=axe-puppeteer",
  },
  {
    id: "heading-order",
    tags: ["cat.semantics", "best-practice"],
    description: "Ensures the order of headings is semantically correct",
    help: "Heading levels should only increase by one",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.9/heading-order?application=axe-puppeteer",
  },
  {
    id: "image-alt",
    tags: [
      "cat.text-alternatives",
      "wcag2a",
      "wcag111",
      "section508",
      "section508.22.a",
      "TTv5",
      "TT7.a",
      "TT7.b",
      "EN-301-549",
      "EN-9.1.1.1",
      "ACT",
    ],
    description:
      "Ensures <img> elements have alternate text or a role of none or presentation",
    help: "Images must have alternate text",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.9/image-alt?application=axe-puppeteer",
  },
  {
    id: "landmark-unique",
    tags: ["cat.semantics", "best-practice"],
    description:
      "Landmarks should have a unique role or role/label/title (i.e. accessible name) combination",
    help: "Ensures landmarks are unique",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.9/landmark-unique?application=axe-puppeteer",
  },
  {
    id: "link-name",
    tags: [
      "cat.name-role-value",
      "wcag2a",
      "wcag244",
      "wcag412",
      "section508",
      "section508.22.a",
      "TTv5",
      "TT6.a",
      "EN-301-549",
      "EN-9.2.4.4",
      "EN-9.4.1.2",
      "ACT",
    ],
    description: "Ensures links have discernible text",
    help: "Links must have discernible text",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.9/link-name?application=axe-puppeteer",
  },
  {
    id: "region",
    tags: ["cat.keyboard", "best-practice"],
    description: "Ensures all page content is contained by landmarks",
    help: "All page content should be contained by landmarks",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.9/region?application=axe-puppeteer",
  },
  {
    id: "aria-hidden-body",
    tags: [
      "cat.aria",
      "wcag2a",
      "wcag131",
      "wcag412",
      "EN-301-549",
      "EN-9.1.3.1",
      "EN-9.4.1.2",
    ],
    description:
      'Ensures aria-hidden="true" is not present on the document body.',
    help: 'aria-hidden="true" must not be present on the document body',
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.9/aria-hidden-body?application=axe-puppeteer",
  },
  {
    id: "aria-hidden-focus",
    tags: [
      "cat.name-role-value",
      "wcag2a",
      "wcag412",
      "TTv5",
      "TT6.a",
      "EN-301-549",
      "EN-9.4.1.2",
    ],
    description:
      "Ensures aria-hidden elements are not focusable nor contain focusable elements",
    help: "ARIA hidden element must not be focusable or contain focusable elements",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.9/aria-hidden-focus?application=axe-puppeteer",
  },
  {
    id: "avoid-inline-spacing",
    tags: [
      "cat.structure",
      "wcag21aa",
      "wcag1412",
      "EN-301-549",
      "EN-9.1.4.12",
      "ACT",
    ],
    description:
      "Ensure that text spacing set through style attributes can be adjusted with custom stylesheets",
    help: "Inline text spacing must be adjustable with custom stylesheets",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.9/avoid-inline-spacing?application=axe-puppeteer",
  },
  {
    id: "button-name",
    tags: [
      "cat.name-role-value",
      "wcag2a",
      "wcag412",
      "section508",
      "section508.22.a",
      "TTv5",
      "TT6.a",
      "EN-301-549",
      "EN-9.4.1.2",
      "ACT",
    ],
    description: "Ensures buttons have discernible text",
    help: "Buttons must have discernible text",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.9/button-name?application=axe-puppeteer",
  },
  {
    id: "bypass",
    tags: [
      "cat.keyboard",
      "wcag2a",
      "wcag241",
      "section508",
      "section508.22.o",
      "TTv5",
      "TT9.a",
      "EN-301-549",
      "EN-9.2.4.1",
    ],
    description:
      "Ensures each page has at least one mechanism for a user to bypass navigation and jump straight to the content",
    help: "Page must have means to bypass repeated blocks",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.9/bypass?application=axe-puppeteer",
  },
  {
    id: "color-contrast-enhanced",
    tags: ["cat.color", "wcag2aaa", "wcag146", "ACT"],
    description:
      "Ensures the contrast between foreground and background colors meets WCAG 2 AAA enhanced contrast ratio thresholds",
    help: "Elements must meet enhanced color contrast ratio thresholds",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.9/color-contrast-enhanced?application=axe-puppeteer",
  },
  {
    id: "color-contrast",
    tags: [
      "cat.color",
      "wcag2aa",
      "wcag143",
      "TTv5",
      "TT13.c",
      "EN-301-549",
      "EN-9.1.4.3",
      "ACT",
    ],
    description:
      "Ensures the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds",
    help: "Elements must meet minimum color contrast ratio thresholds",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.9/color-contrast?application=axe-puppeteer",
  },
  {
    id: "document-title",
    tags: [
      "cat.text-alternatives",
      "wcag2a",
      "wcag242",
      "TTv5",
      "TT12.a",
      "EN-301-549",
      "EN-9.2.4.2",
      "ACT",
    ],
    description:
      "Ensures each HTML document contains a non-empty <title> element",
    help: "Documents must have <title> element to aid in navigation",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.9/document-title?application=axe-puppeteer",
  },
  {
    id: "duplicate-id-aria",
    tags: ["cat.parsing", "wcag2a", "wcag412", "EN-301-549", "EN-9.4.1.2"],
    description:
      "Ensures every id attribute value used in ARIA and in labels is unique",
    help: "IDs used in ARIA and labels must be unique",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.9/duplicate-id-aria?application=axe-puppeteer",
  },
  {
    id: "empty-heading",
    tags: ["cat.name-role-value", "best-practice"],
    description: "Ensures headings have discernible text",
    help: "Headings should not be empty",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.9/empty-heading?application=axe-puppeteer",
  },
  {
    id: "form-field-multiple-labels",
    tags: [
      "cat.forms",
      "wcag2a",
      "wcag332",
      "TTv5",
      "TT5.c",
      "EN-301-549",
      "EN-9.3.3.2",
    ],
    description: "Ensures form field does not have multiple label elements",
    help: "Form field must not have multiple label elements",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.9/form-field-multiple-labels?application=axe-puppeteer",
  },
  {
    id: "heading-order",
    tags: ["cat.semantics", "best-practice"],
    description: "Ensures the order of headings is semantically correct",
    help: "Heading levels should only increase by one",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.9/heading-order?application=axe-puppeteer",
  },
  {
    id: "html-has-lang",
    tags: [
      "cat.language",
      "wcag2a",
      "wcag311",
      "TTv5",
      "TT11.a",
      "EN-301-549",
      "EN-9.3.1.1",
      "ACT",
    ],
    description: "Ensures every HTML document has a lang attribute",
    help: "<html> element must have a lang attribute",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.9/html-has-lang?application=axe-puppeteer",
  },
  {
    id: "html-lang-valid",
    tags: [
      "cat.language",
      "wcag2a",
      "wcag311",
      "TTv5",
      "TT11.a",
      "EN-301-549",
      "EN-9.3.1.1",
      "ACT",
    ],
    description:
      "Ensures the lang attribute of the <html> element has a valid value",
    help: "<html> element must have a valid value for the lang attribute",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.9/html-lang-valid?application=axe-puppeteer",
  },
  {
    id: "html-xml-lang-mismatch",
    tags: [
      "cat.language",
      "wcag2a",
      "wcag311",
      "EN-301-549",
      "EN-9.3.1.1",
      "ACT",
    ],
    description:
      "Ensure that HTML elements with both valid lang and xml:lang attributes agree on the base language of the page",
    help: "HTML elements with lang and xml:lang must have the same base language",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.9/html-xml-lang-mismatch?application=axe-puppeteer",
  },
  {
    id: "identical-links-same-purpose",
    tags: ["cat.semantics", "wcag2aaa", "wcag249"],
    description:
      "Ensure that links with the same accessible name serve a similar purpose",
    help: "Links with the same name must have a similar purpose",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.9/identical-links-same-purpose?application=axe-puppeteer",
  },
  {
    id: "image-alt",
    tags: [
      "cat.text-alternatives",
      "wcag2a",
      "wcag111",
      "section508",
      "section508.22.a",
      "TTv5",
      "TT7.a",
      "TT7.b",
      "EN-301-549",
      "EN-9.1.1.1",
      "ACT",
    ],
    description:
      "Ensures <img> elements have alternate text or a role of none or presentation",
    help: "Images must have alternate text",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.9/image-alt?application=axe-puppeteer",
  },
  {
    id: "image-redundant-alt",
    tags: ["cat.text-alternatives", "best-practice"],
    description: "Ensure image alternative is not repeated as text",
    help: "Alternative text of images should not be repeated as text",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.9/image-redundant-alt?application=axe-puppeteer",
  },
  {
    id: "label-title-only",
    tags: ["cat.forms", "best-practice"],
    description:
      "Ensures that every form element has a visible label and is not solely labeled using hidden labels, or the title or aria-describedby attributes",
    help: "Form elements should have a visible label",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.9/label-title-only?application=axe-puppeteer",
  },
  {
    id: "label",
    tags: [
      "cat.forms",
      "wcag2a",
      "wcag412",
      "section508",
      "section508.22.n",
      "TTv5",
      "TT5.c",
      "EN-301-549",
      "EN-9.4.1.2",
      "ACT",
    ],
    description: "Ensures every form element has a label",
    help: "Form elements must have labels",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.9/label?application=axe-puppeteer",
  },
  {
    id: "landmark-main-is-top-level",
    tags: ["cat.semantics", "best-practice"],
    description: "Ensures the main landmark is at top level",
    help: "Main landmark should not be contained in another landmark",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.9/landmark-main-is-top-level?application=axe-puppeteer",
  },
  {
    id: "landmark-no-duplicate-main",
    tags: ["cat.semantics", "best-practice"],
    description: "Ensures the document has at most one main landmark",
    help: "Document should not have more than one main landmark",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.9/landmark-no-duplicate-main?application=axe-puppeteer",
  },
  {
    id: "landmark-one-main",
    tags: ["cat.semantics", "best-practice"],
    description: "Ensures the document has a main landmark",
    help: "Document should have one main landmark",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.9/landmark-one-main?application=axe-puppeteer",
  },
  {
    id: "landmark-unique",
    tags: ["cat.semantics", "best-practice"],
    description:
      "Landmarks should have a unique role or role/label/title (i.e. accessible name) combination",
    help: "Ensures landmarks are unique",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.9/landmark-unique?application=axe-puppeteer",
  },
  {
    id: "link-name",
    tags: [
      "cat.name-role-value",
      "wcag2a",
      "wcag244",
      "wcag412",
      "section508",
      "section508.22.a",
      "TTv5",
      "TT6.a",
      "EN-301-549",
      "EN-9.2.4.4",
      "EN-9.4.1.2",
      "ACT",
    ],
    description: "Ensures links have discernible text",
    help: "Links must have discernible text",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.9/link-name?application=axe-puppeteer",
  },
  {
    id: "list",
    tags: ["cat.structure", "wcag2a", "wcag131", "EN-301-549", "EN-9.1.3.1"],
    description: "Ensures that lists are structured correctly",
    help: "<ul> and <ol> must only directly contain <li>, <script> or <template> elements",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.9/list?application=axe-puppeteer",
  },
  {
    id: "listitem",
    tags: ["cat.structure", "wcag2a", "wcag131", "EN-301-549", "EN-9.1.3.1"],
    description: "Ensures <li> elements are used semantically",
    help: "<li> elements must be contained in a <ul> or <ol>",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.9/listitem?application=axe-puppeteer",
  },
  {
    id: "meta-viewport-large",
    tags: ["cat.sensory-and-visual-cues", "best-practice"],
    description:
      'Ensures <meta name="viewport"> can scale a significant amount',
    help: "Users should be able to zoom and scale the text up to 500%",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.9/meta-viewport-large?application=axe-puppeteer",
  },
  {
    id: "meta-viewport",
    tags: [
      "cat.sensory-and-visual-cues",
      "wcag2aa",
      "wcag144",
      "EN-301-549",
      "EN-9.1.4.4",
      "ACT",
    ],
    description:
      'Ensures <meta name="viewport"> does not disable text scaling and zooming',
    help: "Zooming and scaling must not be disabled",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.9/meta-viewport?application=axe-puppeteer",
  },
  {
    id: "nested-interactive",
    tags: [
      "cat.keyboard",
      "wcag2a",
      "wcag412",
      "TTv5",
      "TT6.a",
      "EN-301-549",
      "EN-9.4.1.2",
    ],
    description:
      "Ensures interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies",
    help: "Interactive controls must not be nested",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.9/nested-interactive?application=axe-puppeteer",
  },
  {
    id: "page-has-heading-one",
    tags: ["cat.semantics", "best-practice"],
    description:
      "Ensure that the page, or at least one of its frames contains a level-one heading",
    help: "Page should contain a level-one heading",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.9/page-has-heading-one?application=axe-puppeteer",
  },
  {
    id: "presentation-role-conflict",
    tags: ["cat.aria", "best-practice", "ACT"],
    description:
      "Elements marked as presentational should not have global ARIA or tabindex to ensure all screen readers ignore them",
    help: "Ensure elements marked as presentational are consistently ignored",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.9/presentation-role-conflict?application=axe-puppeteer",
  },
  {
    id: "region",
    tags: ["cat.keyboard", "best-practice"],
    description: "Ensures all page content is contained by landmarks",
    help: "All page content should be contained by landmarks",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.9/region?application=axe-puppeteer",
  },
  {
    id: "tabindex",
    tags: ["cat.keyboard", "best-practice"],
    description: "Ensures tabindex attribute values are not greater than 0",
    help: "Elements should not have tabindex greater than zero",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.9/tabindex?application=axe-puppeteer",
  },
];
export default rules;
