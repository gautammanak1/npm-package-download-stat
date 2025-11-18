export interface DownloadPoint {
  downloads: number;
  start: string;
  end: string;
  package: string;
}

export interface DownloadRange {
  downloads: Array<{
    downloads: number;
    day: string;
  }>;
  start: string;
  end: string;
  package: string;
}

export async function getPackageDownloads(
  packageName: string,
  from: string,
  to: string
): Promise<DownloadRange> {
  const url = `https://api.npmjs.org/downloads/range/${from}:${to}/${packageName}`;
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch downloads for ${packageName}`);
  }
  
  return response.json();
}

export async function getPackageDownloadsPoint(
  packageName: string,
  period: "last-day" | "last-week" | "last-month" | "last-year"
): Promise<DownloadPoint> {
  const url = `https://api.npmjs.org/downloads/point/${period}/${packageName}`;
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch downloads for ${packageName}`);
  }
  
  return response.json();
}

export async function getPackageInfo(packageName: string) {
  const url = `https://registry.npmjs.org/${packageName}`;
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error(`Package ${packageName} not found`);
  }
  
  return response.json();
}

