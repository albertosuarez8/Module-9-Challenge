let fs = require("fs");
// This application uses mustache to fill out template README and create a new one with the new data
let { render } = require("mustache");
// Obj containing all badges for common licenses
let badges = {
  "Apache License 2.0": {
    icon: "https://img.shields.io/badge/License-Apache%202.0-blue.svg",
    link: "https://opensource.org/licenses/Apache-2.0"
  },
  "GNU GPLv3": {
    icon: "https://img.shields.io/badge/License-GPL%20v3-blue.svg",
    link: "https://www.gnu.org/licenses/gpl-3.0"
  },
  "GNU AGPLv3": {
    icon: "https://img.shields.io/badge/License-AGPL%20v3-blue.svg",
    link: "https://www.gnu.org/licenses/agpl-3.0"
  },
  "GNU LGPLv3": {
    icon: "https://img.shields.io/badge/License-LGPL%20v3-blue.svg",
    link: "https://www.gnu.org/licenses/lgpl-3.0"
  },
  "Mozilla Public License 2.0": {
    icon: "https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg",
    link: "https://opensource.org/licenses/MPL-2.0"
  },
  "Boost Software License 1.0": {
    icon: "https://img.shields.io/badge/License-Boost_1.0-lightblue.svg",
    link: "https://www.boost.org/LICENSE_1_0.txt"
  },
  "MIT License": {
    icon: "https://img.shields.io/badge/License-MIT-yellow.svg",
    link: "https://opensource.org/licenses/MIT"
  },
  "ISC License": {
    icon: "https://img.shields.io/badge/License-ISC-blue.svg",
    link: "https://opensource.org/licenses/ISC"
  },
  "The Unlicense": {
    icon: "https://img.shields.io/badge/license-Unlicense-blue.svg",
    link: "http://unlicense.org/"
  }
}

// Generate markdown for README with User Data
function generateMarkdown(data) {
  data.icon = badges[data.license].icon
  data.link = badges[data.license].link
  // Creates the template into a string
  let template = fs.readFileSync("./utils/template.md").toString();
  // Adds the data into the template using the render method
  let output = render(template, data);
  writeToFile("README", output);
}

// Creates a README file with the data sent from the application
function writeToFile(fileName, data) {
  fs.writeFileSync(`./result/${fileName}.md`, data);
}

module.exports = generateMarkdown;
