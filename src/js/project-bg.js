(function() {
  var projectTitles = document.querySelectorAll('.js-project-title');
  var projectSection = document.querySelector('.js-projects');

  window.addEventListener('DOMContentLoaded', () => {
    console.log(projectTitles);
    projectSection.style.backgroundColor = projectTitles[0].getAttribute(
      'data-bg-color'
    );
  });

  projectTitles.forEach((element) => {
    element.addEventListener('click', (event) => {
      projectSection.style.backgroundColor = event.target.getAttribute(
        'data-bg-color'
      );
    });
  });
})();
