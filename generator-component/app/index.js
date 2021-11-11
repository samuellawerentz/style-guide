var Generator = require('yeoman-generator')

module.exports = class extends Generator {
  prompting() {
    return this.prompt([
      {
        type: 'input',
        name: 'compName',
        message: '\nName of the component:',
        default: 'NewComponent',
      },
      {
        type: 'input',
        name: 'description',
        message: '\nShort Description:',
        default: 'New Component',
      },
      {
        type: 'input',
        name: 'props',
        // eslint-disable-next-line max-len
        message: `\nEnter props for this component separated by space\nSyntax: (propName:string|bool|func|array|any)\nExample: prop1:bool prop2:string\n`,
      },
    ]).then(
      function (ans) {
        const { compName, description, props } = ans

        // Ensure component name is capitalized
        ans.compName = compName.charAt(0).toUpperCase() + compName.slice(1)

        // Write react component
        this.fs.copyTpl(
          this.templatePath('component.ejs'),
          this.destinationPath(`src/components/${ans.compName}/index.js`),
          { name: ans.compName, description, lowerName: compName.toLowerCase(), props },
        )

        // // Write enzyme tests
        // this.fs.copyTpl(
        //   this.templatePath('spec.ejs'),
        //   this.destinationPath(`${ans.compName}/index.spec.js`),
        //   { name: ans.compName, elm: ans.elmType, isComp: ans.isComponent },
        // )

        // Write react-storybook file
        this.fs.copyTpl(
          this.templatePath('story.ejs'),
          this.destinationPath(`src/components/${ans.compName}/index.stories.js`),
          { name: ans.compName },
        )

        // Write scss styles
        this.fs.copyTpl(
          this.templatePath('styles.ejs'),
          this.destinationPath(`src/components/${ans.compName}/styles.scss`),
          { name: ans.compName, lowerName: compName.toLowerCase() },
        )
      }.bind(this),
    )
  }
}
