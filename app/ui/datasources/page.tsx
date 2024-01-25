"use client";
import NewDatasourceButton from "@/components/ui/NewDatasourceButton";
import supabase from "@/utils/supabase/client";
import { useState } from "react";

const connectors = [
  {
    name: "Google Drive",
    href: "#",
  },
  {
    name: "Click Up",
    href: "#",
  },
  {
    name: "Notion",
    href: "#",
  },
  {
    name: "Azure",
    href: "#",
  },
  {
    name: "Confluence",
    href: "#",
  },
  {
    name: "Local Upload",
    href: "#",
  },
  {
    name: "QnA",
    href: "#",
  },
];

export default function DatasourcesPage() {
  const handleGoogleSignIn = async () => {
    let { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    });

    if (error) {
      console.error("Error signing in", error);
      return;
    }

    // Handle the success state
    console.log("Successfully signed in!");
  };

  return (
    <div className="flex items-center justify-center">
      <div className="max-w-lg pt-24 lg:pt-12">
        <NewDatasourceButton />
      </div>
    </div>
  );
}
