
const BASE_URL = "https://potterapi-fedeperin.vercel.app/en/characters";

export function createUrl(query:string ): string {
  const searchParams = new URLSearchParams();
  searchParams.append("search", String(query));

  return `${BASE_URL}?${searchParams.toString()}`;
}