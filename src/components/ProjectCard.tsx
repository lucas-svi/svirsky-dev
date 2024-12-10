export default function ProjectCard({
  title,
  description,
  name,
  demo,
  code,
  startDate,
  endDate,
  tech,
}: {
  title: string;
  description: string;
  name: string;
  demo?: string;
  code?: string;
  startDate: string;
  endDate?: string;
  tech: string[];
}) {
  return (
    <div className="border border-gray-700 rounded-lg p-6 bg-opacity-50 bg-black hover:shadow-lg">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-300">{description}</p>
      <p className="text-sm mt-2">
        <strong>Project Name:</strong> {name}
      </p>
      <p className="text-sm">
        <strong>Dates:</strong> {startDate} - {endDate || 'Present'}
      </p>
      <div className="flex gap-4 mt-4">
        {demo && (
          <a 
            href={demo} 
            className="btn-primary" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Demo
          </a>
        )}
        {code && (
          <a 
            href={code} 
            className="btn-secondary" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Code
          </a>
        )}
      </div>
      <div className="flex gap-2 flex-wrap mt-4">
        {tech.map((t) => (
          <span key={t} className="text-xs bg-gray-800 px-2 py-1 rounded">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}