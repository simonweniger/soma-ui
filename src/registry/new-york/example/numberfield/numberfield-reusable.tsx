import { SomaNumberField } from "@/registry/new-york/ui/numberfield"

export default function NumberfieldReusable() {
  return (
    <SomaNumberField
      label="Cookies"
      isRequired
      description="Please enter a number"
    />
  )
}
