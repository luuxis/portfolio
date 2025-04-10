export default ({ title, description, tags, repo, site }) => (
    <>
        <div className="bg-gray-800 p-6 rounded-lg shadow hover:scale-105 transition-transform duration-300 w-full md:w-[300px] text-left">
            <h4 className="text-xl text-teal-300 font-bold">{title}</h4>
            <p className="text-gray-400 text-sm mt-2 mb-4">{description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag, idx) => (
                    <span
                        key={idx}
                        className="bg-teal-600 text-white text-xs font-medium px-2 py-1 rounded"
                    >
                        {tag}
                    </span>
                ))}
            </div>
            <div className="flex gap-4">
                {repo && (
                    <a
                        href={repo}
                        target="_blank"
                        className="text-sm text-teal-400 hover:underline"
                    >
                        Code
                    </a>
                )}
                {site && (
                    <a
                        href={site}
                        target="_blank"
                        className="text-sm text-teal-400 hover:underline"
                    >
                        Démo
                    </a>
                )}
            </div>
        </div>
    </>
)