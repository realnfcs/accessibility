export function getYouTubeVideoId(url: string): string | null {
	try {
	  const urlObj = new URL(url)
	  if (urlObj.hostname.includes('youtube.com')) {
		return urlObj.searchParams.get('v')
	  } else if (urlObj.hostname === 'youtu.be') {
		return urlObj.pathname.slice(1)
	  }
	} catch (e) {
		console.log(e)
	  return null
	}
	return null
  }
  
  