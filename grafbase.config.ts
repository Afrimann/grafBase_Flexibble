import { g, config } from '@grafbase/sdk';

// Define the Project type
const Project = g.type('Project', {
  title: g.string(),
  description: g.string(),
  owner: g.ref('User'),
  image: g.url(),
  liveSiteUrl: g.url(),
  githubUrl: g.url(),
  category: g.string(),
  createdBy: g.ref('User')
});

// Define the User type
const User = g.type('User', {
  name: g.string(),
  email: g.string(),
  avatarUrl: g.url(),
  description: g.string().optional(),
  githubUrl: g.url().optional(),
  linkedInUrl: g.url().optional(),
  projects: g.ref('Project').list().optional()
});

// Export the configuration
export default config({
  schema: g
});
