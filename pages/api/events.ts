import { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const calendar = google.calendar({
    version: "v3",
    auth: process.env.GOOGLE_API_KEY,
  });
  const response = await calendar.events.list({
    calendarId:
      "c_1e18424b2d7858df66e3de351d24af817f5a2e7de037dc87131916da7d3a9689@group.calendar.google.com",
    timeMin: new Date().toISOString(),
    maxResults: 5,
    singleEvents: true,
    orderBy: "startTime",
  });
  const events = response.data.items;

  res.status(200).send({
    events,
  });
}
