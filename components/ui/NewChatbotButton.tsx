import Link from "next/link";

export default async function NewChatbotButton() {
  return (
    <Link href="/ui/chatbots/new">
      <button
        type="button"
        className="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
      >
        {/* <svg
          className="mx-auto h-12 w-12 text-gray-400"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 48 48"
          aria-hidden="true"
        >
          <path d="M9 15a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm-7-1a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1Zm20 0a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1Zm-5-7h-4V5.72A2 2 0 0 0 14 4a2 2 0 0 0-4 0 2 2 0 0 0 1 1.72V7H7a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3Zm-3.28 2-.5 2h-2.44l-.5-2ZM18 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h1.22L9 12.24a1 1 0 0 0 1 .76h4a1 1 0 0 0 1-.76L15.78 9H17a1 1 0 0 1 1 1Zm-3-4a1 1 0 1 0 1 1 1 1 0 0 0-1-1Z" />
        </svg> */}
        
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
          className="mx-auto h-12 w-12 text-gray-400 min-w-48"
        >
          <path d="M9 15a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm-7-1a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1Zm20 0a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1Zm-5-7h-4V5.72A2 2 0 0 0 14 4a2 2 0 0 0-4 0 2 2 0 0 0 1 1.72V7H7a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3Zm-3.28 2-.5 2h-2.44l-.5-2ZM18 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h1.22L9 12.24a1 1 0 0 0 1 .76h4a1 1 0 0 0 1-.76L15.78 9H17a1 1 0 0 1 1 1Zm-3-4a1 1 0 1 0 1 1 1 1 0 0 0-1-1Z" />
        </svg>
        <span className="mt-2 block text-sm font-semibold text-gray-900">
          Connect a new chatbot
        </span>
      </button>
    </Link>
  );
}
