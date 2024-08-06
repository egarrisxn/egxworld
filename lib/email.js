export async function sendEmail(data) {
  try {
    const apiEndpoint = '/api/email'
    const res = await fetch(apiEndpoint, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const response = await res.json()
    alert(response.message)
  } catch (err) {
    alert('Failed to send email: ' + err)
  }
}

// export function sendEmail(data) {
//   const apiEndpoint = '/api/email'

//   fetch(apiEndpoint, {
//     method: 'POST',
//     body: JSON.stringify(data),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//     .then((res) => res.json())
//     .then((response) => {
//       alert(response.message)
//     })
//     .catch((err) => {
//       alert(err)
//     })
// }
