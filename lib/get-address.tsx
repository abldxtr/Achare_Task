export default async function GetAddress() {
  const res = await fetch("https://stage.achareh.ir/api/karfarmas/address", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic MDk4MjIyMjIyMjI6U2FuYTEyMzQ1Njc4",
    },
  });

  const data = await res.json();
  // console.log("address get", data);
  return data;
}
