import { SomaNumberField } from "@/registry/default/ui/numberfield"

export default function NumberfieldReusable() {
  return (
    <SomaNumberField
      label="Cookies"
      isRequired
      description="Please enter a number"
    />
  )
}
