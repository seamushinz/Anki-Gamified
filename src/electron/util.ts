//used to toggle between dev and prod environments
export function isDev(): boolean {
  return process.env.NODE_ENV === 'development';
}