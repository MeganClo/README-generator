let tableOfContents = `## Table of Contents
`;
const generateTableOfContents = tableOfContentsText => {
  if (tableOfContentsText.installation) {
    tableOfContents += `[Installation](#Installation)
`;
  };
  if (tableOfContentsText.usage) {
    tableOfContents += `[Usage](#Usage)
`
  };
  if (tableOfContentsText.acknowledgment) {
    tableOfContents += `[Acknowledgment](#Acknowledgement)
`
  };
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
    if (!installationText) {
    return '';
  }
  return `## Installation
${installationText}

  `;
};

// generating the usage section if user wanted to include one
const generateUsage = usageText => {
  if (!usageText) {
    return '';
  }
  return `## Usage
${usageText}

  `;
};

// generate Acknowledgment section if user wanted to include one
const generateAcknowledgment = acknowledgmentText => {
  if (!acknowledgmentText) {
    return '';
  }
  return `
  ## Acknowledgments
${acknowledgmentText}

  `;
};

// generate contribution section if user wanted to include one
// const generateContribution = contributionText => {
//   if (!contributionText) {
//     return '';
//   }
//   return `
//   ## Contribution
  
//   ${contributionText}
//   `;
// };

// generate testing section if user wanted to include one
// const generateTesting = testText => {
//   if (!testText) {
//     return '';
//   }
//   return `
//   ## Testing
  
//   ${testText}
//   `;
// };

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  console.log(data, "line 76");
  return `
# ${data.title}

## Description
${data.description}

${generateTableOfContents(data)}
${generateInstallation(data.installation)}
${generateUsage(data.usage)}
${generateAcknowledgment(data.acknowledgment)}`
};



  



//   ${generateContribution()}

//   ${generateTesting()}

// ;



// ${generateTableContents(contents)}
// ${generatelicenseSection(lisence)}
module.exports = generateMarkdown;
