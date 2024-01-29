"use client";
import NewDatasourceButton from "@/components/ui/NewDatasourceButton";
import supabase from "@/utils/supabase/client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const connectors = [
  {
    id: "google-drive",
    name: "Google Drive",
    href: "#",
    disabled: false,
  },
  {
    id: "click-up",
    name: "Click Up",
    href: "#",
    disabled: true,
  },
  {
    id: "notion",
    name: "Notion",
    href: "#",
    disabled: true,
  },
  {
    id: "microsoft-azure",
    name: "Azure",
    href: "#",
    disabled: true,
  },
  {
    id: "confluence",
    name: "Confluence",
    href: "#",
    disabled: true,
  },
];

export default function NewDatasourcesPage() {
  const [connector, setConnector] = useState(connectors[0]);
  const pathname = usePathname();
  console.log("Pathname: " + pathname);

  const handleGoogleSignIn = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:3000/ui/datasources/google",
        scopes: "https://www.googleapis.com/auth/drive.file",
        queryParams: {
          access_type: "offline",
          prompt: "consent", // The refresh-token gets returned only immediately after consent. It wont
          // be re-issued on sessionRefresh or Login. For test purposes, I ask consent every time.
        },
      },
    });

    if (error) {
      console.error("Error signing in", error);
      return;
    }

    console.log(data);
    // Handle the success state
    console.log("Successfully signed in!");
  };

  // form that asks which connectors they want to set up
  // button that allows them to view/edit other connectors
  //
  // form
  // connector
  // connect button -> OAuth sign in if available
  return (
    <div className="grid grid-rows-1 grid-cols-3">
      <div className="col-span-1">
        <label className="text-base font-semibold text-gray-900">
          Data Source Connectors
        </label>
        <p className="text-sm text-gray-500">
          How do you want to connect to your data?
        </p>
        <fieldset className="mt-4">
          <legend className="sr-only">Notification method</legend>
          <div className="space-y-4">
            {connectors.map((connector) => (
              <div key={connector.id} className="flex items-center">
                <input
                  id={connector.id}
                  name="notification-method"
                  type="radio"
                  className="peer h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  disabled={connector.disabled}
                  onChange={() => setConnector(connector)}
                />
                <label
                  htmlFor={connector.id}
                  className="ml-3 block text-sm font-medium leading-6 text-gray-900 peer-disabled:text-gray-400"
                >
                  {connector.name}
                </label>
              </div>
            ))}
          </div>
        </fieldset>
      </div>
      <div className="col-span-2 flex items-center justify-center">
        <button
          onClick={() => handleGoogleSignIn()}
          disabled={!connector}
          type="button"
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Connect
        </button>
      </div>
    </div>
  );
}
