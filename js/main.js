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

    async fetchReadme(repo) {
        let response = await fetch(`https://api.github.com/repos/${this.user}/${repo}/readme`);
        if (!response.ok) return false;
        response = await response.json();
        const readmeContent = await fetch(response.download_url);
        return await readmeContent.text();
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

function openModal(readmeContent) {
    document.querySelector('.modal-readme').innerHTML = readmeContent;

    const modal = document.querySelector('.modal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';

    document.querySelector('.close-button').onclick = () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    };

    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    };
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
            <a href="#" class="view-details" data-project='${JSON.stringify(project)}'>View details</a>
        `;

        projectElement.classList.add('project');
        document.querySelector('.projects .container').appendChild(projectElement);

        projectElement.querySelector('.view-details').onclick = async (event) => {
            event.preventDefault();
            const readmeContent = await gitHubProjects.fetchReadme(project.name);
            if (!readmeContent) {
                openModal('No README file found.');
                return;
            }
            openModal(marked.parse(readmeContent));
        };
    }
})();