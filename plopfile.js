module.exports = plop => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'list',
        name: 'type',
        message: 'What type of component?',
        choices: ['atom', 'molecule', 'organism', 'template', 'page'],
      },
      {
        type: 'input',
        name: 'name',
        message: 'Component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{type}}s/{{kebabCase name}}/{{kebabCase name}}.component.jsx',
        templateFile: 'plop-templates/component.jsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{type}}s/{{kebabCase name}}/{{kebabCase name}}.component.scss',
        templateFile: 'plop-templates/component.scss.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{type}}s/{{kebabCase name}}/{{kebabCase name}}.component.test.jsx',
        templateFile: 'plop-templates/component.test.jsx.hbs',
      },
    ],
  });
};
