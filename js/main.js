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
            return data.filter(project => !project.fork);
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
            <h3>${project.name}</h3>
            <p>${project.description || 'No description'}</p>
            <p>Language: ${project.language}</p>
            <p>Created at: ${new Date(project.created_at).toLocaleDateString()}</p>
            <div class="view-details">View details</div>
        `;

        projectElement.classList.add('project');
        document.querySelector('.projects .container').appendChild(projectElement);
    }
})();