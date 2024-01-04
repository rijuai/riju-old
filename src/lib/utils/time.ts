export const getCurrentTime = (): string => {
	const currentTime = new Date().toISOString()
	return currentTime
}
