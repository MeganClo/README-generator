// creating a table of contents with needed compondents based off user input
let tableOfContents = `## Table of Contents
`;
const generateTableOfContents = tableOfContentsText => {
  if (tableOfContentsText.installation) {
    tableOfContents += `* [Installation](#Installation)
`;
  };
  if (tableOfContentsText.usage) {
    tableOfContents += `* [Usage](#Usage)
`
  };
  if (tableOfContentsText.acknowledgment) {
    tableOfContents += `* [Acknowledgments](#Acknowledgments)
`
  };
  if (tableOfContentsText.contribution) {
    tableOfContents += `* [Contributions](#Contributions)
`
  };
  if (tableOfContentsText.test) {
    tableOfContents += `* [Testing](#Testing)
`
  }
  tableOfContents += `* [Questions](#Questions)
`
  return tableOfContents;
};
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function generatelicenseSection(license) {}

// generating the installation section if user wanted to include one
const generateInstallation = installationText => {
    if (installationText) {
      return `## Installation
${installationText}

  `};
};

// generating the usage section if user wanted to include one
const generateUsage = usageText => {
  if (usageText) {
    return `## Usage
${usageText}

  `};
};

// generate Acknowledgment section if user wanted to include one
const generateAcknowledgment = acknowledgmentText => {
  if (acknowledgmentText) {
    return `## Acknowledgments
${acknowledgmentText}

  `};
};

// generate contribution section if user wanted to include one
const generateContribution = contributionText => {
  if (contributionText) {
    return `## Contributions
${contributionText}

  `};
};

// generate testing section if user wanted to include one
const generateTesting = testText => {
  if (testText) {
    return `## Testing
${testText}

  `};
};

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  return `
# ${data.title}

## Description
${data.description}

${generateTableOfContents(data)}
${generateInstallation(data.installation)}
${generateUsage(data.usage)}
${generateAcknowledgment(data.acknowledgment)}
${generateContribution(data.contribution)}
${generateTesting(data.test)}
## Questions
Check out my GitHub Profile [here](https://github.com/${data.github}) 
Please email me with any questions or comments: <${data.email}>`
};

// ${generatelicenseSection(lisence)}
module.exports = generateMarkdown;
