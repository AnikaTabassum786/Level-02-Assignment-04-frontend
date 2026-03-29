import EditMedicineServer from "@/components/modules/seller/all-medicine/EditMedicineServer";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditMedicinePage({ params }: PageProps) {
  const { id } = await params;

  return <EditMedicineServer id={id} />;
}