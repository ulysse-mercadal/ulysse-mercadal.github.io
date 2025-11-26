export const dynamic = 'force-static';
export const revalidate = false;

export async function GET() {
  return new Response(JSON.stringify({ error: 'Search not available in static export' }), {
    status: 404,
    headers: { 'Content-Type': 'application/json' },
  });
}
