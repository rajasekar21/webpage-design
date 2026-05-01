export const siteConfig = {
  repoName: 'jpedwin-memorial-page',
  githubOwner: 'rajasekar21',
  title: 'edwinchelliah',
  description:
    'A respectful digital memorial preserving biography, life timeline, family stories, photographs, memories, tributes, and legacy.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.edwinchelliah.com'
};

export function withBasePath(path: string) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  if (path.startsWith('http')) return path;
  return `${basePath}${path}`;
}
