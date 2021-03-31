// creating a variable to hold my table of contents
let tableOfContents = `## Table of Contents
`;

// function to generate table of contents dependant on what user wanted to include in readme
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
  };
  if (tableOfContentsText.license.length > 0) {
    tableOfContents += `* [License-Information](#License-Information)
`
  }
  tableOfContents += `* [Questions](#Questions)
`
  return tableOfContents;
};
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let badge = [];

const renderLicenseBadge = possibleLicenseArr => {
  if (possibleLicenseArr.length > 0) {
    if (possibleLicenseArr.includes("Apache")) {
      badge.push("[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)")
    }
    if (possibleLicenseArr.includes("Boost Software License")) {
      badge.push("[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)")
    }
    if (possibleLicenseArr.includes("BSD")) {
      badge.push("[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)")
    };
  } 
  console.log(badge);
  return `${badge.map((licenseBadge) => {
    return `${licenseBadge}`
  }).join("")}`  
};

// generating the installation section if user wanted to include one
const generateInstallation = installationText => {
    if (installationText) {
      return `## Installation :clipboard:
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
    return `## Acknowledgments :trophy:
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
    return `## Testing :lab_coat:
${testText}

  `};
};

// generating the license section if user wanted to include one and accounting for mutliple licenses
const generateLicenseSection = possibleLicense => {
  if (possibleLicense.length > 0) {
    return `## License-Information :label:
  ${possibleLicense.map((license) => {
    return `* ${license}
`

  }).join("")}  `
  };
};

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  console.log(data);
  return `# ${data.title} ${renderLicenseBadge(data.license)}

## Description
${data.description}

${generateTableOfContents(data)}
${generateInstallation(data.installation)}
${generateUsage(data.usage)}
${generateAcknowledgment(data.acknowledgment)}
${generateContribution(data.contribution)}
${generateTesting(data.test)}
${generateLicenseSection(data.license)}
## Questions :mailbox:
Check out my GitHub Profile [here](https://github.com/${data.github})

Please email me with any questions or comments: <${data.email}>`
};

module.exports = generateMarkdown;
