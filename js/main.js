class GitHubProjects {
    constructor(user) {
        this.user = user;
        this.projects = [];
        this.loadProjects();
    }

    async fetchData() {
        const response = await fetch(`https://api.github.com/users/${this.user}/repos`);
        const data = await response.json();
        return data;
    }

    async loadProjects() {
        this.projects = await this.fetchData().then(data => {
            return data.map(project => {
                if (project.fork) return;
                return {
                    name: project.name,
                    description: project.description,
                    language: project.language,
                    created_at: project.created_at,
                    updated_at: project.updated_at,
                    html_url: project.html_url
                };
            });
        });
        this.sortProjects();
    }

    sortProjects() {
        this.projects.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
    }

    getProjects() {
        return this.projects;
    }
}

(async () => {
    const gitHubProjects = new GitHubProjects('luuxis');
    await gitHubProjects.loadProjects();

    for (const project of gitHubProjects.getProjects()) {
        const projectElement = document.createElement('div');
        projectElement.innerHTML = `
            <h3>${project.name}</h2>
            <p>${project.description || 'No description'}</p>
            <p>Language: ${project.language}</p>
            <p>created at: ${new Date(project.created_at).toLocaleDateString()}</p>
            <a href="${project.html_url}" target="_blank">View on GitHub</a>
        `;

        projectElement.classList.add('project');

        document.querySelector('.projects .container ').appendChild(projectElement);
    }
})();