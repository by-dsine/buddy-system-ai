import { google, drive_v3 } from 'googleapis'

export const getClient = (accessToken) => {
  const oAuth2Client = new google.auth.OAuth2()
  oAuth2Client.setCredentials({ access_token: accessToken })

  return drive_v3.Drive.drive({
    version: 'v3',
    auth: oAuth2Client,
  })
}

export const getRefreshClient = (refreshToken) => {
  const oAuth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_ID,
    process.env.GOOGLE_CLIENT_SECRET
  )
  // oAuth2Client.setCredentials({ access_token: authToken })
  oAuth2Client.setCredentials({ refresh_token: refreshToken })

  return google.drive({
    version: 'v3',
    auth: oAuth2Client,
  })
}
