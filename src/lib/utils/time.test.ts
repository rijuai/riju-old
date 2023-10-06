import dayjs from 'dayjs'
import { getCurrentTime } from './time'

test('Should return current time', () => {
	const time = dayjs().format()
	expect(getCurrentTime()).toBe(time)
})
