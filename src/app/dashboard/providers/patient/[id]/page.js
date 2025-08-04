import Patient from "@/views/Patient";

export default function Page({ params }) {
  return <Patient id={params.id} />; // Pass plain id
}
