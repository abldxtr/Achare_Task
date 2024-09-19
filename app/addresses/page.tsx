import GetAddress from "@/lib/get-address";

export default async function Address() {
  const address = await GetAddress();
  console.log("address page", address);

  return <div>you made it</div>;
}
