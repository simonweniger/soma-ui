import { ComboboxItem, SomaComboBox } from "@/registry/default/ui/combobox"

export default function CheckboxReusable() {
  return (
    <SomaComboBox
      label="Ice cream flavor"
      description="Select a flavor"
      isRequired
    >
      <ComboboxItem>Chocolate</ComboboxItem>
      <ComboboxItem>Mint</ComboboxItem>
      <ComboboxItem>Strawberry</ComboboxItem>
      <ComboboxItem>Vanilla</ComboboxItem>
    </SomaComboBox>
  )
}
