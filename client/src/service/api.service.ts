import http from 'axios'

export const dailycount = async () => {
  const countCheck = window.sessionStorage.getItem('countCheck')

  if (countCheck !== 'true') {
    await http.request({
      url: 'http://localhost:4000/api/v1/pokemon/count',
      method: 'POST',
    })
    window.sessionStorage.setItem('countCheck', 'true')
  }
}
