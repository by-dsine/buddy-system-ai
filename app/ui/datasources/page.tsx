import NewDatasourceButton from "@/components/ui/NewDatasourceButton";

export default function DatasourcesPage() {
  return (
    <div className="grid grid-rows-2 grid-cols-3 gap-4">
      <NewDatasourceButton />
      <NewDatasourceButton />
      <NewDatasourceButton />
      <NewDatasourceButton />
      <NewDatasourceButton />
      <NewDatasourceButton />
    </div>
  );
}
