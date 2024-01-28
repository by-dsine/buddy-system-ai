"use client";
import supabase from "@/utils/supabase/client";
import { useEffect } from "react";
import { getClient } from "@/utils/gdrive";
import {
  google, // The top level object used to access services
  drive_v3, // For every service client, there is an exported namespace
  Auth, // Namespace for auth related types
  Common, // General types used throughout the library
} from 'googleapis';
import {GaxiosError} from 'googleapis-common';

export default function GoogleDatasourcePage() {
  useEffect(() => {
    const getUserToken = async () => {
      const { data: session, error } = await supabase.auth.getSession();
      if (error) {
        console.log(error);
        // todo: handle error
      }

      {
        const { data, error } = await supabase
          .from("provider_token")
          .select()
          .eq("user_id", session.session?.user.id!)
          .eq("provider", "google")
          .order("created_at", { ascending: false })
          .limit(1);

        if (error) {
          console.log(error);
          // todo: handle error
        }

        if (data) {
          console.log("Successfully received user tokens");
        } else {
          return;
        }

        const drive = getClient(data[0].provider_token);
        try {
          // There are generated types for every set of request parameters
          const listParams: drive_v3.Params$Resource$Files$List = {};
          const res = await drive.files.list(listParams);
      
          // There are generated types for the response fields as well
          const listResults: drive_v3.Schema$FileList = res.data;
          console.log(listResults);
        } catch (e) {
          // In many cases, errors from the API will come back as `GaxiosError`.
          // These will include the full HTTP Response (you should check for it first)
          if ((e as GaxiosError).response) {
            const err = e as Common.GaxiosError;
            console.error(err.response);
            throw err;
          }
        }
      }
    };
    getUserToken();
  }, []);

  return <div></div>;
}
