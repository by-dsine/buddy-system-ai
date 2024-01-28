"use client";

import { useEffect, useState } from "react";
import { gapi } from "gapi-script";

const googleClientId = process.env.GOOGLE_CLIENT_ID!;
const googleApiKey = process.env.GOOGLE_API_KEY!;

export default function DriveComponent() {
  interface DriveFile {
    id: string;
    name: string;
  }

  const [driveFiles, setDriveFiles] = useState<DriveFile[]>([]);

  useEffect(() => {
    // Load Google API
    gapi.load("client:auth2", initClient);
  }, []);

  const initClient = () => {
    // Initialize Google API client
    gapi.client
      .init({
        apiKey: googleApiKey,
        clientId: googleClientId,
        discoveryDocs: [
          "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest",
        ],
        scope: "https://www.googleapis.com/auth/drive.readonly",
      })
      .then(() => {
        // Check if user is signed in
        if (gapi.auth2.getAuthInstance().isSignedIn.get()) {
          listDriveFiles();
        }
      });
  };

  const listDriveFiles = () => {
    // Fetch files from Google Drive
    gapi.client.drive.files
      .list({
        pageSize: 10, // Adjust the number of files you want to fetch
        fields: "nextPageToken, files(id, name, mimeType, parents)",
      })
      .then((response: { result: { files: any } }) => {
        const files = response.result.files;
        setDriveFiles(files);
      });
  };

  return (
    <div>
      <h2>Your Google Drive Files</h2>
      <ul>
        {driveFiles.map((file) => (
          <li key={file.id}>{file.name}</li>
        ))}
      </ul>
    </div>
  );
}
