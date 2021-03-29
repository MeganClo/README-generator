// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function generatelicenseSection(license) {}

// generating the installation section if user added on
const generateInstallation = installationText => {
  if (!installationText) {
    return '';
  }
  return `
  ## Installation
  
  ${installationText}
  `;
};

const generateUsage = usageText => {
  if (!usageText) {
    return '';
  }
  return `
  ## Usage
  
  ${usageText}
  `;
};

const generateAcknoledgment = acknowledgmentText => {
  if (!acknowledgmentText) {
    return '';
  }
  return `
  ## Acknowledgments
  
  ${acknowledgmentText}
  `;
};

const generateContribution = contributionText => {
  if (!contributionText) {
    return '';
  }
  return `
  ## Contribution
  
  ${contributionText}
  `;
};

const generateTesting = testText => {
  if (!testText) {
    return '';
  }
  return `
  ## Contribution
  
  ${contributionText}
  `;
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description

  ${data.description}

  ${generateTableContents(contents)}

  ${generateInstallation(installation)}

  ${generateUsage(usage)}

  ${generateAcknoledgment(awknowledgment)}

  ${generatelicenseSection(lisence)}

  ${generateContribution(contribution)}

  ${generateTesting(testing)}

`;
}

module.exports = generateMarkdown;
