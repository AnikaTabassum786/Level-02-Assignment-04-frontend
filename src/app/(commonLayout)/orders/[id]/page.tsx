// src/app/(commonLayout)/order/[id]/page.tsx

import OrderDetailsFromServer from "@/components/modules/orders/OrderDetailsFromServer";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div>
      <OrderDetailsFromServer id={id} />
    </div>
  );
}