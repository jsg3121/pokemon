import dayjs from 'dayjs'
import locale from 'dayjs/locale/ko'

dayjs.locale(locale)

export const getTime = () => {
  return dayjs().add(9, 'hour').format()
}
