import { SomaSelect, SelectItem } from "@/registry/default/ui/select"

export default function SelectReusable() {
  return (
    <SomaSelect
      label="Ice cream flavor"
      description="Select a flavor"
      className="w-[200px]"
      isRequired
    >
      <SelectItem>Chocolate</SelectItem>
      <SelectItem>Mint</SelectItem>
      <SelectItem>Strawberry</SelectItem>
      <SelectItem>Vanilla</SelectItem>
    </SomaSelect>
  )
}
