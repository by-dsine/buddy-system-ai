import NewDatasourceButton from "@/components/ui/NewDatasourceButton";

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
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="max-w-lg pt-24 lg:pt-12">
          <NewDatasourceButton />
        </div>
      </div>
    </>
  );
}
