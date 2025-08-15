import { SomaDateField } from "@/registry/default/ui/datefield"

export default function DatefieldReusable() {
  return (
    <SomaDateField className="min-w-[150px]" label="Event date" isRequired />
  )
}
