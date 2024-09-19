import { AddressComponent } from "@/components/address";
import Header from "@/components/header";
import GetAddress from "@/lib/get-address";

export default async function AddressPage() {
  const address = await GetAddress();
  console.log("address page", address.length);
  console.log("address page last", address.slice(-1)[0]);
  console.log("address page 0", address[0]);
  console.log("address page 10", address[0]);

  return (
    <div>
      <Header />
      <AddressComponent />
    </div>
  );
}
